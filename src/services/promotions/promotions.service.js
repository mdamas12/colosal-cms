import { Observable } from 'rxjs'
import { api } from 'boot/axios'
import PromotionsPagination from '../../models/promotions/PromotionsPagination'

//const API_URL = 'http://localhost:8000/panel/' // process.env.API_URL+'/v1/';
// const API_URL_SIGN = process.env.API_SASS+'/dsign/';

const API_URL = process.env.API_URL + "panel/";

class PromotionsService {
  getPromotions (limit, offset){
    return Observable.create((observer) => {
      api.get(API_URL + `promotions/list?limit=${limit}&offset=${offset}`)
        .then((response) => {
          observer.next(response.data)
          observer.complete()
        })
        .catch((error) => {
          observer.error(error)
        })
    })
  }

  createPromotion(promotion, products){
    return Observable.create((observer) => {
      api({
        method: 'post', //you can set what request you want to be
        url: API_URL + 'promotions/',
        data: promotion,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
        }).then((response) => {
          let promotion_id  = response.data.id
          if (Object.keys(products).length === 0){
            observer.next(response.data)
            observer.complete()
          }
          else{
            api({
              method: 'post', //you can set what request you want to be
              url: API_URL + 'promotions/products/',
              data: {products_detail : products, promotion: promotion_id}
              }).then((response) => {  
                  console.log(response);
                  observer.next(response.data)
                  observer.complete()
              }).catch((error) => {
                   observer.error(error)
              })    
          }
        }).catch((error) => {
          observer.error(error)
        })
    })

  }

  getPromotion (id){
    return Observable.create((observer) => {
      //console.log("id: "+id);
      api.get(API_URL + `promotions/search/${id}/`)
        .then((response) => {
          console.log(response.data)
          observer.next(response.data)
          observer.complete()
        })
        .catch((error) => {
          observer.error(error)
        })
    })
  }

  updatePromotion(promotion, detail, newDetail, id){
    return Observable.create((observer) => {
      api({
        method: 'put', //you can set what request you want to be
        url: API_URL + `promotions/modification/${id}/`,
        data: promotion,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then((response) => {
          if ((Object.keys(detail).length === 0) && (Object.keys(newDetail).length === 0)){
            observer.next(response.data)
            observer.complete()
          }
          else{
            api({
              method: 'put', //you can set what request you want to be
              url: API_URL +  `promotions/products-modification/${id}/`,
              data: {products_detail : detail, products_news: newDetail}
              }).then((response) => {  
                  console.log(response);
                  observer.next(response.data)
                  //observer.complete()
              }).catch((error) => {
                  observer.error(error)
              })    
          }
        })
        .catch((error) => {
          observer.error(error)
        })
    })
  }

  deletePromotion (id){
    return Observable.create((observer) => {
      api.delete(API_URL +  `promotions/modification/${id}/`)
        .then((response) => {
          console.log();
          observer.next(response)
          //observer.complete()
        })
        .catch((error) => {
          observer.error(error)
        })
    })
  }

  deleteProductPromotion(product_id){
    return Observable.create((observer) => {
      api.delete(API_URL + `promotions/delete-detail/${product_id}/`)
        .then((response) => {
          console.log(response.data);
          observer.next(response.data)
         // observer.complete()
        })
        .catch((error) => {
          observer.error(error)
        })
    })

  }



}



export default new PromotionsService()
