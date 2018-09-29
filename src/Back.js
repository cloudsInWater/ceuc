import React , { Component } from 'react';
import './back.less'
import china1 from "./img/china.png";
import china2 from "./img/china2.png";
import orange from './img/orange.png'
import left from './img/lefttran.png'
import bian from './img/bian.png'
import pai from './img/pai.png'
import title1 from './img/lb.png'
import title2 from './img/lba.png'
import imga from './img/reop1.png'
import imgb from './img/repo2.png'
import imgc from './img/repo3.png'
import imgd from './img/newa.png'
import topss from './img/topss.png'
import btn from './img/btn.png'
import zhu1 from './img/zhu1.jpg'
import zhu2 from './img/zhu2.jpg'
import zhu3 from './img/zhu4.jpg'
import zhu4 from './img/zhu5.jpg'
import zhu5 from './img/zhu6.JPG'
import zhu6 from './img/zhu7.JPG'
import zhu7 from './img/zhu8.JPG'
import zhu8 from './img/zhu9.JPG'
import hang1 from './img/hang1.JPG'
import hang2 from './img/hang2.JPG'
import hang3 from './img/hang3.JPG'
import hang4 from './img/hang4.JPG'
import hang5 from './img/hang5.JPG'
import hang6 from './img/hang6.png'
import hang7 from './img/hang7.png'
import pai1 from './img/pai1.JPG'
import pai2 from './img/pai2.JPG'
import pai3 from './img/pai3.JPG'
import pai4 from './img/pai4.JPG'
import pai5 from './img/pai5.JPG'
import pai6 from './img/pai6.jpg'
import pai7 from './img/pai7.JPG'
import pai8 from './img/pai8.jpg'
import yuan1 from './img/yuan1.JPG'
import yuan2 from './img/yuan2.JPG'
import yuan3 from './img/yuan3.JPG'
import yuan4 from './img/yuan4.JPG'
import yuan5 from './img/yuan5.JPG'
import yuan6 from './img/yuan6.JPG'
import yuan7 from './img/yuan7.JPG'
function Videos(props){

    return (
        <div className={(props.id+1)%4===0?'who-what-title no-right':'who-what-title '}>
            <div className="who-what" >
                <img src={props.pic} className="what-i" alt=""/>
                <img className="btn" src={btn} alt="" onClick={props.cli} />
            </div>
            <div className='who-title'>
                <h2>{props.title}</h2>
                {props.titles?<h2>{props.titles}</h2>:''}
                <h3>{props.who}</h3>
                <h3>{props.whos}</h3>
            </div>
        </div>
    )
}
function Seedio(props){
    console.log(props.videos)
    return(
        <div className="video-show">
            <span className="go-out" onClick={props.cli}></span>
            <video  src={props.videos} width="78%" preload="none" controlsList="nodownload" loop="" controls webkit-playsinline="true"></video>
        </div>
    )
}
export default class Back extends Component{
    constructor(props){
        super(props);
        this.state={
            zhu:[
                {pic:zhu1,id:0,http:'http://bucket.k8smeetup.com/upfile_1538124618992.mp4',title:'《How Good Is Your Code？》',titles:'',who:'Dan Kohn ',whos:'CNCF 执行董事'},
                {pic:zhu2,id:1,http:'http://bucket.k8smeetup.com/upfile_1538124693029.mp4',title:'云原生的崛起',titles:'——企业的开源创新之路',who:'任道远  ',whos:'VMware 中国研发中心总经理'},
                {pic:zhu3,id:2,http:'http://bucket.k8smeetup.com/upfile_1538124763929.mp4',title:'筚路蓝缕，不忘初心',titles:'——华为云容器思考与实践分享',who:'方璞',whos:'华为云容器服务域产品总监'},
                {pic: zhu4,id:3,http:'http://bucket.k8smeetup.com/upfile_1538124808153.mp4',title:'社区 2018 年度数据与项目回顾',titles:'',who:'韩佳瑶 ',whos:'才云科技 COO & CNCF 官方中国大使'},
                {pic: zhu5,id:4,http:'http://bucket.k8smeetup.com/upfile_1538124849994.mp4',title:'智能时代数字化转型的启示',titles:'',who:'徐明强  ',whos:'微软全渠道事业部首席技术官'},
                {pic: zhu6,id:5,http:'http://bucket.k8smeetup.com/upfile_1538124967495.mp4',title:'完整微服务技术栈的',titles:'定义和实践探索',who:'陈谔',whos:'网易云副总经理'},
                {pic: zhu7,id:6,http:'http://bucket.k8smeetup.com/upfile_1538125007639.mp4',title:'企业容器云新时期：',titles:'更高 - 更快 - 更强',who:'杜宁',whos:'才云科技 CGO'},
                {pic: zhu8,id:7,http:'http://bucket.k8smeetup.com/upfile_1538125051373.mp4',title:'AI for Everyone',titles:'',who:'李锐 ',whos:'谷歌开发者生态中国区负责人'},
            ],
            hang:[
                {pic: hang1,id:0,http:'http://bucket.k8smeetup.com/upfile_1538125073878.mp4',title:'中国银联的容器探索之旅',titles:'',who:'庞筱筱 ',whos:'才云科技售前解决方案架构师'},
                {pic: hang2,id:1,http:'http://bucket.k8smeetup.com/upfile_1538125111526.mp4',title:'金融行业智能化转型实践',titles:'',who:'高鹏程',whos:'七牛云首席云计算架构师'},
                {pic: hang3,id:2,http:'http://bucket.k8smeetup.com/upfile_1538125166644.mp4',title:'唯品会容器化 AI 平台案例分享',titles:'',who:'李望 ',whos:'才云科技资深解决方案架构师'},
                {pic: hang4,id:3,http:'http://bucket.k8smeetup.com/upfile_1538125217001.mp4',title:'微服务框架在多个行业的架构设计',titles:'与落地实践',who:'刘超',whos:'网易云解决方案总架构师'},
                {pic: hang5,id:4,http:'http://bucket.k8smeetup.com/upfile_1538125277167.mp4',title:'锦江集团容器业务平台落地实践',titles:'',who:'刘康',whos:'才云科技资深解决方案架构师'},
                {pic: hang6,id:5,http:'http://bucket.k8smeetup.com/upfile_1538125315355.mp4',title:'海尔集团容器云平台建设',titles:'经验及思考',who:'郭辉 ',whos:'才云科技项目经理'},
                {pic: hang7,id:6,http:'http://bucket.k8smeetup.com/upfile_1538125339045.mp4',title:'电力行业 AI 场景分享',titles:'',who:'王斌峰 ',whos:'才云科技解决方案架构师'},
            ],
            pai:[
                {pic: pai1,id:0,http:'http://bucket.k8smeetup.com/upfile_1538125392723.mp4',title:'单机精细化调度在离线混部及',titles:'零成本支持大促的实践',who:'张晓宇',whos:'阿里巴巴技术专家'},
                {pic: pai2,id:1,http:'http://bucket.k8smeetup.com/upfile_1538125434579.mp4',title:'Kubernetes 的扩展性：',titles:'大道至简，道法自然',who:'赵相鹏 ',whos:'中兴通讯软件工程师'},
                {pic: pai3,id:2,http:'http://bucket.k8smeetup.com/upfile_1538125501178.mp4',title:'Kubernetes 在容器混合云领域的',titles:'实践与发展',who:'王泽锋',whos:'华为云 K8S 开源负责人'},
                {pic: pai4,id:3,http:'http://bucket.k8smeetup.com/upfile_1538125543847.mp4',title:'如何打造百万级容器技术',titles:'',who:'孙宏亮 ',whos:'阿里巴巴技术专家'},
                {pic: pai5,id:4,http:'http://bucket.k8smeetup.com/upfile_1538125575746.mp4',title:'Kubernetes 容器运行时演进',titles:'',who:'倪朋飞',whos:'微软 Senior Software Engineer'},
                {pic: pai6,id:5,http:'http://bucket.k8smeetup.com/upfile_1538125617063.mp4',title:'Introduction to Serverless',titles:'Kubernetes',who:'张维 ',whos:'阿里巴巴高级技术专家'},
                {pic: pai7,id:6,http:'http://bucket.k8smeetup.com/upfile_1538125668851.mp4',title:'使用 Kubernetes 加速定制化私有',titles:'云管理组件的集成',who:'喻涵 ',whos:'中国移动杭州研发中心云平台架构师'},
                {pic: pai8,id:7,http:'http://bucket.k8smeetup.com/upfile_1538125711376.mp4',title:'Kubernetes 在不同客户场景下的',titles:'网络方案实践',who:'王必成 ',whos:'网易云资深解决方案架构师'},
            ],
            shi:[
                {pic: yuan1,id:0,http:'http://bucket.k8smeetup.com/upfile_1538125764002.mp4',title:'基于 Kubernetes 的 FaaS 平台开',titles:'源实现——Kubeless 的应用实践',who:'李志伟',whos:'当当网架构部负责人'},
                {pic: yuan2,id:1,http:'http://bucket.k8smeetup.com/upfile_1538125798770.mp4',title:'构建云原生仓库',titles:'——CNCF 项目 Harbor',who:'王岩',whos:'VMware 高级工程师'},
                {pic: yuan3,id:2,http:'http://bucket.k8smeetup.com/upfile_1538125910981.mp4',title:'Kubernetes 与 Dubbo 结合的优',titles:'化与实践之路',who:'朱显杰 ',whos:'微医数据总监'},
                {pic: yuan4,id:3,http:'http://bucket.k8smeetup.com/upfile_1538125963125.mp4',title:'Istio 微服务管理平台加速微服务的',titles:'云原生转型',who:'章鑫  ',whos:'华为云微服务平台高级工程师'},
                {pic: yuan5,id:4,http:'http://bucket.k8smeetup.com/upfile_1538126016657.mp4',title:'无人驾驶场景下 Kubeflow 的应用',titles:'以及开发',who:'薛磊 ',whos:'Momenta 资深研发工程师'},
                {pic: yuan6,id:5,http:'http://bucket.k8smeetup.com/upfile_1538126092620.mp4',title:'腾讯企业容器云平台 GaiaStack ',titles:'实践',who:'罗韩梅 ',whos:'腾讯高级工程师'},
                {pic: yuan7,id:6,http:'http://bucket.k8smeetup.com/upfile_1538126147592.mp4',title:'基于 Kubernetes 的区块链',titles:'服务平台',who:'彭靖田 ',whos:'了得研究院首席科学家'},
            ],
            show:false,
            videos:'http://bucket.k8smeetup.com/upfile_1538126432585.mp4',
            zhu1:zhu1,
            home:'http://bucket.k8smeetup.com/upfile_1538126432585.mp4'
            
        }
    }
    closeSpan=()=>{
        this.setState({
            show:false
        })
    }
    showDio=(what)=>{
        this.setState({
            show:true,
            videos:what
        })
    }
    render(){
        return(
            <div>
                <div className="top">
                    <div className="left">
                        <div className="ico"/>
                    </div>
                    
                    <div className="text">
                        <img src={china1} alt=""/>
                        <img className="china2" src={china2} alt=""/>
                    </div>
                </div>
                {/* welcome */}
                <div className="welcome2018">
                    <div className="welcome20">
                        <h1>WELCOME CEUC 2018</h1>
                    </div>
                    <div className="welcome18">
                        <img className="img" src={topss} alt="" />
                        <img className="btn" src={btn} alt="" onClick={()=>this.showDio(this.state.home)}/>
                        <img className="orange" src={orange} alt="" />
                    </div>
                </div>
                {/* 主论坛 */}
                <div className="zhu">
                    <h1 className="big-title">主论坛</h1>
                    {this.state.zhu.map(t=>(
                        <Videos  who={t.who} title={t.title} key={t.id} id={t.id} whos={t.whos} titles={t.titles} pic={t.pic} cli={()=>this.showDio(t.http)}></Videos>
                    ))}
                </div>
                <div className="hang">
                    <img className="hang-left" src={left} alt="" />
                    <div className="zhu zhu-relative">
                        <h1 className="big-title">行业落地案例分论坛</h1>
                        {this.state.hang.map(t=>(
                            <Videos who={t.who} title={t.title} key={t.id} id={t.id} whos={t.whos} titles={t.titles} pic={t.pic} cli={()=>this.showDio(t.http)} ></Videos>
                        ))}
                    </div>
                </div>
                <div className="bianpai"> 
                    <img className="b-bian" src={bian} alt="" />
                    <img className="b-pai" src={pai} alt="" />
                    <div className="zhu zhu-relative">
                        <h1 className="big-title">Kubernetes 编排与优化专场</h1>
                        {this.state.pai.map(t=>(
                            <Videos  who={t.who} title={t.title} key={t.id} id={t.id}  whos={t.whos} titles={t.titles} pic={t.pic} cli={()=>this.showDio(t.http)}></Videos>
                        ))}
                    </div>     
                </div>
                <div className="hang">
                    <div className="zhu zhu-relative">
                        <h1 className="big-title">云原生应用与实践专场</h1>
                        {this.state.shi.map(t=>(
                            <Videos who={t.who} title={t.title} key={t.id} id={t.id}  whos={t.whos} titles={t.titles} pic={t.pic} cli={()=>this.showDio(t.http)} ></Videos>
                        ))}
                    </div>
                </div>
                {/* 新闻报道 */}
                <div className="news-repo">
                        <div className="news-view">
                            <div className="view-title">
                                <h1>大会新闻报道</h1>
                                <img className="title-a" src={title1} alt="" />
                                <img className="title-b" src={title2} alt="" />
                            </div>
                            <div className="view-img">
                                <img className="img-a" src={imga} alt="" />
                                <img className="img-b" src={imgb} alt="" />
                                <img className="img-c" src={imgc} alt="" />
                                <img className="img-d" src={imgd} alt="" />
                            </div>
                        </div>
                        <div className="news-items">
                            <div className="news-de">
                                <div className="news-de-a">
                                    <h1>云原生赋能AI · 我们不一样</h1>
                                    <span>
                                        <span>涛哥   </span>
                                        <span>中国云报</span>
                                    </span>
                                </div>
                                <div className="news-de-b">
                                    <p>“云原生”，第一次听到这个名词，就感觉它很“酷”，隐隐地却又注定将带动一股潮流。随着云原生被提及的频率越来越高，甚至云原生有了自己的基金会CNCF（Cloud Native Computing Foundation），云原生就不仅仅是一种构建和运行应用程序的新方法，而是一种有生命力的文化。</p>
                                    <p> CNCF第6次社区调查结果显示：自2017年12月以来，云原生技术在生产环境中的使用量平均增长了200%以上。以Kubernetes和Kube-flow为代表的云原生技术让云原生从一个模糊的概念，成长为通用技术。无论是 Google、微软、IBM这些国际巨头，还是阿里巴巴、腾讯、百度、当当网等国内互联网大厂都将云原生技术项目作为自己的技术重心。</p>
                                </div>
                                <div className="news-de-c"><a rel="noopener noreferrer"  target="_blank" href="https://mp.weixin.qq.com/s/eIvt9BuD1cSOggrswjFmTw">阅读全文 ></a></div>
                            </div>
                            <div className="news-de">
                                <div className="news-de-a">
                                    <h1>对话 17 位技术大咖：颠覆与突破，重新定义云原生</h1>
                                    <span>
                                        <span>云头条  </span>
                                        <span>9月7日</span>
                                    </span>
                                </div>
                                <div className="news-de-b">
                                    <p>2013 年 Matt Stine 提出了云原生（Cloud Native ）的概念，它首先作为一个思想的集合出现在大众视野。云原生既包含技术（微服务，敏捷基础设施），也包含管理（DevOps，持续交付，康威定律，重组等）。云原生计算基金会（CNCF）的出现更是让云原生技术变得具体，可触碰。</p>
                                    <p>当很多人对云原生的认识还停留在神秘概念的时候，技术大牛已经把云原生玩得风生水起，他们努力让技术应用落地，让云原生收割了大量的注意力和好感度，也成了云原生日益普及的有力注解。</p>
                                    <p> 我们找到了其中一些在云原生领域颇有建树的技术大咖，问了他们几个关于云原生的问题。那些玩转云原生技术的大咖究竟怎么定义云原生？他们印象最深刻的落地案例是什么？接下来要用云原生技术改变什么？接下来，让我们听他们说。</p>
                                </div>
                                <div className="news-de-c"><a  target="_blank" rel="noopener noreferrer" href="https://mp.weixin.qq.com/s?__biz=MjM5MzM3NjM4MA==&mid=2654693605&idx=3&sn=65af1b2b296d2bc4495c90fd3bb63999&chksm=bd5839f68a2fb0e0f97d0212dc63413d8ee7446c0614b5b0741f09cd30bfe4038e05a243e37a&scene=38#wechat_redirect">阅读全文 ></a></div>
                            </div>
                            <div className="news-de">
                                <div className="news-de-a">
                                    <h1>才云 Caicloud 步履不停，与云原生先行者携手同行</h1>
                                    <span>
                                        <span>美通社  </span>
                                        <span>9月20日 </span>
                                    </span>
                                </div>
                                <div className="news-de-b">
                                    <p>杭州2018年9月20日电 /美通社/ -- 在初秋的暑气与阵阵小雨的交织激荡中，在云原生领域精英与业界领袖的见证参与下，由才云科技（Caicloud）、“K8sMeetup 中国社区”、“Kubeflow 中国社区”联合主办的 2018 中国云原生用户大会（2018 CEUC）于 9 月 16 日在杭州正式开幕。</p>
                                    <p> 作为中国最具影响力和前沿性的云原生领域技术大会，2018 CEUC 大会云集了超过 1000 名在云原生领域享有盛誉的技术专家、云原生技术落地企业代表、以及众多云原生技术开发者。同时，还有超过万名来自全国各地关注云原生领域的开发者、行业从业者、技术爱好者，通过观看在线直播的方式，观看本次盛会。</p>
                                </div>
                                <div className="news-de-c"><a href="https://www.prnasia.com/story/223372-1.shtml"  target="_blank" rel="noopener noreferrer">阅读全文 ></a></div>
                            </div>
                            <div className="news-de">
                                <div className="news-de-a">
                                    <h1>2018 CEUC |才云为企业 AI 赋能，助力云上巅峰</h1>
                                    <span>
                                        <span>凤凰网浙江综合</span>
                                        <span>  9月25日 </span>
                                    </span>
                                </div>
                                <div className="news-de-b">
                                    <p>近两年，云原生逐渐变成人们谈论的焦点话题。但究竟什么是云原生？云原生又给人们带来了什么便利？今天就让我们一起走进2018 中国云原生用户大会（CEUC），共同探讨云原生的前世今生。</p>
                                    <p> 云原生从概念提出到布道实践，如今对于大多数人仍然是一个陌生是概念。云原生究竟是什么？是在云上开一个账号？还是将企业IT 系统搬上云端？但这些其实都不是。</p>
                                    <p>云原生是帮助企业面对复杂的而又瞬息万变的互联网市场竞争环境下，能够轻易构造一个可扩展的、敏捷的、高弹性的、高稳定性的业务系统。</p>
                                </div>
                                <div className="news-de-c"><a href="https://v.qq.com/x/page/l070861vqz8.html" target="_blank" rel="noopener noreferrer">阅读全文 ></a></div>
                            </div>
                        </div>
                </div>

                {/* 视频 */}
                {this.state.show?<Seedio cli={this.closeSpan} videos={this.state.videos} />:''}
            </div>
        )
    }
}