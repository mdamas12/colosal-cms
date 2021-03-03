import { Observable } from 'rxjs'
import axios from 'axios'
import UsersPagination from '../../models/users/UsersPagination'

const API_URL = 'http://localhost:8000/'

class UsersService {
  getUsers (limit, offset){
    return Observable.create((observer) => {
      axios.get(API_URL + `users/?limit=${limit}&offset=${offset}`)
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
      axios.post(API_URL + 'users/',{is_superuser: newUser.is_superuser, username: newUser.username, first_name: newUser.first_name, last_name: newUser.last_name, email: newUser.email, password: newUser.password, is_staff: true, is_active: true})
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
      axios.get(API_URL + `users/${id}/`)
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
      axios.put(API_URL + `users/${newUser.id}/`,{username: newUser.username, first_name: newUser.first_name, last_name: newUser.last_name})
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
      axios.delete(API_URL + `users/${id}/`)
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
