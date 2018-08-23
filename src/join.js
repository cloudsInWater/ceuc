import React from "react";
import dnImg from "./img/dn.png";
import cncfImg from "./img/cncf.png";
import dengImg from "./img/deng.png";
import Bottom from "./bottom";
import china1 from "./img/china.png";
import china2 from "./img/china2.png";

export default class Join extends React.Component {
    state = {
        pic : ["big","small","small"]
    };

    componentWillMount() {
        window.scrollTo(0, 0);
    }

    animate = (e,number) => {
        let pic = ["small","small","small"];
        pic[number]="big";
        this.setState({pic});
    };

    render() {
        const { pic } = this.state;
        return(
            <div className="join">
                <div className="top">
                    <div className="left">
                        <div className="line"/>
                        <div className="ico"/>
                    </div>
                    <div className="qrAndtext">
                        <div className="qr"/>
                        <div className="scan">
                            扫码即可报名参会
                        </div>
                    </div>
                    <div className="text">
                        <img src={china1} alt=""/>
                        <img className="china2" src={china2} alt=""/>
                    </div>
                </div>
                <div className="honor-guest">
                    <div className="first">
                        <div className="pic">
                            <div className="title">
                                主论坛
                            </div>
                            <div className="things">
                                CNCF 基金会执行董事与国内外互联网大牛一起，展望云原生未来与行业实践
                            </div>
                        </div>
                        <div className="image-text">
                            <div className="image"/>
                            <div className="pic"/>
                            <div className="text">
                                <div className="name">
                                    Dan Kohn<br/>
                                    <span className="job">CNCF 执行董事</span>
                                </div>
                                <div className="introduce">
                                    Cloud Native Computing Foundation 执行董事，负责维护、整合开源技术，如
                                    Kubernetes、Prometheus。参与创建并启动了 Linux Foundation 的核心基础架构，
                                    以提高其安全性。
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="second">
                        <div className="text">
                            <div className="name">
                                张 鑫<br/>
                                <span className="job">才云科技（Caicloud）CEO</span>
                            </div>
                            <div className="introduce">
                                曾为美国谷歌资深软件工程师，并 6 次获得谷歌副总裁和总监颁发的即时奖励。 曾作为技术带头人从事谷歌容器化集群管理系统的研发，自动化管理 95% 以上的谷歌数据中心服务器。
                            </div>
                        </div>
                        <div className="pic"/>
                        <div className="bg"/>
                    </div>
                    <div className="third">
                        <div className="image"/>
                        <div className="bg"/>
                        <div className="text">
                            <div className="name">
                                任道远<br/>
                                <span className="job">VMware 中国研发中心总经理</span>
                            </div>
                            <div className="introduce">
                                2011 年加入 VMware，拥有超过 20 年的高科技研发和咨询服务行业的管理经验，现任 VMware 中国研发中心总经理，领导超过 500 人的中国研发团队, 中国研发中心主要由云平台、网络与安全、存储与高可用性、云管理、终端用户计算等五大事业部组成。
                            </div>
                        </div>
                    </div>
                    <div className="fourth">
                        <div className="image"/>
                        <div className="bg"/>
                        <div className="right"/>
                        <div className="bottom"/>
                        <div className="text">
                            <div className="name">
                                韩佳瑶<br/>
                                <span className="job">才云科技（Caicloud）COO</span>
                            </div>
                            <div className="introduce">
                                美国匹兹堡大学信息技术科学硕士、艺术史学博士学位。擅长软件产品创意、软件开发管理、用户体验以及客户关系开拓和维护。作为创始人成立初创公司，设计并带领团队成功开发基于云平台和移动互联网的便捷在线出租房交易 APP。
                            </div>
                        </div>
                    </div>
                </div>
                <div className="forum">
                    <div className="white"/>
                    <div className="pink"/>
                    <div className="right"/>
                    <div className="forum-guest">
                        <div className="title">
                            分论坛
                        </div>
                        <div className="things">
                    互联网企业技术大牛、开源社区负责人，共同展望云原生未来，围绕开源技术前沿话题，从行业实际应用出发，为企业用户业务部署和实践带来精准指引。
                        </div>
                    </div>
                </div>
                <div className="animate">
                    <div className={`person ${pic[0]}`} onClick={(e)=>this.animate(e,0)}>
                        <div className="image">
                            <img src={ dnImg } alt=""/>
                        </div>
                        <div className="text">
                            <div className="name">
                                杜宁<br/>
                            </div>
                            <div className="job">
                                才云科技（Caicloud) CGO
                            </div>
                            <div className="introduce">
                            16 年 IT，CT，DT 行业从业经验，曾在 UnitedStack，Polycom，Motorola，Siemens 等企业任职。精通云计算 IaaS、PaaS 平台技术，深度学习大数据解决方案等。PRINCE2，PMP，6 西格玛，AMA 认证培训师，曾组织编写并交付过 40 多门管理培训课程。
                            </div>
                        </div>
                    </div>
                    <div className={`person ${pic[1]}`} onClick={(e)=>this.animate(e,1)}>
                        <div className="image">
                            <img src={ dengImg } alt=""/>
                        </div>
                        <div className="text">
                            <div className="name">
                                邓德源<br/>
                            </div>
                            <div className="job">
                                才云科技（Caicloud) CTO
                            </div>
                            <div className="introduce">
                                曾为美国谷歌集群管理组核心成员，主要参与开发集群管理系统。曾作为核心成员参加开发基于容器集群的谷歌开源项目（Kubernetes），一度成为全球前十的贡献者和贡献最高的华人。
                            </div>
                        </div>
                    </div>
                    <div className={`person ${pic[2]}`} onClick={(e)=>this.animate(e,2)}>
                        <div className="image">
                            <img src={ cncfImg } alt=""/>
                        </div>
                        <div className="text">
                            <div className="name">
                                Keith Chan<br/>
                            </div>
                            <div className="job">
                                CNCF 中国区总裁
                            </div>
                            <div className="introduce padd">
                        
                                Linux Foundation APAC 战略规划总监，为 Linux Foundation 在大中华区推广开源。
                            
                            </div>
                        </div>
                    </div>
                </div>
                <Bottom/>
            </div>
        )
    }
}
