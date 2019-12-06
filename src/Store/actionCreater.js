import {CHANGE_INPUT,ADD_ITEM,RM_ITEM,GET_API} from './actionType'

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

export const getApi = (data)=>({
    type:GET_API,
    data
})