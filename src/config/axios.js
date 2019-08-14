import axios from 'axios';
// URLSearchParams未定义的问题，IE9不支持URLSearchParams
import qs from 'qs';
// var params = {
// 'param1':1,
// 'param2':2
// }
// qs.stringify(params)

// axios.defaults.headers.common['token']

// request请求拦截
axios.interceptors.request.use((config) => {
    console.log('请求拦截')
    console.log(config)
    return config
}, (error) => {
    return Promise.reject(error)
})

// response响应拦截
axios.interceptors.response.use((response) => {
    console.log('响应拦截')
    console.log(response)
    return response
}, (error) => {
    return Promise.reject(error)
})

/**
 * 封装请求
 * @url: String 请求地址
 * @method: String 请求方法
 * @params: Object 请求参数
 */

 export default function request(url, method, params) {
    return new Promise((resolve, reject) => {
        axios({
            method: method,
            url: url,
            data: qs.stringify(params)
        }).then(res => {
            if (res.status == 200) {
                resolve(res.data)
            } else {
                reject(res.data)
            }
        }).catch(err => {
            reject(err)
            console.log(err)
        })
    })
 }
