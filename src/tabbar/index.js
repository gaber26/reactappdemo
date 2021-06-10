import React, { PureComponent } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./index.scss";
import Home from "../pages/home";
import About from "../pages/about";
import My from "../pages/my";
class Tabbar extends PureComponent {
  state = {
    selectedTab: 0,
    routeConfig: [
      { title: "首页", path: "/", exact: true, component: Home, icon: "https://test-hospital-sass.oss-cn-shanghai.aliyuncs.com/wx-small-public-img/home-2.png", selectedIcon: "https://test-hospital-sass.oss-cn-shanghai.aliyuncs.com/wx-small-public-img/home-2-w.png" },
      { title: "关于", path: "/about", exact: true, component: About, icon: "https://test-hospital-sass.oss-cn-shanghai.aliyuncs.com/wx-small-public-img/info-2.png", selectedIcon: "https://test-hospital-sass.oss-cn-shanghai.aliyuncs.com/wx-small-public-img/info-2-w.png" },
      { title: "我的", path: "/my", exact: true, component: My, icon: "https://test-hospital-sass.oss-cn-shanghai.aliyuncs.com/wx-small-public-img/person-2.png", selectedIcon: "https://test-hospital-sass.oss-cn-shanghai.aliyuncs.com/wx-small-public-img/person-2-w.png" },
    ],
  };
  //选择切换
  changeTab(tab) {
    this.setState({
      selectedTab: tab,
    });
  }
  render() {
    return (
      <Router>
        <div className="container">
          <div className="header">{this.state.routeConfig[this.state.selectedTab].title}</div>
          <div className="main-box">
            <div className="main-content">
              {/* exact精准匹配 */}
              {this.state.routeConfig.map((item, index) => {
                return <Route key={index} path={item.path} exact={item.exact} component={item.component} />;
              })}
            </div>
          </div>
          <div className="tabBar">
            <ul>
              {this.state.routeConfig.map((item, index) => {
                return (
                  <li key={index}>
                    <Link onClick={this.changeTab.bind(this, index)} to={item.path}>
                      {this.state.selectedTab == index ? <img style={{ width: "30px", height: "30px" }} src={item.icon} /> : <img style={{ width: "30px", height: "30px" }} src={item.selectedIcon} />}
                      <p style={{ color: this.state.selectedTab == index ? "#D25D4B" : "" }}>{item.title}</p>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Router>
    );
  }
}

export default Tabbar;
