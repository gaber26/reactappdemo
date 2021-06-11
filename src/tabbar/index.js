import React, { PureComponent } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./index.scss";
import Home from "../pages/home";
import About from "../pages/about";
import My from "../pages/my";
import indexImg from "../assets/images/index.svg";
import indexSelectedImg from "../assets/images/indexSelectedImg.svg";
import aboutImg from "../assets/images/about.svg";
import aboutSelectedImg from "../assets/images/aboutSelectedImg.svg";
import myImg from "../assets/images/my.svg";
import mySelectedImg from "../assets/images/mySelectedImg.svg";
class Tabbar extends PureComponent {
  state = {
    selectedTab: 0,
    routeConfig: [
      { title: "首页", path: "/", exact: true, component: Home, icon: indexImg, selectedIcon: indexSelectedImg },
      { title: "关于", path: "/about", exact: true, component: About, icon: aboutImg, selectedIcon: aboutSelectedImg },
      { title: "我的", path: "/my", exact: true, component: My, icon: myImg, selectedIcon: mySelectedImg },
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
                      {this.state.selectedTab == index ? <img style={{ width: "30px", height: "30px" }} src={item.selectedIcon} /> : <img style={{ width: "30px", height: "30px" }} src={item.icon} />}
                      <p style={{ color: this.state.selectedTab == index ? "#87CDF7" : "" }}>{item.title}</p>
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
