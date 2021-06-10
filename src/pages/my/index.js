import logo from '../../assets/images/logo.svg';
import './index.css';
import React from 'react';

class Index extends React.Component {  // 类名  继承  react组件
  render() {
    return (
      <div>
        <ul className="my-list">
          这是我的页面
        </ul>
      </div>
    )
  }
}

export default Index;
