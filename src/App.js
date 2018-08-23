
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  browserHistory
} from 'react-router-dom';
import React from "react";
import "./App.less";
import Home from "./home.js";
import Join from "./join.js";
import Agenda from "./agenda.js";
import JoiniN from './join-in.js'
import tic from "./img/tic.png"
const ListItemLink = ({ to, ...rest}) => (
  <Route
    path={to}
    children={({ match }) => {
        if(match){
            var paths=match.path;
            var titles=document.getElementsByTagName("title")[0];
            if(paths=='/'|| paths=='/part'){
              titles.innerHTML='大会首页 CEUC 云原生中国用户大会';
            }if(paths=='/guests'){
              titles.innerHTML='大会嘉宾 CEUC 云原生中国用户大会';
            }if(paths=='/detail-schedule'){
              titles.innerHTML='大会议程 CEUC 云原生中国用户大会';
            }
        }
        return (
            <li className={match ? "menu-type active" : "menu-type"} >
                <Link to={to} {...rest} />
            </li>
        )
      
    }}
  />
);




class App extends React.Component {
  sponsor = () => {
      window.open("http://cn.mikecrm.com/LsmrsMc");
  };
  buytick = () =>{
      window.open("http://www.huodongxing.com/event/8449630009800");
  }
  sponsoraa = () =>{
    window.open("http://k8smeetup.mikecrm.com/s3pDFuk");
    }
  render() {
    return (
      <div className="App">
        <Router>
          <div className="app">
            <aside className="u-side">
                <div className="top">
                    <div className="ico">
                    </div>
                    <ul className="menu">
                        <ListItemLink to="/part"><span>首页</span></ListItemLink>
                        <ListItemLink to="/guests"><span>嘉宾</span></ListItemLink>
                        <ListItemLink to="/detail-schedule"><span>议程</span></ListItemLink>
                        <ListItemLink to="/ticket-detail"> <img src={tic} alt=""/> <span>购票</span></ListItemLink>
                        <li className= "menu-type have-width-more" onClick={this.sponsor}>
                            <span>赞助&参展</span>
                        </li>
                        <li className= "menu-type have-width-more" onClick={this.sponsoraa}>
                            <span>议题提交</span>
                        </li>
                    </ul>
                </div>
            </aside>
            <main className="u-main">
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/part" component={Home} />
                        <Route path="/guests" component={Join} />
                        <Route path="/detail-schedule" component={Agenda} />
                        <Route path="/ticket-detail" component={JoiniN} />
                    </Switch>
                </div>
            </main>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
