import React from "react";
import Bottom from "./bottom";
import ceuc17Img from "./img/ceuc-17.png";
import grayImg from "./img/gray.jpg";
import pupleImg from "./img/puple.jpg";
import china1 from "./img/china.png";
import china2 from "./img/china2.png";

export default class Agenda extends React.Component {
    componentWillMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className="agenda">
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
                <div className="agenda-page">
                    <div className="intro">
                        <div className="title">
                            议程页
                        </div>
                        <div className="things">
                            9.16 中国云原生用户大会日程
                        </div>
                        <img className="bg" src={ceuc17Img} alt=""/>
                    </div>
                    <div className="blue-box"/>
                    <img className="gray" src={grayImg} alt=""/>
                    <img className="puple" src={pupleImg} alt=""/>
                </div>
                <div className="content">
                    <div className="table">
                        <table>
                            <tbody>
                            <tr>
                                <th>主论坛</th>
                                <td className="time">8:30-9:00</td>
                                <td colSpan={2} className="td-center-left">Check In/Coffee Break</td>
                            </tr>
                            <tr>
                                <th rowSpan={12}/>
                                <td>9:00-9:15</td>
                                <td colSpan={2} className="td-center-left">开场欢迎致辞</td>
                             
                            </tr>
                            <tr>
                                <td>9:15-9:45</td>
                                <td>How Good Is Your Code？</td>
                                <td>Dan Kohn CNCF 执行董事（现场提供同传）</td>
                            </tr>
                            <tr>
                                <td>9:45-10:00</td>
                                <td>云原生的崛起——企业的开源创新之路</td>
                                <td>任道远 VMware 中国研发中心 总经理 </td>
                            </tr>
                            <tr>
                                <td>10:00-10:20</td>
                                <td>云原生助力企业实现数字化与智能化转型</td>
                                <td>张鑫 才云科技 CEO </td>
                            </tr>
                            <tr>
                                <td>10:20-10:35</td>
                                <td>筚路蓝缕，不忘初心——华为云容器思考与实践分享</td>
                                <td> 方璞 华为云 容器服务域产品总监</td>
                            </tr>
                            <tr>
                                <td>10:35-10:50</td>
                                <td>社区 2019 计划发布仪式暨年度社区最佳讲师及译者颁奖典礼</td>
                                <td>韩佳瑶 才云科技 COO & CNCF 官方中国大使</td>
                            </tr>
                            <tr>
                                <td>10:50-11:15</td>
                                <td colSpan={2} className="td-center-left">茶歇</td>                                
                            </tr>
                            <tr>
                                <td>11:15-11:35</td>
                                <td>智能时代数字化转型的启示</td>
                                <td>徐明强 微软全渠道事业部 首席技术官</td>
                            </tr>
                            <tr>
                                <td>11:35-11:45</td>
                                <td>完整微服务技术栈的定义和实践探索</td>
                                <td>陈谔 网易云 副总经理</td>
                            </tr>
                            <tr>
                                <td>11:45-12:00</td>
                                <td>企业容器云新时期：更高 - 更快 - 更强</td>
                                <td>杜宁 才云科技 CGO</td>
                            </tr>
                            <tr>
                                <td>12:00-12:15</td>
                                <td>AI for Everyone</td>
                                <td> 李锐 谷歌 开发者生态中国区负责人 </td>
                            </tr>
                            <tr>
                                <td>12:15-13:30</td>
                                <td colSpan={2} className="td-center-left">午餐及休息</td>
                            </tr>
                            <tr>
                                <th rowSpan={8}>
                                    行业落地案例<br/>
                                    分论坛
                                    <span className="host-main">主持人：杜宁<br/> 才云科技 CGO</span>
                                </th>
                                <td>14:00-14:30</td>
                                <td>中国银联的容器探索之旅</td>
                                <td>庞筱筱 才云科技 售前解决方案架构师</td>
                            </tr>
                            <tr>
                                <td>14:35-15:05</td>
                                <td>金融行业智能化转型实践</td>
                                <td>高鹏程 七牛云 首席云计算架构师</td>
                            </tr>
                            <tr>
                                <td>15:10-15:40</td>
                                <td>唯品会容器化 AI 平台案例分享</td>
                                <td>李望 才云科技 资深解决方案架构师</td>
                            </tr>
                            <tr>
                                <td>15:45-16:00 </td>
                                <td colSpan={2} className="td-center-left">茶歇</td>
                            </tr>
                            <tr>
                                <td>16:00-16:30</td>
                                <td>微服务框架在多个行业的架构设计与落地实践</td>
                                <td>刘超 网易云 解决方案总架构师</td>
                                
                            </tr>
                            <tr>
                                <td>16:35-17:05</td>
                                <td>锦江集团容器业务平台落地实践</td>
                                <td>刘康 才云科技 资深解决方案架构师 </td>
                            </tr>
                            <tr>
                                <td>17:10-17:40 </td>
                                <td>海尔集团容器云平台建设经验及思考</td>
                                <td>郭辉 才云科技 项目经理</td>
                            </tr>
                            <tr>
                                <td>17:45-18:15</td>
                                <td>电力行业 AI 场景分享</td>
                                <td>王斌峰 才云科技 解决方案架构师</td>
                            </tr>
                            <tr>
                                <th rowSpan={11}>
                                技术分论坛 A<br/>
                                    <span className="host-main">主持人：宗彬彬<br/> 才云科技 销售总监</span>
                                </th>
                                <td colSpan={3} className="td-center">Kubernetes 编排与优化专场</td>
                            </tr>
                            <tr>

