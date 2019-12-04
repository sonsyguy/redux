import React, { Component } from 'react';
import {Button,Input,List} from 'antd'
import 'antd/dist/antd.css';
import store from './Store'

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        store.subscribe(()=>this.storeChange());
    }

    storeChange(){
        this.setState(store.getState)
    }

    InputValChange = (e)=>{
        // console.log(e.target.value);
        const action = {
            type:'ChangeInput',
            value:e.target.value
        }
        store.dispatch(action);
    }

    addItem(){
        const action = {
            type:'addItem',
        }
        store.dispatch(action);
    }

    rmItem(index){
        const action = {
            type:'rmItem',
            index
        }
        store.dispatch(action);
    }

    render() { 
        return ( 
            <div>
                <div style={{margin:'10px'}}>
                    <Input 
                        placeholder='Write Something'
                        style={{width:'250px',marginRight:'5px'}}
                        value={this.state.inputValue}
                        onChange={(e)=>this.InputValChange(e)}
                    />
                    <Button onClick={()=>this.addItem()}>增加</Button>
                </div>
                <div style={{margin:'10px',width:'300px'}}>
                    <List
                        bordered
                        dataSource={this.state.list}
                        renderItem={(item,index)=><List.Item onClick={()=>this.rmItem(index)}>{item}</List.Item>}
                    />
                </div>
            </div>
            
        );
    }
}
 
export default TodoList;