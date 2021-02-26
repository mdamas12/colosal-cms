import { Observable } from 'rxjs'
import axios from 'axios'
import BrandsPagination from '../../models/brands/BrandsPagination'

const API_URL = 'http://localhost:8000/panel/' // process.env.API_URL+'/v1/';
// const API_URL_SIGN = process.env.API_SASS+'/dsign/';

class BrandsService {
  getBrands (limit, offset){
    return Observable.create((observer) => {
      axios.get(API_URL + `brands/?limit=${limit}&offset=${offset}`)
        .then((response) => {
          observer.next(response.data)
          observer.complete()
        })
        .catch((error) => {
          observer.error(error)
        })
    })
  }

  createBrand(newBrand){
    return Observable.create((observer) => {
      axios.post(API_URL + 'brands/',{name: newBrand.name})
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

  getBrand (id){
    return Observable.create((observer) => {
      console.log("id: "+id);
      axios.get(API_URL + `brands/${id}/`)
        .then((response) => {
          observer.next(response.data)
          observer.complete()
        })
        .catch((error) => {
          observer.error(error)
        })
    })
  }

  updateBrand(newBrand){
    return Observable.create((observer) => {
      axios.put(API_URL + `brands/${newBrand.id}/`,{name: newBrand.name})
        .then((response) => {
          observer.next(response.data)
          observer.complete()
        })
        .catch((error) => {
          observer.error(error)
        })
    })
  }

  deleteBrand (id){
    return Observable.create((observer) => {
      axios.delete(API_URL + `brands/${id}/`)
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

export default new BrandsService()