                                <td>13:30-14:00</td>
                                <td>单机精细化调度在离线混部及零成本支持大促的实践</td>
                                <td>张晓宇 阿里巴巴 技术专家</td>
                            </tr>
                            <tr>
                                <td>14:00-14:30</td>
                                <td>Kubernetes 的扩展性：大道至简，道法自然</td>
                                <td>赵相鹏 中兴通讯 软件工程师</td>
                            </tr>
                            <tr>
                                <td>14:30-15:00</td>
                                <td>Kubernetes 在容器混合云领域的实践与发展</td>
                                <td>王泽锋 华为云 K8S 开源负责人</td>
                            </tr>
                            <tr>
                                <td>15:00-15:30</td>
                                <td>如何打造百万级容器技术</td>
                                <td>孙宏亮 阿里巴巴 技术专家</td>
                            </tr>
                            <tr>
                                <td>15:30-15:45</td>
                                <td colSpan={2} className="td-center-left">茶歇</td>
                            </tr>
                            <tr>
                                <td>15:45-16:15</td>
                                <td>Kubernetes 容器运行时演进</td>
                                <td>倪朋飞 微软 Senior Software Engineer</td>
                            </tr>
                            <tr>
                                <td>16:15-16:45</td>
                                <td>Introduction to Serverless Kubernetes</td>
                                <td>张维 阿里巴巴 高级技术专家</td>
                            </tr>
                            <tr>
                                <td>16:45-17:15</td>
                                <td>使用 Kubernetes 加速定制化私有云管理组件的集成</td>
                                <td>喻涵 中国移动杭州研发中心 云平台架构师</td>
                            </tr>
                            <tr>
                                <td>17:15-17:45</td>
                                <td>Kubernetes 在不同客户场景下的网络方案实践</td>
                                <td>王必成 网易云 资深解决方案架构师</td>
                            </tr>
                           
                            <tr>
                                <td>17:45-18:15</td>
                                <td colSpan={2} className="td-center-left">圆桌论坛</td>
                            </tr>
                            <tr>
                                <th rowSpan={10}>
                                    技术分论坛 B
                                    <span className="host-main">主持人：秦泽伟 <br/>才云科技 资深项目经理</span>
                                </th>
                                <td colSpan={3} className="td-center">云原生应用与实践专场</td>
                            </tr>
                            <tr>

                                <td>13:30-14:00</td>
                                <td>基于 Kubernetes 的 FaaS 平台开源实现——Kubeless 的应用实践</td>
                                <td>李志伟 当当网 架构部负责人</td>
                            </tr>
                            <tr>
                                <td>14:00-14:30</td>
                                <td>构建云原生仓库——CNCF 项目 Harbor</td>
                                <td>王岩 VMware 高级工程师</td>
                            </tr>
                            <tr>
                                <td>14:30-15:00</td>
                                <td>Kubernetes 与 Dubbo 结合的优化与实践之路</td>
                                <td>朱显杰 微医 数据总监</td>
                            </tr>
                            <tr>
                                <td>15:00-15:30</td>
                                <td>Istio 微服务管理平台加速微服务的云原生转型</td>
                                <td>章鑫 华为云 微服务平台高级工程师</td>
                            </tr>
                            <tr>
                                <td>15:30-15:45</td>
                                <td colSpan={2} className="td-center-left">茶歇</td>
                            </tr>
                            <tr>
                                <td>15:50-16:25</td>
                                <td>无人驾驶场景下 Kubeflow 的应用以及开发</td>
                                <td>薛磊 Momenta 资深研发工程师</td>
                            </tr>
                            <tr>
                                <td>16:30-17:05</td>
                                <td>腾讯企业容器云平台 GaiaStack 实践</td>
                                <td>罗韩梅 腾讯 高级工程师</td>
                            </tr>
                            <tr>
                                <td>17:10-17:45</td>
                                <td>基于 Kubernetes 的区块链服务平台</td>
                                <td>彭靖田 了得研究院 首席科学家</td>
                            </tr>

                            <tr>
                                <td>17:45-18:05</td>
                                <td colSpan={2} className="td-center-left">圆桌论坛</td>
                            </tr>
                            <tr>
                                <th/>
                                <td>18:30-20:00</td>
                                <td colSpan={2} className="td-center-left">晚宴</td>
                            </tr>
                            </tbody>
                        </table>
                        <p className="some-word">* 大会议程以当天为准，最终解释权归 2018 CEUC 大会组委会所有。</p>
                    </div>
                    <div className="main-bg"/>
                    <div className="main-bg1"/>
                    <div className="main-bg2"/>
                    <div className="main-bg3"/>
                    <div className="yellow-box"/>
                </div>
                <Bottom/>
            </div>
        )
    }
}
