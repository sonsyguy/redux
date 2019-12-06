import {CHANGE_INPUT,ADD_ITEM,RM_ITEM,GET_API} from './actionType'
import {getDataUrl} from '../utilUrl'
import axios from 'axios'
// import store from './index'

export const changeInput = (value)=>({
    type:CHANGE_INPUT,
    value
})

export const addItem = ()=>({
    type:ADD_ITEM,
})

export const rmItem = (index)=>({
    type:RM_ITEM,
    index
})

// export const getApi = (data)=>({
//     type:GET_API,
//     data
// })

// redux-thunk就是redux的中间件，中间件就是你可以在收到请求和返回请求之间做一些操作
// 一个操作被relay的时候可以称之为redux

// A thunk就是一个方法返回一个函数
// action函数只能返回action对象，而redux-thunk可以通过返回的函数延迟dispatch或者在指定条件下才dispatch，这个函数接受store的两个方法，dispatch和getState

export const getDataFromUrl = () =>{
    return dispatch =>{
        axios({
            method:'get',
            url:getDataUrl
        })
        .then((res)=>{
            const action = {
                type:GET_API,
                data:res
            }
            console.log(res);
            dispatch(action);
            // return action
        })
        .catch((err)=>{
            console.log(err);
        })
    }
}