import {CHANGE_INPUT,ADD_ITEM,RM_ITEM,GET_API} from './actionType'

const defaultState = {
    inputValue :'',
    list:[
    ]
}
export default (state=defaultState,action)=>{
    switch (action.type){
        case CHANGE_INPUT:
            let newState = JSON.parse(JSON.stringify(state))
            newState.inputValue = action.value;
            return newState;
        case ADD_ITEM:
            let newStateVal = JSON.parse(JSON.stringify(state)) 
            newStateVal.list.push(newStateVal.inputValue);
            newStateVal.inputValue = '';
            return newStateVal;
        case RM_ITEM:
            let newStateVal1 = JSON.parse(JSON.stringify(state)) 
            newStateVal1.list.splice(action.index,1);
            return newStateVal1
        case GET_API:
            let newStateVal2 = JSON.parse(JSON.stringify(state)) 
            console.log(action);
            newStateVal2.list = action.data;
            return newStateVal2    
        default: return state    
    }
    
    
}