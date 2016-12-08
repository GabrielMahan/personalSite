

import React from 'react';
import "./animations.css";
import "./Nav.css";
import Back from './Back.js';


class Nav extends React.Component {


  constructor(){
    super();
    this.state = {navClass: "nav"}
    this.switchMode = this.switchMode.bind(this);
    this.bringBackNav = this.bringBackNav.bind(this);
  }

  switchMode(mode){
    this.setState({navClass: "nav navOut"})
    this.props.changeNav(mode);
  }

  bringBackNav(){
    this.props.setNav();
    this.setState({navClass: "nav"})

  }

  render() {


    return(
      <div>
        {this.state.navClass === "nav navOut" ?  <Back goBack={this.bringBackNav} /> : null }

        <div className={this.state.navClass} ref="navContainer">
          <span>What brings you here?</span>

          <div className="option-container">
            <div className="hire" onClick={() => {this.switchMode("HIRE")}}> <span id="balancer" >Hire Gabe</span></div>
            <div onClick={() => {this.switchMode("FP")}}> <span>Fountain Pens</span></div>
            <div onClick={() => {this.switchMode("BERNESE")}}> <span>Pictures of Bernese Mountain Dogs</span></div>
            <div onClick={() => {this.switchMode("WHISKEY")}}> <span> Whiskey Reccomendation </span></div>
            <div onClick={() => {this.switchMode("MOM")}}> <span> Hi, Mom  </span></div>
            <div onClick={() => {this.switchMode("ALLY")}}> <span> Altara </span></div>
          </div>
        </div>
      </div>
    )
  }
}


export default Nav;
