import axios from 'axios';


export const api = axios.create({
    baseURL : 'https://fakestoreapi.com/'
})

//caso esteja consumindo uma api local
// export const localApi = axios.create({
//     baseURL : 'http://localhost:8080'
// })