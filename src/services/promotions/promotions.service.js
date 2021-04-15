import { Observable } from 'rxjs'
import axios from 'axios'
import PromotionsPagination from '../../models/promotions/PromotionsPagination'

//const API_URL = 'http://localhost:8000/panel/' // process.env.API_URL+'/v1/';
// const API_URL_SIGN = process.env.API_SASS+'/dsign/';

const API_URL = process.env.API_URL + "panel/";

class PromotionsService {
  getPromotions (limit, offset){
    return Observable.create((observer) => {
      axios.get(API_URL + `promotions/list?limit=${limit}&offset=${offset}`)
        .then((response) => {
          observer.next(response.data)
          observer.complete()
        })
        .catch((error) => {
          observer.error(error)
        })
    })
  }

  createPromotion(promotion, detail){
    return Observable.create((observer) => {
      axios.post(API_URL + 'promotions/',{promotion: promotion, Detail: detail})
        .then((response) => {
          console.log(response);
          observer.next(response.data)
          observer.complete()
        })
        .catch((error) => {
          observer.error(error)
        })
    })
  }

  getPromotion (id){
    return Observable.create((observer) => {
      console.log("id: "+id);
      axios.get(API_URL + `promotions/search/${id}/`)
        .then((response) => {
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
      axios.put(API_URL + `promotions/search/${id}/`,{promotion: promotion, Detail: detail, newDetail: newDetail})
        .then((response) => {
          console.log();
          observer.next(response.data)
          observer.complete()
        })
        .catch((error) => {
          observer.error(error)
        })
    })
  }

  deletePromotion (id){
    return Observable.create((observer) => {
      axios.delete(API_URL + `promotions/search/${id}/`)
        .then((response) => {
          console.log();
          observer.next(response.data)
          observer.complete()
        })
        .catch((error) => {
          observer.error(error)
        })
    })
  }
}

export default new PromotionsService()
