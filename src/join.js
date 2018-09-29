import React from "react";
import './join.less'
// import dnImg from "./img/dn.png";
import dengImg1 from "./img/tr2.jpeg";
import dengImg2 from "./img/tr3.png";
import li from "./img/li.png";
import zhao from "./img/zhao.png";
import gao from "./img/gao.png";
// import cncfImg from "./img/cncf.png";
import dengImg from "./img/deng.png";
// import niImg from "./img/ni.png";
import Bottom from "./bottom";
import china1 from "./img/china.png";
import china2 from "./img/china2.png";
import dd1 from "./img/liuchao.png";
import dd2 from "./img/guohui.png";
import dd3 from "./img/wangyan.png";
import dd4 from "./img/zhangxiaoyu.png";
import dd5 from "./img/lei.png";
import dd6 from "./img/zhuxiejie.png";
import dd7 from "./img/wangbinfeng.png";
import dd8 from "./img/hanmei.png";
import dd9 from "./img/pengjintian.png";
import dda from "./img/sunhongliang.jpeg";
import ddb from "./img/wangbicheng.png";
import ddc from "./img/pang.jpg";
import ddli from "./img/liwang.jpeg";
import ddliu from "./img/liukang.jpeg";
import ddgao from "./img/gaoxianglin.jpg";
import ddwa from "./img/wangze.jpeg";
import ddzai from "./img/zairen.jpg";
import ddzhang from "./img/zhangmin.png";
// import a1 from "./img/a1.png";
// import a2 from "./img/a2.png";
// import b1 from "./img/b1.png";
import bottoma from "./img/bottom.png";
import c1 from "./img/c1.png";
import c2 from "./img/c2.png";
import hy1 from './img/hy1.png'
// import hy2 from './img/hy2.png'
import hy3 from './img/hy3.png'
import hy4 from './img/hy4.png'
// import hy5 from './img/hy5.png'
export default class Join extends React.Component {
    state = {
        pic1 : ["big","small","small","small","small"],
        pic:[ "big","small","small","small","small"],
        pic2:["big","small","small","small","small"],
        picc:["big","small","small","small","small","small"]
    };

    componentWillMount() {
        window.scrollTo(0, 0);
    }

    animate = (e,number,pica) => {
        let pic = ["small","small","small","small","small","small"];
        pic[number]="big";
        this.setState({
            [pica]:pic
        });
    };
    

