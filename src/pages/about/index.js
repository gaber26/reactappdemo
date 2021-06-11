import React, { Component, Fragment } from 'react'
import './index.scss';
import Item from './component/item'
import { articleList } from '../../lib/api'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

class Xiaojiejie extends Component {  // 类名  继承  react组件
  constructor(props) {  // 构造
    super(props)  // 调用父级方法
    this.state = {
      inputValue: '',
      list: ['小米'],
      articleListInfo:[]
    }
  }

  // componentWillMount () {
  //   console.log('componentWillMount-----组件将要挂载到页面的时候')
  // }

  // shouldComponentUpdate (nextProps, nextState) {
  //   console.log('shouldComponentUpdate-----组件更新之前  1')
  //   return true
  // }

  // componentWillUpdate () {
  //   console.log('componentWillUpdate-----组件更新之前  2')
  // }

  render() {  // 渲染
    console.log('render-----组件挂在中  3')
    return (
        <Fragment> 
          {/* 外层类似vue必须加一层盒子，但是加了这个就可以不用增加额外盒子 */}
          {/* 绑定事件必须要.bind(this)进去，或者使用箭头函数，不然无法找到this */}
          <div>
            <label htmlFor="input" >增加</label>
            <input id="input" className="input" value={this.state.inputValue} onChange={(e) => {this.inputChange(e)}} />
            <button onClick={() => {this.addClick()}}>增加</button>
          </div>
          <ul ref={(ul) => {this.ulDom = ul}}>
            <TransitionGroup>
              {
                  this.state.list.map((item, index) => {
                    return (
                      <CSSTransition
                        timeout={2000}
                        classNames="boos-text"
                        unmountOnExit
                        appear={true}
                        key={index}
                      >
                        <Item key={index} content={item} index={index} delItem={()=>{this.delItem(index)}} />
                      </CSSTransition>
                    )
                  })
                }
            </TransitionGroup>
          </ul>
        </Fragment>
    )
  }

  // componentDidUpdate () {
  //   console.log('componentDidUpdate-----所有挂载完毕执行   4')
  // }

  componentDidMount () {
    console.log('componentDidMount-----组件已经挂载到页面的时候')
  }

  inputChange (e) {
    this.setState({ // react单向流，需要绑定原始数据变化
      inputValue: e.target.value
    })
  }
  addClick () {
    this.setState({ // react单向流，需要绑定原始数据变化
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    }, () => {
      console.log(this.ulDom.querySelectorAll('li').length)
    })
  }
  delItem (index) { // 数据操作必须重新赋值操作，不能直接改变state里面的数据
    let list = this.state.list
    list.splice(index, 1)
    this.setState({ // react单向流，需要绑定原始数据变化
      list: list
    })
  }

  async articleListA () {
    let res = await articleList()
    if(res) {
      console.log(res)
      this.setState({
        articleListInfo: res.rows
      })
    }
  }
}

export default Xiaojiejie;