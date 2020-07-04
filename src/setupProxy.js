/*
 * @Description: 
 * @Version: 
 * @Author: liu
 * @Date: 2020-07-04 11:43:06
 */ 
/*
 * @Description: 
 * @Version: 
 * @Author: liu
 * @Date: 2020-07-04 11:43:06
 */ 
const {createProxyMiddleware} = require('http-proxy-middleware')
module.exports = function (app) {
    app.use('/todolist',createProxyMiddleware({
        target:'http://localhost:3888',
        changrOrigin:true,
        // pathRewrite:{
        //     "^/api":''
        // }
    }))
}