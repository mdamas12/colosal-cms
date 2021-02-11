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
          axios.post(API_URL + 'products/',newProduct)
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

      getProduct (id){
        return Observable.create((observer) => {
          console.log("id: "+id);
          axios.get(API_URL + `products/search/${id}/`)
            .then((response) => {
              observer.next(response.data)
              // debugger
              observer.complete()
            })
            .catch((error) => {
              observer.error(error)
            })
        })
      }

      updateProduct(newProduct, id){
        return Observable.create((observer) => {
          axios.put(API_URL + `products/search/${id}/`,newProduct)
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

      getDetailProduct(id){
        return Observable.create((observer) =>{
          axios.get(API_URL + `products/product-detail/${id}/`)
          .then((response) =>{
            console.log();
            observer.complete()
          })
          .catch((error)=>{
            observer.error(error)
          })
        })
      }
      
      deleteDetailProduct(id){
        return Observable.create((observer) =>{
          axios.delete(API_URL + `products/product-detail/${id}/`)
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