    render() {
        // const { pic,pic2,pic1,picc} = this.state;
        // const { pic,picc,pic1} = this.state;
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
                            曾为美国谷歌资深软件工程师，并 6 次获得谷歌副总裁和总监颁发的即时奖励。 曾作为技术带头人从事谷歌容器化集群管理系统的研发，自动化管理 95% 以上的谷歌数据中心服务器。美国卡内基梅隆大学（CMU）获得计算机博士学位，期间在分布式系统和网络安全领域的顶级国际会议发表学术论文数十篇，被引用上千次；研究成果曾被美国 Economist、英国 BBC、瑞士 RTS 电视台等国际媒体报道。曾获杭州市“特聘专家”、浙江“千人计划”特聘专家。
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
                            主管 VMware 云原生领域的容器管理平台、Kubernetes 及物联网、区块链、机器学习等创新项目的研发。他主管的 Harbor 开源镜像仓库成为中国第一个 CNCF 托管项目，主管的开源项目 Cloud Foundry 是 Pivotal 的旗舰产品，他还曾主管世界领先的软件定义存储及超融合项目 vSAN 的研发。
                            </div>
                        </div>
                    </div>
                    <div className="fourth">
                        <div className="image fang"/>
                        <div className="right"/>
                        <div className="text fang-text">
                            <div className="name">
                            方璞<br/>
                                <span className="job">华为云 容器域产品总监</span>
                            </div>
                            <div className="introduce">
                            负责华为云全栈容器服务产品（云容器引擎、云容器实例、容器镜像、应用编排、Istio微服务网格等）研发、竞争力构建、商业成功。
                            </div>
                        </div>
                    </div>
                    <div className="third">
                        <div className="image xu"/>
                        <div className="bg xu-bg"/>
                        {/* <div className="bottom"/> */}
                        <div className="right"/>
                        <div className="text xu-text">
                            <div className="name">
                                徐明强<br/>
                                <span className="job">微软 全渠道事业部首席技术官（CTO）</span>
                            </div>
                            <div className="introduce">
                            徐明强博士目前担任微软全渠道事业部首席技术官，负责微软大中华区合作伙伴解决方案策略技术策划工作。徐明强的团队侧重现代工作空间、数据和人工智能、业务应用、云基础设施及应用领域，为合作伙伴提供架构上的支撑。
                            </div>
                        </div>
                    </div>
                    <div className="fourth">
                        <div className="image han"/>
                        <div className="bg han-bg"/>
                        {/* <div className="bottom"/> */}
                        <div className="text han-text">
                            <div className="name">
                                韩佳瑶<br/>
                                <span className="job">才云科技（Caicloud）COO & CNCF 官方中国大使</span>
                            </div>
                            <div className="introduce">
                            2013 年毕业于美国匹兹堡大学，获艺术史学博士学位；2016 年获美国匹兹堡大学信息技术科学硕士。2004 年毕业于复旦大学文物与博物馆学系，并辅修复旦大学法学专业。擅长软件产品创意、软件开发管理、用户体验以及客户关系开拓和维护。K8sMeetup 中国社区创始人；Kubernetes 官方社区中文项目 leader；中国云原生用户大会（CEUC）创始人；容器国际会议 KubeCon 核心委员会成员。
                            </div>
                        </div>
                    </div>
                    <div className="third">
                        <div className="image li"/>
                        <div className="bg li-bg"/>
                        <div className="text">
                            <div className="name">
                                李锐<br/>
                                <span className="job">谷歌 Developer Relations Program Manager</span>
                            </div>
                            <div className="introduce">
                            主要从事 TensorFlow，机器学习方面工作。加入谷歌之前，就职于 Microsoft Research Asia Outreach，任 Senior Research Program Manager, 主要负责 OpenAI 平台， Microsoft Academic, Azure for Research 以及其他在亚洲的研究项目。
                            </div>
                        </div>
                    </div>
                    <div className="fourth">
                        <div className="image du"/>
                        <div className="bg du-bg"/>
                        {/* <div className="bottom"/> */}
                        <div className="text ">
                            <div className="name">
                            杜宁<br/>
                                <span className="job">才云科技（Caicloud) CGO</span>
                            </div>
                            <div className="introduce">
                            16 年 IT/CT/DT 从业经验，曾于多家跨国公司、创业公司任技术管理职务。获多项国际认证的云计算解决方案专家，擅长 IaaS、PaaS 技术，深度学习大数据解决方案等。中国开源容器技术著名认证培训专家和布道师。
                            </div>
                        </div>
                    </div>
                    <div className="third">
                        <div className="image chen"/>
                        <div className="bg chenb"/>
                        <div className="bottom"/>
                        <div className="text chenc">
                            <div className="name">
                                陈谔<br/>
                                <span className="job">网易云 副总经理</span>
                            </div>
                            <div className="introduce">
                            现负责网易云计算平台产品线建设，对内主导公司软件基础设施云化改造，建设网易私有云将网易互联网产品线迁入私有云环境，对外打造云计算产品与解决方案，实践网易云计算战略。
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

                <div className="guest-list">
                    <div className="tran-left">
                        <img src={c1} alt=""/>
                        <img src={c2} alt=""/>
                    </div>
                    <img className="tran-right" src={bottoma} alt=""/>                    

