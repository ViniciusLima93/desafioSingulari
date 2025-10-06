import axios from "axios"



export const axiosInstance = axios.create({
   baseURL:  'http://localhost:3000',
   timeout:15000,
   headers: {
    'Content-Type': 'application/json'
   }
})

axiosInstance.interceptors.request.use(
    (config) => {
        const acessToken = localStorage.getItem('cm:token');

        if(acessToken) {
            config.headers.Authorization = `Bearer ${acessToken}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)