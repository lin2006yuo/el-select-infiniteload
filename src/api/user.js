import axios from './index'

export const getUserInfo = () => {
    return axios.request( {
        url: 'getUserInfo',
        method: 'get'
    })
}


export const login = ({name, password}) => {
    return axios.request({
        url: '/signin',
        method: 'post',
        data: {
            name,
            password
        }
    })
}

export const authorization = () => {
    return axios.request({
        url: '/authorization',
        method: 'get'
    })
}