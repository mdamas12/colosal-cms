import { Observable } from 'rxjs'
import { api } from 'boot/axios'
// import PaymentsPagination from '../../models/payments/PaymentsPagination'

//const API_URL = 'http://localhost:8000/panel/' // process.env.API_URL+'/v1/';
// const API_URL_SIGN = process.env.API_SASS+'/dsign/';

const API_URL = "panel/";

class PaymentsService {
  getPayments (){
    return Observable.create((observer) => {
      api.get(API_URL + `payments/`)
        .then((response) => {
          observer.next(response.data)
          observer.complete()
        })
        .catch((error) => {
          observer.error(error)
        })
    })
  }

  createPayment(newPayment){
    return Observable.create((observer) => {
      api.post(API_URL + 'payments/',{bank: newPayment.bank, method: newPayment.method})
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
}

export default new PaymentsService()
