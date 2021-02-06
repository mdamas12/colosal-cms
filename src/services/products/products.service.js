import { Observable } from 'rxjs'
import axios from 'axios'

const API_URL = 'http://localhost:8000/panel/' // process.env.API_URL+'/v1/';
// const API_URL_SIGN = process.env.API_SASS+'/dsign/';

class ProductsService{
    getProducts (limit, offset){
        return Observable.create((observer) => {
          axios.get(API_URL + `products/?limit=${limit}&offset=${offset}`)
            .then((response) => {
              observer.next(response.data)
              observer.complete()
            })
            .catch((error) => {
              observer.error(error)
            })
        })
    }

    getAllProducts(){
      return Observable.create((observer) => {
        axios.get(API_URL + `products/`)
        .then((response) => {
          console.log(response.data);
          observer.next(response.data)
          observer.complete()
        })
        .catch((error) => {
          observer.error(error)
        })
      })
    }

    createProduct(newProduct){
        return Observable.create((observer) => {
          axios.post(API_URL + 'products/',
            newProduct,
            Headers = { 'Content-Type': 'multipart/form-data' } )
            .then((response) => {
              console.log(response.data);
              observer.complete()
            })
            .catch((error) => {
              observer.error(error)
            })
        })
      }

      getProduct (id){
        return Observable.create((observer) => {
          console.log("id: "+id);
          axios.get(API_URL + `products/${id}/`)
            .then((response) => {
              observer.next(response.data)
              observer.complete()
            })
            .catch((error) => {
              observer.error(error)
            })
        })
      }

      updateProduct(newProduct, id){
        return Observable.create((observer) => {
          axios.put(API_URL + `products/${id}/`,
          newProduct,
           Headers = {'Content-Type': 'multipart/form-data'})
            .then((response) => {
              console.log();
              observer.complete()
            })
            .catch((error) => {
              observer.error(error)
            })
        })
      }

      deleteProduct (id){
        return Observable.create((observer) => {
          axios.delete(API_URL + `products/${id}/`)
            .then((response) => {
              console.log();
              observer.complete()
            })
            .catch((error) => {
              observer.error(error)
            })
        })
      }

      createDetailProduct(){
        return Observable.create((observer) =>{
          axios.post(API_URL + `products/detail/`)
          .then((response) =>{
            console.log();
            observer.complete()
          })
          .catch((error)=>{
            observer.error(error)
          })
        })
      }    
}

export default new ProductsService()
