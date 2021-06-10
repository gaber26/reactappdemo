import React, { Component } from 'react';
import propTypes from 'prop-types';

class XiaojiejieItem extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  // 组件第一次存在dom中时候函数不会执行
  // 如果已经存在dom中或者dom发生变化时候，函数才会执行
  // 类似vue中的子组件，在更新数据的时候才会执行（个人理解）
  // componentWillReceiveProps () {
  //   console.log('child-componentWillReceiveProps-----')
  // }

  // // 删除dom的时候会执行
  // componentWillUnmount () {
  //   console.log('child-componentWillUnmount-----')
  // }

  // 解决性能问题，子组件会一直渲染。需要调节判定
  shouldComponentUpdate (nextProps, nextState) {
    // console.log('shouldComponentUpdate-----组件更新之前  1')
    if(nextProps.content !== this.props.content) {
      return true
    } else {
      return false
    }
  }

  render() { 
     console.log('child-render')
    return (
      <li onClick={() => {this.props.delItem()}} >
        {this.props.content} - {this.props.name}
      </li>
    );
  }
}

// 参数默认值
XiaojiejieItem.defaultProps = {
  name: '小米啊'
}

// 校验参数和是否必须
XiaojiejieItem.propTypes = {
  name: propTypes.string.isRequired,
  content: propTypes.string,
  index: propTypes.number,
  delItem: propTypes.func
}
 
export default XiaojiejieItem;