                    <div className="guest-all">
                        <div className="guest-one">
                            <div className="guest-one-img">
                                <img src={dengImg} alt=""/>
                            </div>
                            <div className="guest-one-detail">
                                <h1>邓德源</h1>
                                <h3>才云科技（Caicloud) CTO</h3>
                                <div>

                               
                                <p>曾为美国谷歌集群管理组核心成员，主要参与开发集群管理系统。曾作为核心成员参加开发基于容器集群的谷歌开源项目（Kubernetes），一度成为全球前十的贡献者和贡献最高的华人。</p>
                            </div> </div>
                        </div>
                        <div className="guest-one">
                            <div className="guest-one-img guest-one-img-big">
                                <img src={dengImg1} alt=""/>
                            </div>
                            <div className="guest-one-detail">
                                <h1>马达</h1>
                                <h3>IBM 软件架构师</h3>
                                <div>
                                    
                                
                                <p>Kubernetes Maintainer，SIG-Scheduling co-Leader, IBM 中国系统部软件架构师；吉林大学硕士毕业，主修网格计算，分布式计算；毕业后加入 IBM，专注于集群管理、资源及作业调度，服务治理等，在分布式领域有超过十年的工作经验。</p>
                            </div></div>
                        </div>
                        <div className="guest-one">
                            <div className="guest-one-img guest-one-img-big">
                                <img src={dengImg2} alt=""/>
                            </div>
                            <div className="guest-one-detail">
                                <h1>熊中哲</h1>
                                <h3>沃趣科技 VP of Engineering</h3>
                                <div>
                                <p>曾就职于阿里巴巴，期间推动了数据库运维自动化工作，设计研发了基于 Oracle 的高可用软件，广泛使用在生产环境，并以第一专利人获得集团 A 类专利，曾参与阿里云 RDS 的开发工作。2012 年作为联合创始人创办沃趣科技, 负责产品和研发工作。专注于开放的硬件技术（x86， Flash，Infiniband，RDMA）和软件技术（Kubernetes，Docker，Kafka，Etcd，分布式文件系统），并以架构师和程序员的角色参与了公司所有产品的架构设计和研发工作。</p>
                            </div></div>
                        </div>
                        {/* <div className="guest-one">
                            <div className="guest-one-img">
                                <img src={cncfImg} alt=""/>
                            </div>
                            <div className="guest-one-detail">
                                <h1>Keith Chan</h1>
                                <h3>CNCF 中国区总裁</h3>
                                <div>
                                <p>Linux Foundation APAC 战略规划总监，为 Linux Foundation 在大中华区推广开源。</p>
                            </div></div>
                        </div> */}
                        <div className="guest-one">
                            <div className="guest-one-img guest-one-img-biga">
                                <img src={ddzai} alt=""/>
                            </div>
                            <div className="guest-one-detail">
                                <h1>万仔仁 </h1>
                                <h3>阿里巴巴 高级开发工程师</h3>
                                <div>
                                    <p>阿里巴巴系统软件部高级研发工程师，负责阿里巴巴开源容器技术 PouchContainer 研发和技术推广。</p>
                                </div>
                            </div>
                        </div>
                        <div className="guest-one">
                            <div className="guest-one-img guest-one-img-big">
                                <img src={ddzhang} alt=""/>
                            </div>
                            <div className="guest-one-detail">
                                <h1>张敏   </h1>
                                <h3>阿里巴巴 技术专家</h3>
                                <div>
                                    <p>目前负责阿里巴巴容器技术 PouchContainer 在内部场景的落地，把握容器的存储和网络方向的技术演进，负责容器的计算存储分离技术。曾就职于华为从事虚拟化底层技术的开发，负责 Xen/KVM 上虚拟化存储技术的演进，曾多次在 libvirt/qemu/linux kernel 社区提交功能增强和性能优化的相关补丁。数年来一直从事云计算领域，研究方向主要是从底层到上层，从 IaaS 到 PaaS，从虚拟化到容器技术。</p>
                                </div>
                            </div>
                        </div>
                        <div className="guest-one">
                            <div className="guest-one-img guest-one-img-big">
                                <img src={ddc} alt=""/>
                            </div>
                            <div className="guest-one-detail">
                                <h1>庞筱筱</h1>
                                <h3>才云科技（Caicloud)</h3>
                                <h3>售前解决方案架构师</h3>
                                <div>
                                <p>专注于云计算行业，对容器管理技术、企业私有云建设等有一定的经验和积累。</p>
                            </div> </div>
                        </div>
                        {/* one */}
                        <div className="guest-one">
                            <div className="guest-one-img">
                                <img src={gao} alt=""/>
                            </div>
                            <div className="guest-one-detail">
                                <h1>高鹏程</h1>
                                <h3>七牛云 首席云计算架构师</h3>
                                <div>
                                <p>现就职于七牛云，任职 七牛云 云计算产品 首席云计算架构师。负责七牛云企业级云计算产品 大型企业、行业客户的应用场景解决方案规划。多年企业客户技术服务经验，曾就职于 Cloudstack 、Microsoft China（微软中国）等公司负责云计算相关产品，参与过多个集团公司的KA项目咨询与项目规划，对不同行业的企业客户上云方式、业务架构有着丰富的经验。曾参与规划过国有银行、运营商、证券等大规模私有云集群的云计算项目建设，有丰富的云计算产品架构设计与企业客户服务经验。</p>
                            </div></div>
                        </div>
                        <div className="guest-one">
                            <div className="guest-one-img guest-one-img-big">
                                <img src={ddli} alt=""/>
                            </div>
                            <div className="guest-one-detail">
                                <h1>李望</h1>
                                <h3>才云科技 资深解决方案架构师</h3>
                                <div>
                                <p>15 年 IT 从业经验，在数据通讯、银行、云计算等行业具有广泛的实践经验。主要负责系统架构总体设计和实施管理等工作。对设计、实施和运维等各方面均有独特的想法和理念。希望能通过技术进化，让更多人从繁杂的工作中解脱出来。</p>
                            </div></div>
                        </div>
                        <div className="guest-one">
                            <div className="guest-one-img">
                                <img src={dd1} alt=""/>
                            </div>
                            <div className="guest-one-detail">
                                <h1>刘超</h1>
                                <h3>网易云 解决方案总架构师</h3>
                                <div>
                                <p>毕业于上海交通大学，15 年云计算领域研发及架构经验，先后在 EMC，CCTV证券资讯频道，HP，华为，网易从事云计算和大数据架构工作。曾出版《Lucene 应用开发揭秘》，极客时间专栏《趣谈网络协议》，多次作为邀请讲师参加 Dockone 容器技术大会，Segmentfault 开发者大会，InfoQ 全球架构师峰会（明星讲师），CSDN SDCC 大会，51CTO WOTA 大会等。知名技术博主，博客可搜索 popsuper1982，个人公众号《刘超的通俗云计算》，多篇文章推荐至全球最大IT社区 CSDN 首页及《程序员》杂志，在工作中积累了大量运营商系统，互联网金融系统，电商系统等容器化和微服务化经验。</p>
                            </div>  </div>
                        </div>

                        <div className="guest-one">
                            <div className="guest-one-img guest-one-img-biga">
                                <img src={ddliu} alt=""/>
                            </div>
                            <div className="guest-one-detail">
                                <h1>刘康</h1>
                                <h3>才云科技 资深解决方案架构师</h3>
                                <div>
                                    <p>云计算技术专家，多年技术方案咨询与云业务运维运营经验。熟悉多个行业的客户痛点和业务诉求，总结了大量的最佳实践经验，以期帮助客户获得成功，取得多方共赢的结果。</p>
                                </div>
                            </div>
                        </div>
                        <div className="guest-one">
                            <div className="guest-one-img">
                                <img src={dd2} alt=""/>
                            </div>
                            <div className="guest-one-detail">
                                <h1>郭辉</h1>
                                <h3>才云科技 项目经理</h3>
                                <div>
                                <p>毕业于中国计量大学，电器工程及自动化专业。2010~2015 年，先后就职于杭州恒生数字设备科技有限公司和浙江大华技术股份有限公司，担任高级嵌入式 linux 工程师，从事嵌入式linux驱动和应用开发；2015~2016 年，就职于浙江泰玄网络科技有限公司，主导公司容器云平台技术选择和开发建设工作；2016~至今，就职于杭州才云科技有限公司，先后担任解决方案架构师和项目经理。负责才云科技容器云平台落地实施项目的管理工作。</p>
                            </div></div>
                        </div>
                        <div className="guest-one">
                            <div className="guest-one-img">
                                <img src={dd7} alt=""/>
                            </div>
                            <div className="guest-one-detail">
                                <h1>王斌峰</h1>
                                <h3>才云科技 解决方案架构师</h3>
                                <div>
                                <p>5 年电力行业从业经验，历任项目研发、项目经理、咨询顾问岗位，参与电力需求响应产品研发，担任赫马家庭能源管理系统客户端组 Scrum Master；担任某省公司投资与统计一体化管理系统、国网基建进度计划管理系统、国网全口径全过程统计管理系统项目经理，参与国网大规划信息化评价、国网大规划“十三五”规划方案编制等工作。2 年云计算从业经验，历任项目研发、解决方案架构师，参与基于 Cloudify 的 CDE（云部署引擎）研发，目前，从事能源、零售、金融行业云计算售前咨询工作。</p>
                            </div></div>
                        </div>
                        <div className="guest-one">
                            <div className="guest-one-img">
                                <img src={dd4} alt=""/>
                            </div>
                            <div className="guest-one-detail">
                                <h1>张晓宇</h1>
                                <h3>阿里巴巴 技术专家</h3>
                                <div>
                                <p>阿里巴巴系统软件部，主要从事 Kubernetes 相关开发和 CNCF 社区生态建设。之前曾在中兴通讯担任系统软件产品高级开发工程师。</p>
                            </div>  </div>
                        </div>
                   {/* two */}
                        <div className="guest-one">
                            <div className="guest-one-img">
                                <img src={zhao } alt=""/>
                            </div>
                            <div className="guest-one-detail">
                                <h1>赵相鹏</h1>
                                <h3>中兴通讯 软件工程师</h3>
                                <div>
                                <p>中兴通讯软件工程师，自 2015 年下半年开始参与 Kubernetes 社区，现为 Kubernetes 和 Kubernetes-incubator 两个组织的成员。在 Kubernetes 项目主要关注网络、集群生命周期等领域，此外也在 test-infra 和 docs 有一定参与，以帮助社区提升贡献者体验。</p>
                            </div></div>
                        </div>
                        <div className="guest-one">
                            <div className="guest-one-img guest-one-img-big">
                                <img src={ddwa} alt=""/>
                            </div>
                            <div className="guest-one-detail">
                                <h1>王泽锋</h1>
                                <h3>华为云 K8S 开源负责人</h3>
                                <div>
                                    <p>华为云 PaaS 服务团队核心成员，专注于 PaaS 产品和容器开源社区，目前负责华为云在 K8S 社区贡献及 K8S 在华为云产品化落地的整体工作。曾主导负责社区亲和性/反亲和性等多项高级调度特性设计和开发。对 K8S 的设计有深入的见解。</p>
                                </div>
                            </div>
                        </div>
                        <div className="guest-one">
                            <div className="guest-one-img">
                                <img src={dda} alt=""/>
                            </div>
                            <div className="guest-one-detail">
                                <h1>孙宏亮</h1>
                                <h3>阿里巴巴 技术专家</h3>
                                <div>
                                <p>目前负责阿里巴巴容器技术 PouchContainer 的开源建设。曾在容器创业公司担任合伙人。数年来一直从事云计算领域，研究方向主要为 PaaS 以及容器等；是国内第一批研究和实践容器技术的工程师，在国内起到重要的主流容器技术技术布道作用。拥有个人著作《Docker 源码分析》，同时个人钟情开源，目前是 Docker Swarm 项目的全球 Maintainer，对 Docker 项目的代码贡献量全球前 25，并对容器生态中其他诸多项目的发展有着突出的贡献。</p>
                            </div> </div>
                        </div>
                        <div className="guest-one">
                            <div className="guest-one-img">
                                <img src={hy3} alt=""/>
                            </div>
                            <div className="guest-one-detail">
                                <h1>倪朋飞 </h1>
                                <h3>微软 Senior Software Engineer</h3>
                                <div>
                                <p>微软软件工程师，主要负责 Kubernetes 开源以及在 Azure 上的研发和落地工作。同时也是 Kubernetes 项目的维护者。曾就职于盛大、腾讯和 HyperHQ，在云计算、SDN 网络和容器编排调度等领域具有多年实践经验。维护紧跟社区更新的《Kubernetes 指南》开源书 。</p>
                            </div></div>
                        </div>
                        <div className="guest-one">
                            <div className="guest-one-img">
                                <img src={ddgao} alt=""/>
                            </div>
                            <div className="guest-one-detail">
                                <h1>张维</h1>
                                <h3>阿里巴巴 高级技术专家</h3>
                                <div>
                                    <p>2016 年加入阿里巴巴集团，目前在阿里云容器服务团队负责 Serverless Kubernetes 相关工作。研究 Linux 内核多年，并积极参与多个开源项目。当前的主要兴趣是容器和云原生相关的产品化工作。</p>
                                </div>
                            </div>
                        </div>
                        <div className="guest-one">
                            <div className="guest-one-img">
                                <img src={hy4} alt=""/>
                            </div>
                            <div className="guest-one-detail">
                                <h1>喻涵</h1>
                                <h3>中国移动 </h3>
                                <h3>杭州研发中心云平台架构师</h3>
                                <div>
                                    <p>现负责中国移动杭州研发中心云计算平台技术架构，为中国移动集团多个全国重要应用提供平台技术支撑，OpenStack 社区开发者，原万达信息云技术负责人，工信部双态 IT 联盟会议讲师，2018 OpenInfra Days China 讲师，开源云技术中心专栏主笔。</p>
                                </div>
                            </div>
                        </div>
                    
                        <div className="guest-one">
                            <div className="guest-one-img  guest-one-img-big">
                                <img src={ddb} alt=""/>
                            </div>
                            <div className="guest-one-detail">
                                <h1>王必成</h1>
                                <h3>网易云 资深解决方案架构师</h3>
                                <div>
                                <p>网易云资深解决方案架构师，8年云计算领域相关工作经历，先后就职于华为、网易，参与过虚拟化平台、私有云、公有云、容器平台、微服务等研发和架构工作。</p>
                            </div></div>
                        </div>
                    {/* three */}
                        <div className="guest-one">
                            <div className="guest-one-img">
                                <img src={li} alt=""/>
                            </div>
                            <div className="guest-one-detail">
                                <h1>李志伟</h1>
                                <h3>当当网 架构部负责人</h3>
                                <div>
                                    
                               
                                <p>当当网架构部负责人。致力于 Kubernetes 容器云以及微服务平台建设工作。历任 17K 小说网、搜狐游戏， IT168 技术总监。2016年加入当当网。</p>
                            </div> </div>
                        </div>
                        <div className="guest-one">
                            <div className="guest-one-img">
                                <img src={dd3} alt=""/>
                            </div>
                            <div className="guest-one-detail">
                                <h1>王岩</h1>
                                <h3>VMware 高级工程师</h3>
                                <div>
                                    <p>VMware 中国研发中心高级工程师，多年软件研发经验，Harbor 团队核心成员之一。在 VMware 中国研发中心先后从事桌面虚拟化，Harbor 的研发工作。从 2016 年参与 Harbor 项目的研发，作为主要核心开发成员之一，目前主要负责 Harbor 项目的功能开发，开源社区维护，CI/CD 等工作。</p>
                                </div>  
                            </div>
                        </div>
                        <div className="guest-one">
                            <div className="guest-one-img">
                                <img src={dd6} alt=""/>
                            </div>
                            <div className="guest-one-detail">
                                <h1>朱显杰</h1>
                                <h3>微医 数据总监</h3>
                                <div>
                                    <p>浙江大学计算机科班出身，现就职于国内互联网医疗健康领域独角兽微医，任数据总监和区块链负责人，致力于云计算、容器、大数据、区块链技术的研究和落地。始终坚信技术可以让未来更美好。</p>
                                </div>
                            </div>
                        </div>
                        <div className="guest-one">
                            <div className="guest-one-img">
                                <img src={hy1} alt=""/>
                            </div>
                            <div className="guest-one-detail">
                                <h1>章鑫</h1>
                                <h3>华为云 微服务平台高级工程师</h3>
                                <div>
                                    <p>现负责华为云容器服务 Istio 产品化的设计和开发工作。参与华为 PaaS 平台产品设计研发，在 Kubernetes 容器服务、微服务、PaaS 平台的运维管理等多个领域有深入研究与实践。曾供职于 Nokia，Via Telecom 等公司。</p>
                                </div>
                            </div>
                        </div>
                        <div className="guest-one">
                            <div className="guest-one-img">
                                <img src={dd5} alt=""/>
                            </div>
                            <div className="guest-one-detail">
                                <h1>薛磊</h1>
                                <h3>Momenta 资深研发工程师</h3>
                                <div>
                                    <p>分布式系统、存储系统、容器技术专家，前 Sun 中国工程研究院工程师，关注深度学习训练平台的基础架构研发。</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="guest-all all-too-litter">
                        <div className="guest-one">
                            <div className="guest-one-img guest-one-img-big">
                                <img src={dd8} alt=""/>
                            </div>
                            <div className="guest-one-detail">
                                <h1>罗韩梅</h1>
                                <h3>腾讯 高级工程师</h3>
                                <div>
                                    <p>2009 年加入腾讯，高级工程师，数据平台部资源调度和容器云负责人。主要专注于开源技术、分布式数据仓库、分布式资源调度平台等领域。先后研发腾讯自研云平台“台风”中 Torca 资源管理与调度系统、数据平台部分布式调度平台 Yarn，目前负责 GaiaStack Docker 容器云平台。</p>
                                </div> 
                            </div>
                        </div>
                        <div className="guest-one">
                            <div className="guest-one-img guest-one-img-big">
                                <img src={dd9} alt=""/>
                            </div>
                            <div className="guest-one-detail">
                                <h1>彭靖田</h1>
                                <h3>了得研究院 首席科学家</h3>
                                <div>
                                    <p className="text-left">了得研究院负责人，谷歌机器学习开发专家（ML Google Developer Experts），Kubeflow Maintainer，《深入理解 TensorFlow》作者。加州大学圣迭戈分校访问学者，毕业于浙江大学竺可桢学院求是科学班。曾任才云人工智能云平台 Clever 负责人，华为公司深度学习团队核心成员，主要参与华为深度学习平台的设计和研发工作。</p>
                                </div>
                            </div>
                        </div>
                  
                       

                    </div>
                </div>
                <Bottom/>
            </div>
        )
    }
}
