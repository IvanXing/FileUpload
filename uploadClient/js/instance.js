// 创建一个单独的axios实例处理上传，不影响别的axios请求
// axios本身就是一个实例，axios.default.baseURL = 'xx'
let instance = axios.create();

instance.defaults.baseURL = 'http://127.0.0.1:8888';
instance.defaults.headers['Content-Type'] = 'multipart/form-data';

// post请求中，如果是 x-www-form-urlencoded 把 传入对象 转换成 xxxx&xxxx
// axios 的 transformRequest 方法 以及 第三方 Qs.stringify 方法
instance.defaults.transformRequest = (data, headers) => {
    const contentType = headers['Content-Type'];
    if (contentType === "application/x-www-form-urlencoded") return Qs.stringify(data);
    return data;
}; 

// 只返回响应主体信息
instance.interceptors.response.use(response => {
    return response.data;
}, reason => {
    // 请求失败处理
    return Promise.reject(reason)
});