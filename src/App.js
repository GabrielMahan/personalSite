import React from 'react';
import './App.css';
import head from './head.png';
import Nav from './Nav.js';
import Hire from './Hire.js';
import Ally from './Ally.js';
import FP from './FP.js';
import Bernese from './Bernese.js';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      display: 'NAV',
      navStyle: {color: "green"}
    }

    this.slideOut = this.slideOut.bind(this);
    this.changeNav = this.changeNav.bind(this);
    this.setNav = this.setNav.bind(this);
    this.mouse = this.mouse.bind(this);
  }


  slideOut() {
    // debugger;
    // this.refs.nav
  }

  changeNav(mode) {
    this.setState({display: mode})
    // debugger;
  }

  setNav(){
    this.changeNav("NAV")
  }
  mouse(e){

  }


  render() {
    // const style = this.state.navStyle;

    return (
      <div className="App" onMouseOver={this.mouse}>
          <Nav ref="NAV"  setNav={this.setNav} changeNav={this.changeNav}/>
          {this.state.display === "HIRE" ?   <Hire /> : null}
          {this.state.display === "FP" ?   <FP /> : null}
          {this.state.display === "BERNESE" ?   <Bernese /> : null}
          {this.state.display === "MOM" ?   <Mom /> : null}
          {this.state.display === "ALLY" ?   <Ally /> : null}


          <img alt="head" src={head} />
          <div className="nametag">
            <div>
              <h1>Gabriel Mahan</h1>
              <span>Web Developer</span>
              <span>Educator</span>
            </div>
          </div>


      </div>
    );
  }
}

export default App;
