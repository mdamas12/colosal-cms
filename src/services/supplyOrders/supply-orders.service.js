import { Observable } from 'rxjs'
import { api } from 'boot/axios'
import SupplyOrdersPagination from '../../models/supplyOrders/SupplyOrdersPagination'

//const API_URL = 'http://localhost:8000/panel/' // process.env.API_URL+'/v1/';
// const API_URL_SIGN = process.env.API_SASS+'/dsign/';

const API_URL = process.env.API_URL + "panel/";

class SupplyOrdersService {
  getSupplyOrders (limit, offset){
    return Observable.create((observer) => {
      api.get(API_URL + `purchases/list?limit=${limit}&offset=${offset}`)
        .then((response) => {
          observer.next(response.data)
          observer.complete()
        })
        .catch((error) => {
          observer.error(error)
        })
    })
  }

  createSupplyOrder(newSupplyOrder){
    return Observable.create((observer) => {
      api.post(API_URL + 'purchases/',{purchase: newSupplyOrder.purchase, products: newSupplyOrder.detail})
        .then((response) => {
          console.log(response);
          observer.complete()
        })
        .catch((error) => {
          observer.error(error)
        })
    })
  }

  getSupplyOrder (id){
    return Observable.create((observer) => {
      console.log("id: "+id);
      api.get(API_URL + `purchases/detail/${id}/`)
        .then((response) => {
          observer.next(response.data)
          observer.complete()
        })
        .catch((error) => {
          observer.error(error)
        })
    })
  }

  updateSupplyOrder(newSupplyOrder, id){
    return Observable.create((observer) => {
      api.put(API_URL + `purchases/detail/${id}/`,{purchase: newSupplyOrder.purchase, products: newSupplyOrder.products})
        .then((response) => {
          console.log();
          observer.complete()
        })
        .catch((error) => {
          observer.error(error)
        })
    })
  }

  deleteSupplyOrder (id){
    return Observable.create((observer) => {
      api.delete(API_URL + `purchases/${id}/`)
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

export default new SupplyOrdersService()
