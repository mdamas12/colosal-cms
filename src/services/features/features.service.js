import { Observable } from 'rxjs'
import axios from 'axios'

const API_URL = 'http://localhost:8000/panel/' // process.env.API_URL+'/v1/';
// const API_URL_SIGN = process.env.API_SASS+'/dsign/';

class FeaturesService {
  getFeatures(limit, offset){
    return Observable.create((observer) => {
      axios.get(API_URL + `features/?limit=${limit}&offset=${offset}`)
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
      axios.post(API_URL + 'features/',{name: newFeature.name})
        .then((response) => {
          console.log(response);
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
      axios.get(API_URL + `features/${id}/`)
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
      axios.put(API_URL + `features/${newFeature.id}/`,{name: newFeature.name})
        .then((response) => {
          console.log(response);
          observer.complete()
        })
        .catch((error) => {
          observer.error(error)
        })
    })
  }

  deleteFeature (id){
    return Observable.create((observer) => {
      axios.delete(API_URL + `features/${id}/`)
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

export default new FeaturesService()
