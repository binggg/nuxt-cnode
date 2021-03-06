import originAxios from 'axios'
import qs from 'qs'
import Api from '../api'

const axios = originAxios.create({
    baseURL: 'https://cnodejs.org/api/v1',
    headers: {
        post: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }
})

// 响应拦截器
axios.interceptors.response.use(response => {
    return response && response.data
}, err => {
    // 错误处理, 处理success为false的情况
    if (err.response && err.response.data) {
        return Promise.resolve(err.response.data)
    }
    return Promise.reject(err)
})

class CreateAxios extends Api {
    constructor(store) {
        super(store)
        this.store = store
    }

    getAccessToken() {
        return this.store.state.accessToken
    }

    get(url, config = {}) {
        let accessToken = this.getAccessToken()

        config.params = config.params || {}
        accessToken && (config.params.accesstoken = accessToken)

        return axios.get(url, config)
    }

    post(url, data = {}, config = {}) {
        let accessToken = this.getAccessToken()

        accessToken && (data.accesstoken = accessToken)

        return axios.post(url, qs.stringify(data), config)
    }

    // 返回服务端渲染结果时会用JSON.stringify对state处理,因为store与$axios实例循环引用会导致无法序列化
    // 添加toJSON绕过JSON.stringify
    toJSON() {}
}

export default CreateAxios
