import React, { Component } from 'react';
import {Button,Input,List,} from 'antd'
import store from './Store'
import {changeInput,addItem,rmItem,getApi} from './Store/actionCreater'
import axios from 'axios'

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        store.subscribe(()=>this.storeChange());
    }

    componentDidMount(){
        console.log(111111);
        // async function getData(){
        //     try{
        //         const data = await axios.get('https://www.v2ex.com/api/topics/latest.json');
        //         console.log(data);
        //     } catch(error){
        //         console.log(error);
        //     }
        // }
        // getData()
        axios.get('/api/data/profile').then((res)=>{
            console.log(res);
            store.dispatch(getApi(res.data));
        })

    }

    storeChange(){
        this.setState(store.getState)
    }

    InputValChange = (e)=>{
        store.dispatch(changeInput(e.target.value));
    }

    addItem(){
        store.dispatch(addItem());
    }

    rmItem(index){
        store.dispatch(rmItem(index));
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