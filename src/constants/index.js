
const DEV=false; //  if (DEV == FALSE ) se trabaja en producion

export const API_URL = (DEV) ? 'http://127.0.0.1:8000/' : 'https://api-tareas.herokuapp.com/';
export const APP_URL = (DEV) ? 'http://localhost:3000/' : 'https://app-tareas-front.herokuapp.com/';