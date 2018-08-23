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
                                <td>Check In/Coffee Break</td>
                                <td> </td>
                            </tr>
                            <tr>
                                <th rowSpan={10}/>
                                <td>9:00-9:10</td>
                                <td>开场欢迎致辞</td>
                                <td> </td>
                            </tr>
                            <tr>
                                <td>9:10-9:50</td>
                                <td>敬请期待</td>
                                <td>CNCF 执行董事 Dan Kohn</td>
                            </tr>
                            <tr>
                                <td>9:50-10:20</td>
                                <td>社区 2019 战略发布仪式，「社区」颁奖、云原生行业落地颁奖</td>
                                <td>才云科技 COO 韩佳瑶</td>
                            </tr>
                            <tr>
                                <td>10:20-10:45</td>
                                <td>茶歇</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>10:45-11:00</td>
                                <td>敬请期待</td>
                                <td>VMware</td>
                            </tr>
                            <tr>
                                <td>11:00-11:20</td>
                                <td>Kubernetes 在国内落地与实践分析</td>
                                <td>才云科技 CEO 张鑫</td>
                            </tr>
                            <tr>
                                <td>11:20-11:35</td>
                                <td>敬请期待</td>
                                <td>华为</td>
                            </tr>
                            <tr>
                                <td>11:35-11:45</td>
                                <td>敬请期待</td>
                                <td>CNCF 中国区总裁 Keith Chan</td>
                            </tr>
                            <tr>
                                <td>11:45-11:55</td>
                                <td>敬请期待</td>
                                <td>网易云</td>
                            </tr>
                            <tr>
                                <td>11:55-13:30</td>
                                <td>午餐及休息</td>
                                <td> </td>
                            </tr>
                            <tr>
                                <th rowSpan={10}>
                                    行业落地案例<br/>
                                    分论坛
                                </th>
                                <td>13:30-14:00</td>
                                <td>金融行业落地案例</td>
                                <td>中国银联</td>
                            </tr>
                            <tr>
                                <td>14:00-14:30</td>
                                <td>金融行业落地案例</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>14:30-15:00</td>
                                <td>能源行业落地案例</td>
                                <td>国家电网</td>
                            </tr>
                            <tr>
                                <td>15:00-15:30</td>
                                <td>制造行业落地案例</td>
                                <td>海尔</td>
                            </tr>
                            <tr>
                                <td>15:30-16:00</td>
                                <td>零售行业落地案例</td>
                                <td> </td>
                            </tr>
                            <tr>
                                <td>16:00-16:15 </td>
                                <td>茶歇</td>
                                <td> </td>
                            </tr>
                            <tr>
                                <td>16:20-16:50</td>
                                <td>电商行业落地案例</td>
                                <td>唯品会</td>
                            </tr>
                            <tr>
                                <td>16:50-17:20 </td>
                                <td>电商行业落地案例</td>
                                <td>锦江之星</td>
                            </tr>
                            <tr>
                                <td>17:20-17:50</td>
                                <td>教育行业落地案例</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>17:50-18:10</td>
                                <td>圆桌论坛</td>
                                <td> </td>
                            </tr>
                            <tr>
                                <th rowSpan={12}>
                                技术分论坛 A<br/>
                                    <br/>
                                    <br/>
                                </th>
                                <td/>
                                <td>Kubernetes 编排与管理专场</td>
                                <td> </td>
                            </tr>
                            <tr>

                                <td>13:30-14:00</td>
                                <td>Kubernetes 三周年背后的技术演进</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>14:00-14:30</td>
                                <td>基于 Kubernetes 的模板化应用编排</td>
                                <td> </td>
                            </tr>
                            <tr>
                                <td>14:30-15:00</td>
                                <td>Kubernetes 中的容器编排与应用编排</td>
                                <td> </td>
                            </tr>
                            <tr>
                                <td>15:00-15:30</td>
                                <td>Kubernetes 中基于策略的资源分配</td>
                                <td> </td>
                            </tr>
                            <tr>
                                <td>15:30-16:00</td>
                                <td>敬请期待</td>
                                <td> </td>
                            </tr>
                            <tr>
                                <td>16:00-16:15 </td>
                                <td>茶歇</td>
                                <td> </td>
                            </tr>
                            <tr>
                                <td/>
                                <td>Kubernetes 的优化与实践</td>
                                <td> </td>
                            </tr>
                            <tr>
                                <td>16:20-16:50</td>
                                <td>Kubernetes 容器运行时演进</td>
                                <td>倪朋飞 微软 Senior Software Engineer</td>
                            </tr>
                            <tr>
                                <td>16:50-17:20</td>
                                <td>使用 Kubernetes 加速定制化私有云管理组件的集成</td>
                                <td>喻涵 中国移动杭州研发中心 云平台架构师</td>
                            </tr>
                            <tr>
                                <td>17:20-17:50</td>
                                <td>Kubernetes + GPU 需求及功能实现</td>
                                <td> </td>
                            </tr>
                           
                            <tr>
                                <td>17:50-18:10</td>
                                <td>圆桌论坛</td>
                                <td> </td>
                            </tr>
                            <tr>
                                <th rowSpan={11}>
                                    技术分论坛 B<br/>
                                </th>
                                <td>13:30-14:00</td>
                                <td>敬请期待</td>
                                <td>华为</td>
                            </tr>
                            <tr>
                                <td>14:00-14:30</td>
                                <td>敬请期待</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>14:30-15:00</td>
                                <td>敬请期待</td>
                                <td> </td>
                            </tr>
                            <tr>
                                <td>15:00-15:30</td>
                                <td>敬请期待</td>
                                <td> </td>
                            </tr>
                            <tr>
                                <td>15:30-16:00 </td>
                                <td>敬请期待</td>
                                <td> </td>
                            </tr>
                            <tr>
                                <td>16:00-16:15 </td>
                                <td>茶歇</td>
                                <td> </td>
                            </tr>
                            <tr>
                                <td/>
                                <td>Kubeflow 应用及落地</td>
                                <td> </td>
                            </tr>
                            <tr>
                                <td>16:20-16:50</td>
                                <td>敬请期待</td>
                                <td> </td>
                            </tr>
                            <tr>
                                <td>16:50-17:20</td>
                                <td>敬请期待</td>
                                <td> </td>
                            </tr>
                            <tr>
                                <td>17:20-17:50</td>
                                <td>敬请期待</td>
                                <td> </td>
                            </tr>
                            <tr>
                                <td>17:50-18:10</td>
                                <td>圆桌论坛</td>
                                <td> </td>
                            </tr>
                            <tr>
                                <th/>
                                <td>18:30-20:00</td>
                                <td>晚宴</td>
                                <td> </td>
                            </tr>
                            </tbody>
                        </table>
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
