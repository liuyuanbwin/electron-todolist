/*
 * @Description:
 * @Version:
 * @Author: liu
 * @Date: 2020-07-03 10:02:03
 */
import React from 'react';
import { Checkbox,message } from 'antd';
import './index.less'
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
  }

  render() {

    const {todoContent} = this.state

    return (

      <div className="todo-item-container">

        <p className={todoContent.done ? 'done' : 'undone'}><Checkbox className="done-check-box"  onChange={(e) => message.success(e.target.checked ? 'yes' : 'no')}></Checkbox><span className="item-title">{todoContent.title}</span> <span className="item-content">{todoContent.content} {todoContent.create_time}</span></p>

      </div>

    )
  }
}
export default index;