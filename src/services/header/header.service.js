import { Observable } from 'rxjs'
import { api } from 'boot/axios'

//const API_URL = 'http://localhost:8000/panel/' // process.env.API_URL+'/v1/';
// const API_URL_SIGN = process.env.API_SASS+'/dsign/';

const API_URL = "panel/";

class HeaderService {


  getListImages(){
    return Observable.create((observer) => {
      api.get(API_URL + 'header/')
        .then((response) => {
          observer.next(response.data)
          observer.complete()
        })
        .catch((error) => {
          observer.error(error)
        })
    })
  }

  uploadImage(newImage){
    return Observable.create((observer) => {
      //console.log(newCategory)
      api.post(API_URL + 'header/',newImage,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
        .then((response) => {
          console.log(response.data);
          observer.next(response.data)
          observer.complete()
        })
        .catch((error) => {
          console.log(error.response.data)
          //observer.error(error)
        })
    })
  }


  getImage(id){
    return Observable.create((observer) => {
      console.log("id: "+id);
      api.get(API_URL + `header/detail/${id}/`)
        .then((response) => {
          observer.next(response.data)
          observer.complete()
        })
        .catch((error) => {
          observer.error(error)
        })
    })
  }

  UpdateImage(image,id){
    return Observable.create((observer) => {
      api.put(API_URL + `header/detail/${id}/`,image,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
        .then((response) => {
          //console.log();
          observer.next(response.data)
          observer.complete()
        })
        .catch((error) => {
          observer.error(error)
        })
    })
  }

  deleteImage (id){
    return Observable.create((observer) => {
      api.delete(API_URL + `header/detail/${id}/`)
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

export default new HeaderService()
