import { Observable } from 'rxjs'
import axios from 'axios'
import SuppliersPagination from '../../models/suppliers/SuppliersPagination'

const API_URL = 'http://localhost:8000/panel/' // process.env.API_URL+'/v1/';
// const API_URL_SIGN = process.env.API_SASS+'/dsign/';

class SuppliersService {
  getSuppliers (limit, offset){
    return Observable.create((observer) => {
      axios.get(API_URL + `providers/?limit=${limit}&offset=${offset}`)
        .then((response) => {
          observer.next(response.data)
          observer.complete()
        })
        .catch((error) => {
          observer.error(error)
        })
    })
  }

  createSupplier(newSupplier){
    return Observable.create((observer) => {
      axios.post(API_URL + 'providers/',{name: newSupplier.name, address: newSupplier.address, email: newSupplier.email, phone: newSupplier.phone, agent: newSupplier.agent})
        .then((response) => {
          console.log(response);
          observer.complete()
        })
        .catch((error) => {
          observer.error(error)
        })
    })
  }

  getSupplier (id){
    return Observable.create((observer) => {
      console.log("id: "+id);
      axios.get(API_URL + `providers/${id}/`)
        .then((response) => {
          observer.next(response.data)
          observer.complete()
        })
        .catch((error) => {
          observer.error(error)
        })
    })
  }

  updateSupplier(newSupplier){
    return Observable.create((observer) => {
      axios.put(API_URL + `providers/${newSupplier.id}/`,{name: newSupplier.name, address: newSupplier.address, email: newSupplier.email, phone: newSupplier.phone, agent: newSupplier.agent})
        .then((response) => {
          console.log();
          observer.complete()
        })
        .catch((error) => {
          observer.error(error)
        })
    })
  }

  deleteSupplier (id){
    return Observable.create((observer) => {
      axios.delete(API_URL + `providers/${id}/`)
        .then((response) => {
          console.log(response);
          observer.complete()
        })
        .catch((error) => {
          observer.error(error)
        })
    })
  }
}

export default new SuppliersService()
