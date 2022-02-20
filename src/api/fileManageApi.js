import * as API from './index';
// API GET POST

export const getFillList=(params)=>{
      return API.GET('/api/Article/getList',params)
}
export const getFillDetail=(params)=>{
      return API.GET('/api/Article/getDetail',params)
}