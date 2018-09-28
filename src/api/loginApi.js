import {API_URL} from '../constants';   
  
export const iniciarSesion = (user) => {
  let data='user='+user;
  return fetch(API_URL+"iniciarSesion", {
           method: 'POST',
           headers: {
               'Content-Type': 'application/x-www-form-urlencoded',
           },
           body: data
           }).then((response) => {
               if( response.status === 404 || response.status === 500){

               }else{
                   return Promise.all([response, response.text()]);
               }
           }).then((responseJson) => {
              let response = false;
                if(responseJson[1]){
                  let res_json = JSON.parse(responseJson[1]);
                  if(res_json.err){
                    return response;
                  }else{
                    return res_json.res;
                  }
                }else{
                  return response;
                }
            }
           );

  }
  


