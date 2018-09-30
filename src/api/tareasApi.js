import {API_URL} from '../constants';   
import { sessionService  } from 'redux-react-session';

export const obtenerListadoTareas = (user) => {
  
  return fetch(API_URL+"obtenerListadoTareas",{headers:{Authorization:user}}).then((response) => {
               if( response.status === 404 || response.status === 500 || response.status === 401){

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
                    console.log('llego aqui');
                    return res_json.res;
                  }
                }else{
                  return response;
                }
            }
           );

  }