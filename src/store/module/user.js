import { login, authorization } from '@/api/user'
import { setToken } from '@/lib/util'

const state = {
    //
    userName: 'lison'
}

const mutations = {
    //
    SET_USERNAME(state) {
        state.userName = 'linx'
    }
}

const actions = {
    //
    login({commit}, {name, password}) {
        return new Promise((resolve, reject) => {
            login({ name, password }).then(res => {
                console.log(res)
                if (res.code === 200 && res.data.token) {
                    setToken(res.data.token)
                    resolve()
                }else{
                    reject(new Error('错误'))
                }
            }).catch(err => {
                reject(err)
            }) 
        })
    },
    authorization({commit}, token) {
        return new Promise((resolve, reject) => {
            authorization().then(res => {
                if(res.code === 401){
                    reject(new Error('token error'))
                }else{
                    resolve(res)
                }
            }).catch(error => {
                reject(new Error(error))
            })
        })
    }
}

export default {
    // namespaced: true,
    state,
    mutations,
    actions
}