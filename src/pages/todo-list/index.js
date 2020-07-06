/*
 * @Description:
 * @Version:
 * @Author: liu
 * @Date: 2020-07-03 09:48:23
 */
import React from 'react';
import {Timeline, Form, Input,Button} from 'antd';
import {data} from '../../data'
import TodoItemContent from '../../components/todo-item'
import {getTodoList, addItem, updateItem} from '../../api/todolist'
import './index.less'

class index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data:[]};
  }

  componentDidMount() {
    this.getList()
  }

  getList = () => {
    getTodoList().then(res => {
      alert(res)
      this.setState({data:res.data})
    })
  }

  renderList = (list) => {
    return list.map(todoContent => {

      return (
        <Timeline.Item key={todoContent._id} color="red">
          <TodoItemContent key={todoContent._id} update={(e,id) => {
            let that = this
            updateItem({id:todoContent._id,done:e,age:1111}).then(res =>{
              console.log(`rrrrrrr `,res)
              that.getList()
            })
          }} todoContent={todoContent}/>
        </Timeline.Item>
      )

    })
  }

  render() {
    return (
      <div className="todo-list-and-input-container">
         <Timeline mode="left" pending={
           <Form className="todo-input-form"
           name="customized_form_controls"
           layout="inline"
           onFinish={(e)=>{console.log(e);addItem(e).then(res => this.getList())}}
           initialValues={{
             price: {
               number: 0,
               currency: 'rmb',
             },
           }}
           >
            <Form.Item
            // label="Username"
             name="title"
             rules={[{ required: true, message: 'Please input your username!' }]}
           >
             <Input />
           </Form.Item>
     
           <Form.Item
           //  label="Password"
             name="content"
             rules={[{ required: true, message: 'Please input your password!' }]}
           >
             <Input
              />
           </Form.Item>
           <Form.Item>
             <Button type="primary" htmlType="submit">
               Submit
             </Button>
           </Form.Item>
         </Form>
         }>

        {this.renderList(this.state.data)}
      </Timeline>
      </div>
    )
  }
}

export default index;