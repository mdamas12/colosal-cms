import { Observable } from 'rxjs'
import axios from 'axios'
import CustomersPagination from '../../models/customers/CustomersPagination'

const API_URL = 'http://localhost:8000/panel/' // process.env.API_URL+'/v1/';
// const API_URL_SIGN = process.env.API_SASS+'/dsign/';

class CustomersService {
  getCustomers (limit, offset){
    return Observable.create((observer) => {
      axios.get(API_URL + `customers/?limit=${limit}&offset=${offset}`)
        .then((response) => {
          observer.next(response.data)
          observer.complete()
        })
        .catch((error) => {
          observer.error(error)
        })
    })
  }

  createCustomer(newCustomer){
    return Observable.create((observer) => {
      axios.post(API_URL + 'customers/',{fullname: newCustomer.fullname, email: newCustomer.email, phone: newCustomer.phone, password: newCustomer.password})
        .then((response) => {
          console.log(response);
          observer.complete()
        })
        .catch((error) => {
          observer.error(error)
        })
    })
  }

  getCustomer (id){
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

  updateCustomer(newCustomer){
    return Observable.create((observer) => {
      axios.put(API_URL + `providers/${newCustomer.id}/`,{fullname: newCustomer.fullname, email: newCustomer.email, phone: newCustomer.phone, password: newCustomer.password})
        .then((response) => {
          console.log();
          observer.complete()
        })
        .catch((error) => {
          observer.error(error)
        })
    })
  }

  deleteCustomer (id){
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

export default new CustomersService()
