import axios from 'axios';
import { notification } from 'antd'


const AxiosClient=axios.create({
    baseURL:process.env.REACT_APP_BACKEND_URL
});

AxiosClient.interceptors.request.use(request => {
    let token = localStorage.getItem('token')
    if (token) {
        request.headers = Object.assign({'x-auth-token': token}, request.headers)
    }
    return request
  })



  AxiosClient.interceptors.response.use(undefined, response => {
 
    //debugger
    if (!response) {
      notification.warning({
        message: 'An error occurred please try again',
      })
    }

    // debugger
    if (response.response.status === 401) {
      notification.error({
        message: 'The session has expired. You must login again.',
        duration: 0,//Fuerza el click en la notificacion
        onClick: () => {
            localStorage.removeItem('token');
            window.location.href = '/'
          }
      })
    
      return
    }
  })
export default AxiosClient;