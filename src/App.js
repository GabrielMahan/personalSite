import React from 'react';
import head from './assets/head.png';
import Nav from './Nav.js';
import Hire from './Hire.js';
import Mom from './Mom.js';
import Ally from './Ally.js';
import {bernerInstas} from './assets/instaLinks.js';
import InstaWrap from './InstaWrap.js';
// import ReactDOM from 'react-dom';
import Particles from 'react-particles-js';
import {particleParams} from './assets/particleParams.js';

import './stylesheets/App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      display: 'NAV',
      navStyle: {color: "green"}
    }
    this.changeNav = (mode) => {this.setState({display: mode})};
  }

  render() {
    return (
      <div className="App">
          <div className="particles" >
            <Particles params={particleParams} />
          </div>
          <Nav ref="NAV"  setNav={this.setNav} changeNav={this.changeNav}/>
          <div className="contentContainer">
            {this.state.display === "HIRE" ?   <Hire /> : null}
            {this.state.display === "BERNESE" ?   <InstaWrap links={bernerInstas} /> : null}
            {this.state.display === "MOM" ?   <Mom /> : null}
            {this.state.display === "ALLY" ?   <Ally /> : null}
          </div>

          <img alt="head" src={head} className="gabeHead"/>
          <div className="nametag"> Gabriel Mahan </div>
          <div className="subcap">
            <div className="subcap">
              Gabriel Mahan
              <p>Web Developer</p>
              <p>Educator</p>
            </div>
          </div>

      </div>
    );
  }
}

export default App;






// {this.state.display === "FP" ?   <InstaWrap links={fPInstas} /> : null}
