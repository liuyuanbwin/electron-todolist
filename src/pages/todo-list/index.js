/*
 * @Description:
 * @Version:
 * @Author: liu
 * @Date: 2020-07-03 09:48:23
 */
import React from 'react';
import {Timeline} from 'antd';
import {data} from '../../data'
import TodoItemContent from '../../components/todo-item'

class index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  renderList = (list) => {
    return list.map(todoContent => {

     return (<Timeline.Item color="red">
            <TodoItemContent todoContent={todoContent} />
  </Timeline.Item>)


    })
  }

  render() {
    return (
      <Timeline mode="right">
        {this.renderList(data)}
      </Timeline>)
  }
}

export default index;