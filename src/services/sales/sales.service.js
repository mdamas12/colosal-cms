import { Observable } from 'rxjs'
import { api } from 'boot/axios'
// import SalesPagination from '../../models/sales/SalesPagination'

//const API_URL = 'http://localhost:8000/panel/' // process.env.API_URL+'/v1/';
// const API_URL_SIGN = process.env.API_SASS+'/dsign/';

const API_URL = "panel/";

class SalesService {
  getSales (){
    return Observable.create((observer) => {
      api.get(API_URL + `sales/`)
        .then((response) => {
          observer.next(response.data)
          observer.complete()
        })
        .catch((error) => {
          observer.error(error)
        })
    })
  }

  getSalesByStatus (id){
    return Observable.create((observer) => {
      api.get(API_URL + `sales/list-status/${id}/`)
        .then((response) => {
          observer.next(response.data)
          observer.complete()
        })
        .catch((error) => {
          observer.error(error)
        })
    })
  }

  createSale(newSale){
    return Observable.create((observer) => {
      api.post(API_URL + 'sales/sale-panel/',{sale: newSale.sale, sale_detail: newSale.sale_detail})
        .then((response) => {
          console.log(response);
          observer.complete()
        })
        .catch((error) => {
          observer.error(error)
        })
    })
  }

  searchUsers(email){
    return Observable.create((observer) => {
      api.get(API_URL + `sales/customer/${email}/`)
        .then((response) => {
          observer.next(response.data)
          observer.complete()
        })
        .catch((error) => {
          observer.error(error)
        })
    })
  }

  getSale (id){
    return Observable.create((observer) => {
      console.log("id: "+id);
      api.get(API_URL + `sales/detail/${id}/`)
        .then((response) => {
          observer.next(response.data)
          observer.complete()
        })
        .catch((error) => {
          observer.error(error)
        })
    })
  }

  updateSale(newSale){
    return Observable.create((observer) => {
      api.put(API_URL + `sales/detail/${newSale.id}/`,{sale: newSale.sale, sale_detail: newSale.sale_detail})
        .then((response) => {
          console.log();
          observer.complete()
        })
        .catch((error) => {
          observer.error(error)
        })
    })
  }

  updateSaleStatus(id, value){
    return Observable.create((observer) => {
      api.put(API_URL + `sales/detail/${id}/`,{sale: {status: value}})
        .then((response) => {
          console.log(response);
          observer.complete()
        })
        .catch((error) => {
          observer.error(error)
        })
    })
  }

  deleteSale (id){
    return Observable.create((observer) => {
      
      api.delete(API_URL + `sales/detail/${id}/`)
        .then((response) => {
          console.log();
          observer.complete()
        })
        .catch((error) => {
          observer.error(error)
        })
    })
  }
}

export default new SalesService()
