/*
 * @Description: 
 * @Version: 
 * @Author: liu
 * @Date: 2020-07-04 10:57:35
 */ 


 import axios from 'axios'
import resolve from 'resolve'

 let CancelToken = axios.CancelToken 
 axios.create({
     timeout:15000,
     //baseURL:'http://localhost:3888',
     headers:{
         'Content-Type':'application/x-www-form-urlencoded'
     }
 })

 //开始请求设置 
axios.interceptors.request.use(config => {
    config.url = 'http://localhost:3888' + config.url
    let requestName = config.method === 'post' ? config.data.requestName : config.params
    if(requestName){
        if(axios[requestName] && axios[requestName].cancel){
            axios[requestName].cancel()
        }

        config.cancelToken = new CancelToken(c => {
            axios[requestName] = {}
            axios[requestName].cancel = c
        })
    }
    return config
}, error => {
    return Promise.reject(error)
})

//response 拦截器
axios.interceptors.response.use(
    response => {
        const res = response.data 
        if(res.msg === 'success'){
            return response.data
        } else {
            return Promise.reject(response.error)
        }
    },
    error => {
        return Promise.reject(error)
    }
)

const get = (url, params = {})=>{
    return new Promise(resolve => {
        axios.get(url, {params:params}).then(res => {
            resolve(res)
        })
        .catch(err => {
            //报错
        })
    })
}

const post = (url, params ={})=>{
    return new Promise(resolve => {
        axios.post(url, params).then(res => {
            resolve(res)
        })
        .catch(err => {
            //报错
        })
    })
}

export {get, post}