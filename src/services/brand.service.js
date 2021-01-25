import { Observable } from 'rxjs'
import axios from 'axios'
import Brand from '../models/Brand'

const API_URL = 'http://localhost:8000/panel/' // process.env.API_URL+'/v1/';
// const API_URL_SIGN = process.env.API_SASS+'/dsign/';

class BrandsService {
  fetch () {
    return Observable.create((observer) => {
      axios.get(API_URL + 'brans/')
        .then((response) => {
          observer.next(response.data)
          observer.complete()
        })
        .catch((error) => {
          observer.error(error)
        })
    })
  }
}

export default new BrandsService()