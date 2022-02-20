import * as API from './index';
// API GET POST
export const login=(params)=>{
      console.log(params)
      return API.POST('/api/login',params)
}
export const getUserInfo=(params)=>{
      return API.GET('/api/getMyInfo',params)
}