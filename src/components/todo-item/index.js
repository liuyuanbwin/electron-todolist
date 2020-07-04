/*
 * @Description:
 * @Version:
 * @Author: liu
 * @Date: 2020-07-03 10:02:03
 */
import React from 'react';
import { Checkbox,message } from 'antd';
import moment from 'moment'
import './index.less'
//let {remote} = require('electron')
class index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todoContent: {},
      done:false
    };
  }

  componentDidMount() {
    this.setState({todoContent: this.props.todoContent})
    //remote.getCurrentWindow().webContents.openDevTools()
  }

  render() {
    const {todoContent} = this.state

    return (

      <div key className="todo-item-container">

        <p className={todoContent.done ? 'done' : 'undone'}><Checkbox className="done-check-box"  onChange={(e) => message.success(e.target.checked ? 'yes' : 'no')}></Checkbox><span className="item-title">{todoContent.title}</span> <span className="item-content">{todoContent.content} {moment(todoContent.create_time).format('YY-M-D HH:MM')}</span></p>

      </div>

    )
  }
}
export default index;