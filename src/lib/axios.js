import axios from 'axios'
import { baseURL } from '@/config'
import {getToken} from './util'

class HttpRequest {
    constructor(baseUrl = baseURL) {
        this.baseUrl = baseUrl
        this.queue = {}
    }
    getInsideConfig() {
        //全局配置
        const config = {
            baseURL: this.baseUrl,
            headers: {

            }
        }
        return config
    }
    //拦截器
    interceptors(instance, url) {
        //请求拦截
        instance.interceptors.request.use(config => {
            //添加全局的loading
            //Spin.show() loading的时候显示遮罩层
            if(!Object.keys(this.queue).length) {
                //Spin.show()
            }
            this.queue[url] = true
            config.headers['authorization'] = getToken()
            //return config请求才会继续
            return config
        }, error => {
            return Promise.reject(error)
        })

        //响应拦截
        instance.interceptors.response.use(res => {
            delete this.queue[url]
            const {data, status} = res
            return data
        }, error => {
            delete this.queue[url]
            return Promise.reject(error)
        })
    }   
    request(options) {
        const instance = axios.create()
        options = Object.assign(this.getInsideConfig(), options)
        console.log(options)
        //添加拦截器
        this.interceptors(instance, options.url)
        return instance(options)
    }
}

export default HttpRequest