import { Observable } from 'rxjs'
import { api } from 'boot/axios'
import UsersPagination from '../../models/users/UsersPagination'
import apikeyHeader from '../api-header'
//const API_URL = 'http://localhost:8000/'

const API_URL = '';

class UsersService {

  getUserMe (){
    return Observable.create((observer) => {
      api.get(API_URL + `users/me/`, { headers : apikeyHeader()})
        .then((response) => {
          observer.next(response.data)
          observer.complete()
        })
        .catch((error) => {
          observer.error(error)
        })
    })
  }

  getUsers (limit, offset){
    return Observable.create((observer) => {
      api.get(API_URL + `users/?limit=${limit}&offset=${offset}`)
        .then((response) => {
          observer.next(response.data)
          observer.complete()
        })
        .catch((error) => {
          observer.error(error)
        })
    })
  }

  findUsers (query){
    return Observable.create((observer) => {
      api.get(API_URL + `users/find/?query=${query}`)
        .then((response) => {
          observer.next(response.data)
          observer.complete()
        })
        .catch((error) => {
          observer.error(error)
        })
    })
  }

  createUser(newUser){
    return Observable.create((observer) => {
      api.post(API_URL + 'users/',{is_superuser: newUser.is_superuser, username: newUser.email, first_name: newUser.first_name, last_name: "", email: newUser.email, password: newUser.password, is_staff: true, is_active: true})
        .then((response) => {
          console.log(response);
          observer.complete()
        })
        .catch((error) => {
          observer.error(error)
        })
    })
  }

  getUser (id){
    return Observable.create((observer) => {
      console.log("id: "+id);
      api.get(API_URL + `users/${id}/`)
        .then((response) => {
          observer.next(response.data)
          observer.complete()
        })
        .catch((error) => {
          observer.error(error)
        })
    })
  }

  updateUser(newUser){
    return Observable.create((observer) => {
      api.put(API_URL + `users/${newUser.id}/`,{is_superuser: newUser.is_superuser, username: newUser.email, first_name: newUser.first_name, last_name: "", email: newUser.email, password: newUser.password, is_staff: true, is_active: true})
        .then((response) => {
          console.log();
          observer.complete()
        })
        .catch((error) => {
          observer.error(error)
        })
    })
  }

  deleteUser (id){
    return Observable.create((observer) => {
      api.delete(API_URL + `users/${id}/`)
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

export default new UsersService()
