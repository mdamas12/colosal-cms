import { Observable } from 'rxjs'
import axios from 'axios'

const API_URL = 'http://localhost:8000/panel/' // process.env.API_URL+'/v1/';
// const API_URL_SIGN = process.env.API_SASS+'/dsign/';

class CategoriesService {
  getCategories (limit, offset){
    return Observable.create((observer) => {
      axios.get(API_URL + `categories/?limit=${limit}&offset=${offset}`)
        .then((response) => {
          observer.next(response.data)
          observer.complete()
        })
        .catch((error) => {
          observer.error(error)
        })
    })
  }

  getAllCategories (){
    //  http://localhost:8000/panel/categories/list-all/
    return Observable.create((observer) => {
      axios.get(API_URL + 'categories/list-all')
        .then((response) => {
          observer.next(response.data)
          observer.complete()
        })
        .catch((error) => {
          observer.error(error)
        })
    })
  }

  createCategory(newCategory){
    return Observable.create((observer) => {
      console.log(newCategory)
      axios.post(API_URL + 'categories/save/',newCategory,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
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

  getCategory (id){
    return Observable.create((observer) => {
      console.log("id: "+id);
      axios.get(API_URL + `categories/${id}/`)
        .then((response) => {
          observer.next(response.data)
          observer.complete()
        })
        .catch((error) => {
          observer.error(error)
        })
    })
  }

  updateCategory(id, newCategory){
    return Observable.create((observer) => {
      axios.put(API_URL + `categories/${id}/`,newCategory,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
        .then((response) => {
          console.log();
          observer.next(response.data)
          observer.complete()
        })
        .catch((error) => {
          observer.error(error)
        })
    })
  }

  deleteCategory (id){
    return Observable.create((observer) => {
      axios.delete(API_URL + `categories/${id}/`)
        .then((response) => {
          console.log();
          observer.next(response.data)
          observer.complete()
        })
        .catch((error) => {
          observer.error(error)
        })
    })
  }
}

export default new CategoriesService()
