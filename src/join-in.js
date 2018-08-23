import React  from 'react';
import china1 from "./img/china.png";
import china2 from "./img/china2.png";
import Bottom from './bottom';
export default class JoiniN extends React.Component {
    gozan = () => {
      window.open("http://www.huodongxing.com/event/8449630009800");
    };
    render(){
        return(
            <div className="ticket">
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
                <div className="ticket-detail">
                    <table>
                        <tbody>
                            <tr className="more-title">
                                <td rowSpan={20}>
                                    <h1>参会票 A </h1>
                                    <h2>（含午餐）</h2>
                                </td>
                            </tr>
                            <tr>
                                <th >
                                    <h3>早鸟票</h3>
                                    <h4>（Early-bird Registration）</h4>
                                    <h5>（7 月 21 日 - 9 月 9 日）</h5>
                                </th>
                                <td><span>168 元（$24）</span></td>
                            </tr>
                            <tr>
                                <th >
                                    <h3>标准票</h3>
                                    <h4>（Standard Registration）</h4>
                                    <h5>（9 月 9 日 - 9 月 15 日）</h5>
                                </th>
                                <td><span>358 元（$51）</span></td>
                            </tr>
                            <tr>
                                <th >
                                    <h3>现场票</h3>
                                    <h4>（Onsite Registration）</h4>
                                    <h5>（9 月 16 日）</h5>
                                </th>
                                <td><span>508 元（$73）</span></td>
                            </tr>
                            <tr >
                                <th>
                                    <h3>团体票</h3>
                                    <h4>（Group Registration）</h4>
                                    <h5>（7 月 21 日 - 9 月 15 日）</h5>
                                </th>
                                <td className="table-both">
                                
                                    <span>两人行 300 元（$43）</span>
                                    <span>三人行 420 元（$60）</span>
                                </td>
                                                               
                               
                            </tr>
                            <tr>
                                <th>
                                    <h3>学生票</h3>
                                    <h4>（Student Registration）</h4>
                                    <h5>（7 月 21 日 - 9 月 15 日）</h5>
                                </th>
                                <td className="table-both">
                                    <span>一人行 68 元（$10）</span>
                                    <span>两人行 100 元（$14）</span>
                                </td>
                                
                            </tr>
                            
                        </tbody>
                    </table>

                    <table>
                        <tbody>
                            <tr className="more-title">
                                <td rowSpan={4}>
                                    <h1>参会票 B</h1>
                                    <h2>（培训票，含午餐）</h2>
                                    <p>含「参会票 A」所有权益，名额仅限 50 席，先到先得</p>
                                </td>
                            </tr>
                            <tr>
                                <th >
                                    <h3>K8S Training 早鸟票</h3>
                                    <h4>（Early-bird Registration）</h4>
                                    <h5>（7 月 21 日 - 9 月 9 日）</h5>
                                </th>
                                <td><span>980 元（$140）</span></td>
                            </tr>
                            <tr>
                                <th >
                                    <h3>标准票</h3>
                                    <h4>（Standard Registration）</h4>
                                    <h5>（9 月 9 日 - 9 月 15 日）</h5>
                                </th>
                                <td><span>1580 元（$225）</span></td>
                            </tr>
                        </tbody>
                    </table>
                    <table>
                    <tbody>
                        <tr className="more-title">
                            <td rowSpan={4}>
                                <h1>VIP 票</h1>
                                <h2>（含午餐）</h2>
                                <p>含「参会票 A」所有权益，前排贵宾席座位， 9 月 16 日 VIP 晚宴一位，有机会与 CNCF 上游社区，大会演讲嘉宾，行业客户贵宾近距离接触交流。</p>
                            </td>
                        </tr>
                        <tr>
                            <th >
                                <h3>早鸟票</h3>
                                <h4>（Early-bird Registration）</h4>
                                <h5>（7 月 21 日 - 9 月 9 日）</h5>
                            </th>
                            <td><span>1080 元（$154）</span></td>
                        </tr>
                        <tr>
                            <th >
                                <h3>标准票</h3>
                                <h4>（Standard Registration）</h4>
                                <h5>（9 月 9 日 - 9 月 15 日）</h5>
                            </th>
                            <td><span>1980 元（$282）</span></td>
                        </tr>
                    </tbody>
                </table>
                </div>
                <div className="gowhere" onClick={this.gozan}>我要报名 >>></div>
                <Bottom></Bottom>
            </div>
        )

    }
}