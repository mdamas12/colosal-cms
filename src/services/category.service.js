import { Observable } from 'rxjs'
import axios from 'axios'
import Category from '../models/Category'

const API_URL = 'http://localhost:3000/' // process.env.API_URL+'/v1/';
// const API_URL_SIGN = process.env.API_SASS+'/dsign/';

class CategoriesService {
  getCategories () {
    return Observable.create((observer) => {
      axios.get(API_URL + 'categories')
        .then((response) => {
          observer.next(response.data.map(data => new Category(data)))
          observer.complete()
        })
        .catch((error) => {
          observer.error(error)
        })
    })
  }
}

export default new CategoriesService()
