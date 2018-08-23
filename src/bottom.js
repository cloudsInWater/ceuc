import React from "react";
import QR1Img from "./img/QR1.png";
import QR2Img from "./img/weitu.png";

export default class Bottom extends React.Component{
    render() {
        return (
            <div className="consult">
                <div className="text">
                    <div className="title">
                        会务／票务咨询
                    </div>
                    <div className="context">
                        邮箱：ceucinfo@k8smeetup.com<br/>
                        电话：400-1014-588
                    </div>
                </div>
                <div className="text">
                    <div className="title">
                        议题提交
                    </div>
                    <div className="context">
                        邮箱：ceuctopic@k8smeetup.com<br/>
                        电话：15258895816（Doris）
                    </div>
                </div>
                <div className="text">
                    <div className="title">
                        赞助推广
                    </div>
                    <div className="context">
                        邮箱：ceucsponsor@k8smeetup.com<br/>
                        电话：17826829186（Devin）
                    </div>
                </div>
                <div className="qr">
                    <img src={QR1Img} alt=""/>
                </div>
                <div className="qr">
                    <img src={QR2Img} alt=""/>
                </div>
            </div>
        )
    }
}
