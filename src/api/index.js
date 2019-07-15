//包含应用中所有请求接口的函数：接口请求函数

// import qs from 'qs';
import ajax from './ajax'

//const BASE = 'http://localhost:5000'
const BASE = ''
//请求登录
export const reqLogin = (username,password) => (
    // ajax({
    //     method:'post',
    //     url: BASE + '/login',
    //      data:{//data是对象，默认使用json请求体携带参数
    //         username,
    //         password
    //      }
    //    // data: qs.stringify({username,password})
    // })

    ajax.post(BASE + '/login',{username,password})
)


// export function reqLogin(username,password){
//     return ajax({
//         method:'post',
//         url: BASE + '/login',
//          data:{//data是对象，默认使用json请求体携带参数
//             username,
//             password
//          }
//        // data: qs.stringify({username,password})
//     })
// }


//将实参数据赋值给形参变量