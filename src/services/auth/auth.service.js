import { Observable } from 'rxjs'
import axios from 'axios'

//const API_URL = 'http://localhost:8000/auth/'
const API_URL = process.env.API_URL + "auth/";

class AuthService {

  login(newLogin){
    return Observable.create((observer) => {
      axios.post(API_URL + 'login/',{username: newLogin.username, password: newLogin.password})
        .then((response) => {
          console.log(response);
          localStorage.setItem('token', response.data.key)
          observer.next(response.data)
          observer.complete()
        })
        .catch((error) => {
          console.log(error)
          observer.error(error)
        })
    })
  }

  logout(){
    return Observable.create((observer) => {
      axios.post(API_URL + 'logout/')
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

export default new AuthService()
