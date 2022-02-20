import axios from 'axios';
// let baseUrl=process.env.API_URL; //定义基本baseUrl
// 公共路由(网络请求地址)
// axios.defaults.baseURL = 'http://localhost:8888';


export const GET=(url,params)=>{
  return axios.get(url,{params:params},{
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('token') 
    }}).then(data=>data)
}

export const POST=(url,params)=>{
  return axios.post(url,params,{
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('token') 
    }}).then(data=>data)
}