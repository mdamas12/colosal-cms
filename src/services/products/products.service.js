import { Observable } from 'rxjs'
import axios from 'axios'
import BrandsPagination from '../../models/brands/BrandsPagination'

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

    createProduct(newProduct){
        return Observable.create((observer) => {
          axios.post(API_URL + 'products/',{name: newProduct.name})
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

export default new ProductsService()
