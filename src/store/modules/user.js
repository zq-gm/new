const state ={
    userinfo:{},
    token:''
}
const getters = {
    userinfo: state => state.userinfo,
    token: state => state.token
}
const actions = {
}
const mutations = {
    setUserinfo(state,value){
        state.userinfo = value
    },
    setToken(state,value){
        state.token = value
    }
}
export default {
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}