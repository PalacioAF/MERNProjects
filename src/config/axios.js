import axios from 'axios';

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
  

export default AxiosClient;