export default function apikeyHeader() {
    let token = localStorage.getItem('token');
    if (token) {
      return { 
            'Authorization': "token " + token
            //'apikey': user.kong_api_key
        };
    } else {
      return {};
    }
  }