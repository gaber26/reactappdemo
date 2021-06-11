import logo from "../../assets/images/logo.svg";
import "./index.css";
import React from "react";
import { SearchBar, Carousel, Grid, Button, WhiteSpace, WingBlank } from "antd-mobile";
import boutiqueImg from "../../assets/images/boutique.png";
import freeImg from "../../assets/images/free.png";
import sexImg from "../../assets/images/sex.png";
import girlImg from "../../assets/images/girl.png";
import historyImg from "../../assets/images/history.png";
import computeImg from "../../assets/images/compute.png";
import literatureImg from "../../assets/images/literature.png";
import artImg from "../../assets/images/art.png";

class Index extends React.Component {
  // 类名  继承  react组件
  state = {
    data: ["1", "2", "3"],
    imgHeight: 176,
    gridData: [
      {
        icon: boutiqueImg,
        text: "精选",
      },
      {
        icon: freeImg,
        text: "免费",
      },
      {
        icon: sexImg,
        text: "男生",
      },
      {
        icon: girlImg,
        text: "女生",
      },
      {
        icon: historyImg,
        text: "历史",
      },
      {
        icon: literatureImg,
        text: "文学",
      },
      {
        icon: computeImg,
        text: "计算机",
      },
      {
        icon: artImg,
        text: "艺术",
      },
    ],
    conData: [
      { id: 14, name: "宇宙留言", author: "郑星", publish: "中国致公出版社 ", price: "32.00", content: "梦境直播 \n今天是肖禹升职的日子，他起得很早，吃了一份培根吐司当作早餐。培根煎得恰到好处，吐司也烤得酥脆可口，他的心情自然不错。" },
      { id: 15, name: "行刑人·银匠：《尘埃落定》外篇", author: "阿来", publish: "浙江文艺出版社", price: "13.59", content: "1994年5月，马尔康。\n我坐在一台286电脑前，高原上春天来得晚，窗外山上白桦林一派新绿，一树树杜鹃花绽放其间，鲜明灿烂。人的一生，会有无数这样的瞬间，身在世间，又超然物外。\n那时我停止文学写作己近四年，做本地诸家土司史调查也近四年。" },
    ],
  };
  render() {
    return (
      <div>
        <div style={{ height: 4 }}> </div>
        <SearchBar placeholder="搜索关键词" />
        <div style={{ height: 6 }}> </div>
        <Carousel autoplay={true} infinite beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)} afterChange={(index) => console.log("slide to", index)}>
          {this.state.data.map((val) => (
            <a key={val} style={{ display: "inline-block", width: "100%", height: this.state.imgHeight }}>
              <img src={`https://zos.alipayobjects.com/rmsportal/${val}.png`} alt="" style={{ width: "100%", verticalAlign: "top" }} />
            </a>
          ))}
        </Carousel>
        <Grid data={this.state.gridData} hasLine={false} className="not-square-grid" />
        <div>
          <div className="title">
            <h3>热门书籍</h3>
            <p>更多</p>
          </div>
          {this.state.conData.map((item, index) => {
            return (
              <div
                className="content"
                onClick={() => {
                  this.aa();
                }}
              >
                <img src={girlImg} alt="" />
                <div className="right">
                  <p className="name">书名：{item.name}</p>
                  <p className="author">作者：{item.name}</p>
                  <p className="con">内容：{item.content}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ["AiyWuByWklrrUDlFignR", "TekJlZRVCjLFexlOCuWn", "IJOtIlfsYdTyaDTRVrLI"],
      });
    }, 100);
  }
  aa() {
    console.log(1);
    this.props.history.push("/bookDetail")
  }
}

export default Index;
