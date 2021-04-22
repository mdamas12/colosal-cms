import { Observable } from 'rxjs'
import { api } from 'boot/axios'

//const API_URL = 'http://localhost:8000/panel/' // process.env.API_URL+'/v1/';
// const API_URL_SIGN = process.env.API_SASS+'/dsign/';

const API_URL = "panel/";

class FeaturesService {
  getFeatures(limit, offset){
    return Observable.create((observer) => {
      api.get(API_URL + `features/?limit=${limit}&offset=${offset}`)
        .then((response) => {
          observer.next(response.data)
          observer.complete()
        })
        .catch((error) => {
          observer.error(error)
        })
    })
  }

  createFeature(newFeature){
    return Observable.create((observer) => {
      api.post(API_URL + 'features/',{name: newFeature.name})
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

  getFeature(id){
    return Observable.create((observer) => {
      console.log("id: "+id);
      api.get(API_URL + `features/${id}/`)
        .then((response) => {
          observer.next(response.data)
          observer.complete()
        })
        .catch((error) => {
          observer.error(error)
        })
    })
  }

  updateFeature(newFeature){
    return Observable.create((observer) => {
      api.put(API_URL + `features/${newFeature.id}/`,{name: newFeature.name})
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

  deleteFeature (id){
    return Observable.create((observer) => {
      api.delete(API_URL + `features/${id}/`)
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
}

export default new FeaturesService()
