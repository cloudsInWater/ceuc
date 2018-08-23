import React from "react";
import homeBBgImg from "./img/home-b-bg.png";
import hzImg from "./img/hz.png";
import G4Img from "./img/Group 4.png";
import SiteImg from "./img/icon-site.png";
import Bottom from "./bottom";
import china1 from "./img/china.png";
import china2 from "./img/china2.png";
import lady1 from "./img/keith.png";
import lady2 from "./img/zhang.png";
import lady3 from "./img/ren.png";
import lady4 from "./img/home-dan.png";
import { Link } from 'react-router-dom';
import tr1 from './img/tr1.png'
import tr2 from './img/tr2.jpeg'
import tr3 from './img/tr3.png'
export default class Home extends React.Component {
    state = {
        number: 3
    };
    gojoin=()=>{
        window.location.href=""
    }
    componentWillMount() {
        const {number} = this.state;
        let n= number;
        this.timer = setInterval(() => {
            this.setState({number:(++n)%4});
        }, 1500);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    sponsor = () => {
        window.open("http://cn.mikecrm.com/LsmrsMc");
    };

    render() {
        const { number } = this.state;
        return (
            <div className="home">
                <div className="top">
                    <div className="left">
                        <div className="line"/>
                        <div className="ico"/>
                        <div className="dayAndSite">
                            <div className="day">
                                9 月 16 日
                            </div>
                            <div className="site">
                                <div className="city">杭州·</div>
                                <div className="hotel">白马湖建国饭店</div>
                            </div>
                        </div>
                        <div className={`square s${number}`}/>
                    </div>
                    <div className="triangle"/>
                    <div className="text">
                        <img src={china1} alt=""/>
                        <img className="china2" src={china2} alt=""/>
                    </div>
                </div>
                <div className="image-text">
                    <div className="text1">
                    2018 中国云原生用户大会（2018 CEUC）是由才云科技（Caicloud）、K8sMeetup 中国社区、 Kubeflow 中国社区联合主办的聚焦中国行业应用与技术落地的盛会。汇聚国内外一线技术大咖、头部社区负责人，共同展望云原生未来，探讨云原生技术和思想在变革的浪潮中如何实践落地，打通中国企业数字和业务的价值。
                    </div>
                    <div className="image1">
                        <div className="blue"/>
                    </div>
                    <div className="image2">
                        <div className="green"/>
                    </div>
                    <div className="text2">
                        2017 年 10 月，由 Caicloud，CNCF 及 K8sMeetup 中国社区联合在杭州举办 Kubernetes 中国用户大会（KEUC , Kubernetes End User
                        Conference）会议 ，是迄今为止中国境内规模最大、实践技术最前沿的 Kubernetes 领域盛会。<br/><br/>
                        CEUC 将继续秉承 KEUC 开放协作、技术共享的宗旨，致力于为业界带来最新开源技术、行业应用案例展示与最佳实践；以前沿视角对话 Cloud Native 领域国内外技术顶级技术专家，为中国企业级行业用户在业务部署和实践带来精准指引。
                        <div className="red"/>
                    </div>
                    <div className="bg1"/>
                    <div className="bg2"/>
                </div>
                <div className="four-lady">
                    <img className="lady con1" src={lady4} alt=""/>
                    <img className="lady con2" src={lady2} alt=""/>
                    <img className="lady con3" src={lady3} alt=""/>
                    <img className="lady con4" src={lady1} alt=""/>
                    <div className="yellow">
                        <div className="title">
                            大会嘉宾
                        </div>
                    </div>
                    <div className="bg1"/>
                    <div className="bg2"/>
                    <div className="bg3"/>
                    <div className="bg4"/>
                </div>
                <div className="sponsor">
                    <div className="title">
                        大会议程
                        <div className="line">
                            —————————————
                        </div>
                    </div>
                    <div className="main">
                        <div className="yellow-box">
                            <div className="box-line">
                                <div className="box"/>
                                <div className="box"/>
                                <div className="box"/>
                                <div className="box"/>
                                <div className="box"/>
                            </div>
                            <div className="box-line">
                                <div className="box"/>
                                <div className="box"/>
                                <div className="box"/>
                            </div>
                            <div className="box-line">
                                <div className="box"/>
                                <div className="box"/>
                            </div>
                            <div className="box-line">
                                <div className="box"/>
                            </div>
                            <div className="box-line">
                                <div className="box"/>
                            </div>
                        </div>
                        <div className="text">
                            <div className="title">
                                主论坛
                            </div>
                            <div className="line">
                                ////////////////
                            </div>
                            <div className="content">
                                <div className="cir pink"/>CNCF Keynote<br/>
                                <div className="cir pink"/>行业顶尖企业 Keynote<br/>
                                <div className="cir pink"/>颁奖典礼<br/>
                                <div className="cir pink"/>社区 18 年新计划发布
                            </div>
                        </div>
                        <Link to="/detail-schedule">
                            <div className="button">
                                论坛议程详情>>>
                            </div>
                        </Link>
                    </div>
                    <div className="profession">
                        <div className="text">
                            <div className="title">
                                行业论坛
                            </div>
                            <div className="line">
                                //////////////////////////
                            </div>
                            <div className="content">
                                <div className="cir yellow"/>金融行业落地案例专场<br/>
                                <div className="cir yellow"/>制造业落地案例专场<br/>
                                <div className="cir yellow"/>新零售电商落地案例专场<br/>
                                <div className="cir yellow"/>能源/教育业落地案例专场
                            </div>
                        </div>
                    </div>
                    <div className="technology">
                        <div className="text">
                            <div className="title">
                                技术论坛
                            </div>
                            <div className="line">
                                //////////////////////////
                            </div>
                            <div className="content">
                                <div className="cir blue"/>Kubernetes 编排与管理<br/>
                                <div className="cir blue"/>Kubernetes 优化与实践<br/>
                                <div className="cir blue"/>基于 Kubernetes 构建 AI 业务生态<br/>
                                <div className="cir blue"/>Kubeflow 应用及落地
                            </div>
                        </div>
                    </div>
                </div>
                <div className="train">
                    <h1>Kubernetes 培训</h1>
                    <p>K8S 顶级讲师细致讲解，从 Kubernetes 的前世今生，到架构及原理；从 Kubernetes 存储子系统的介绍，到分享性能调优的实际案例，了解社区的发展方向和趋势；从 Kubernetes 中的资源管理及默认功能，到如何进行定制化的开发。 </p>
                    <div className="train-can">
                        <div className="train-left">
                            <div className="train-profile grey"> 
                                <div><img src={tr1} alt=""/></div>
                                <h2><span>邓德源</span><span>（才云科技 CTO）</span></h2>
                                <h3>Kubernetes 架构及原理</h3>
                                <ul>
                                    <li> Kubernetes 的前世今生</li>
                                    <li> Kubernetes 的架构和设计原则</li>
                                    <li> Kubernetes 的工作流程</li>
                                    <li> Kubernetes 联邦集群</li>
                                </ul>
                            </div>
                            <div className="train-profile green">
                                <div><img src={tr2} alt=""/></div>
                                <h2><span>马达</span><span>（IBM 软件架构师）</span></h2>
                                <h3>Kubernetes 资源管理详解</h3>
                                <ul>
                                    <li> Kubernetes Quota 详解</li>
                                    <li> Kubernetes Scheduler 调度策略</li>
                                    <li> Kubernetes 多用户管理</li>
                                    <li> Kubernetes 资源管理插件</li>
                                </ul> 
                            </div>
                            <div className="train-bottom"><Link to="/ticket-detail">立即报名>>></Link></div>
                        </div>
                        <div className="train-profile blue">
                            <div><img src={tr3} alt=""/></div>
                            <h2><span>熊中哲</span><span>（沃趣科技 VP of Engineering）</span></h2>
                            <h3>Kubernetes 存储详解</h3>
                            <ul>
                                <li className="bigger"> Kubernetes 存储模型和实践</li>
                                <li className="bigger"> Kubernetes 动态存储管理和扩容</li>
                                <li> Kubernetes 新特性 : LocalVolume，对调度器的影响以及局限</li>
                                <li> Kubernetes 新特性 : CSI 和基于 CSI 实现卷扩容实现</li>
                                <li > Kubernetes 问题定位 : CSI 组件性能问题定位及其调优</li>
                            </ul> 
                        </div>
                    </div>
                </div>
                <div className="partner">
                    <div className="text">
                        <div className="title">
                            赞助商
                        </div>
                        <div className="line1">
                            <h2>铂金赞助商</h2>
                            <div>
                                <div className="cn"/>
                            </div>
                            <h2>黄金赞助商</h2>
                            <div>
                                <div className="cai"/>
                                <div className="k8s"/>
                            </div>
                            <h2>白银赞助商</h2>
                            <div>
                                <div className="qiniu"/>
                            </div>
                        </div>
                        <div className="all-bg">
                        
                            <div className="title">
                                合作社区
                            </div>
                            <div className="line2">
                                <div className="huo"/>
                                <div className="sf"/>
                                <div className="DBA"/>
                                <div className="osc"/>
                                <div className="info"/>
                                <div className="deg"/>
                                <div className="shuo"/>
                            </div>
                            <div className="title">
                                合作媒体
                            </div>
                            <div className="line3">
                                <div className="tmt"/>
                                <div className="pr"/>
                            </div>

                            
                            <div className="bg3"/>
                            <div className="button" onClick={this.sponsor}>
                                我要赞助>>>
                            </div>
                        </div>
                        <div className="bg1"/>
                        <div className="bg2"/>
                        
                        </div>
                        

                    <div className="bottom">
                        <img className="bg" src={homeBBgImg} alt=""/>
                        <div className="site">
                            <img src={SiteImg} alt=""/>
                        </div>
                        <div className="welcome">
                            杭州白马湖建国饭店
                            <div className="triangle"/>
                        </div>
                        <div className="three-text">
                            <div className="pic-text">
                                <div className="pic one"/>
                                <div className="text">
                                    <div className="title">
                                        酒店地址：
                                    </div>
                                    <div className="context">
                                    浙江省杭州市滨江区长江南路 336 号近南环路
                                    </div>
                                </div>
                            </div>
                            <div className="pic-text">
                                <div className="pic two"/>
                                <div className="text">
                                    <div className="title">
                                        推荐住宿：
                                    </div>
                                    <div className="context">
                                        杭州白马湖建国饭店
                                    </div>
                                </div>
                            </div>
                            <div className="pic-text">
                                <div className="pic three"/>
                                <div className="text">
                                    <div className="title">
                                        交通指南：
                                    </div>
                                    <div className="context">
                                        杭州东站火车站距离 20.3 公里，驾车约 38 分钟<br/>
                                        市中心武林广场距离 15 公里，驾车约 29 分钟<br/>
                                        杭州萧山国际机场距离 29.1 公里，驾车约 47 分钟
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="two-pic">
                            <img className="hz" src={hzImg} alt=""/>
                            <img className="g4" src={G4Img} alt=""/>
                        </div>
                    </div>
                </div>
                <Bottom/>
            </div>
        )
    }
}
