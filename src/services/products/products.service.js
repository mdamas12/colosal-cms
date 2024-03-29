import { Observable } from 'rxjs'
import { api } from 'boot/axios'
//const API_URL = 'http://localhost:8000/panel/' // process.env.API_URL+'/v1/';
//const API_URL_SIGN = process.env.API_SASS+'/dsign/';

const API_URL = "panel/";

class ProductsService{
    getProducts (limit, offset){
        return Observable.create((observer) => {
          api.get(API_URL + `products/?limit=${limit}&offset=${offset}`)
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
        api.get(API_URL + `products/`)
        .then((response) => {
          //console.log(response.data);
          observer.next(response.data)
          observer.complete()
        })
        .catch((error) => {
          observer.error(error)
        })
      })
    }

    searchProducts (query){
      return Observable.create((observer) => {
        api.get(API_URL + `products/coincidence/${query}/`)
          .then((response) => {
            observer.next(response.data)
            observer.complete()
          })
          .catch((error) => {
            observer.error(error)
          })
      })
    }

    createProduct(product, features,gallery){
        return Observable.create((observer) => {
          api({
            method: 'post', //you can set what request you want to be
            url: API_URL + 'products/',
            data: product,
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }).then((response) => {
              //console.log(response.data);
              let product_id  = response.data.id
              if (Object.keys(features).length === 0){
                observer.next(response.data)
                observer.complete()
              }
              api({
                method: 'post', 
                url: API_URL + 'products/features/',
                data:{features : features, product: response.data.id}
              }).then((response) => {
                  if (Object.keys(gallery).length === 0){
                    observer.next(response.data)
                    observer.complete()
                    //console.log(response.data);
                  }
                  gallery.append('product', product_id )
                  api({
                    method: 'post', 
                    url: API_URL + 'products/gallery/',
                    data: gallery,
                    headers: {
                      'Content-Type': 'multipart/form-data'
                    }
                  }).then((response) => {
                      observer.next(response.data)
                      observer.complete()
                      //console.log(response.data);
                    }).catch((error) => {
                      console.log(error);
                      observer.error(error)
                    });
                }).catch((error) => {
                  console.log(error);
                  //observer.error(error)
                });
          
              }).catch((error) => {
                console.log(error);
                 //observer.error(error)
              });
        }); 
      }

      getProduct (id){
        return Observable.create((observer) => {
          console.log("id: "+id);
          api.get(API_URL + `products/search/${id}/`)
            .then((response) => {
              observer.next(response.data)
              observer.complete()
            })
            .catch((error) => {
              observer.error(error)
            })
        })
      }

      updateProduct(product, id, features, features_news, gallery, gallery_news){

        return Observable.create((observer) => {
          api({
            method: 'put', //you can set what request you want to be
            url: API_URL + `products/search/${id}/`,
            data:product,
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }).then((response) => {

            api({
              method: 'put', 
              url: API_URL + `products/product-detail/${id}/`,
              data:{features : features, features_news: features_news}
            }).then((response) => {
                  api({
                    method: 'put', 
                    url: API_URL + `products/gallery-search/${id}/`,
                    data: gallery,
                    headers: {
                      'Content-Type': 'multipart/form-data'
                    }
                  }).then((response) => {
                      if (Object.keys(gallery_news).length === 0){
                        observer.next(response.data)
                        observer.complete()
                        //console.log(response.data);
                      }
                      gallery_news.append('product', id )
                      api({
                        method: 'post', 
                        url: API_URL + 'products/gallery/',
                        data: gallery_news,
                        headers: {
                          'Content-Type': 'multipart/form-data'
                        }
                      }).then((response) => {
                          observer.next(response.data)
                          observer.complete()
                        }).catch((error) => {
                          console.log(error);
                          observer.error(error)
                        });
                      //console.log(response.data);
                    }).catch((error) => {
                      console.log(error.response.data);
                      //observer.error(error)
                    });

            }).catch((error) => {
                  console.log(error.response.data);
                  //observer.error(error)
            });

          })
          .catch((error) => {
            console.log(error.response.data)
            observer.error(error)
          })
        })
      }

      deleteProduct(id){
        return Observable.create((observer) => {
          api.delete(API_URL + `products/search/${id}/`)
            .then((response) => {
              observer.next(response.data)
              observer.complete()
            })
            .catch((error) => {
              console.log(error.response.data);
              observer.error(error)
            })
        })
      }

      getDetailProduct(id){
        return Observable.create((observer) =>{
          api.get(API_URL + `products/product-detail/${id}/`)
          .then((response) =>{
            console.log();
            observer.next(response.data)
            observer.complete()
          })
          .catch((error)=>{
            observer.error(error)
          })
        })
      }
      
      deleteDetailProduct(id){
        return Observable.create((observer) =>{
          api.delete(API_URL + `products/product-detail/${id}/`)
          .then((response) =>{
            //console.log();
            observer.next(response.data)
            observer.complete()
          })
          .catch((error)=>{
            observer.error(error)
          })
        })
      } 
     
      deleteGalleryProduct(id){
        return Observable.create((observer) =>{
          api.delete(API_URL + `products/gallery-search/${id}/`)
          .then((response) =>{
            //console.log();
            observer.next(response.data)
            observer.complete()
          })
          .catch((error)=>{
            observer.error(error)
          })
        })
      }  
}

export default new ProductsService()
