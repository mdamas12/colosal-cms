import { Observable } from 'rxjs'
import { api } from 'boot/axios'
import BrandsPagination from '../../models/brands/BrandsPagination'

//const API_URL = 'http://localhost:8000/panel/' // process.env.API_URL+'/v1/';
// const API_URL_SIGN = process.env.API_SASS+'/dsign/';

const API_URL = "panel/";

class BrandsService {
  getBrands (limit, offset){
    return Observable.create((observer) => {
      api.get(API_URL + `brands/?limit=${limit}&offset=${offset}`)
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
      api.post(API_URL + 'brands/',{name: newBrand.name})
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
      api.get(API_URL + `brands/${id}/`)
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
      api.put(API_URL + `brands/${newBrand.id}/`,{name: newBrand.name})
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
      api.delete(API_URL + `brands/${id}/`)
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
