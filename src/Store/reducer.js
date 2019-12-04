

const defaultState = {
    inputValue :'',
    list:[
        '学习redux',
        '学习redux-duck',
        '学习redux-saga',
    ]
}
export default (state=defaultState,action)=>{
    switch (action.type){
        case 'ChangeInput':
            let newState = JSON.parse(JSON.stringify(state))
            newState.inputValue = action.value;
            return newState;
        case 'addItem':
            let newStateVal = JSON.parse(JSON.stringify(state)) 
            newStateVal.list.push(newStateVal.inputValue);
            newStateVal.inputValue = '';
            return newStateVal;
        case 'rmItem':
            console.log(2222);
            let newStateVal1 = JSON.parse(JSON.stringify(state)) 
            newStateVal1.list.splice(action.index,1);
            return newStateVal1
        default: return state    
    }
    
    
}