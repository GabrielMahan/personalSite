import React from 'react';
import "./stylesheets/animations.css";
import "./stylesheets/Nav.css";
import Back from './Back.js';


class Nav extends React.Component {
  constructor(){
    super();
    this.state = {navClass: "nav"}
    this.bringContent = this.bringContent.bind(this);
    this.bringNav = this.bringNav.bind(this);
  }

  bringContent(mode){
    this.setState({navClass: "nav navOut"})
    this.props.changeNav(mode);
  }

  bringNav(){
    this.props.changeNav("NAV")
    this.setState({navClass: "nav"})

  }

  render() {
    return(
      <div>
        {this.state.navClass === "nav navOut" ?  <Back goBack={this.bringNav} /> : null }

        <div className={this.state.navClass} ref="navContainer">
          <span>What brings you here?</span>
          <div className="option-container">
            <div className="hireButton" onClick={() => {this.bringContent("HIRE")}}> <span id="balancer" >Hire Gabe</span></div>
            <div onClick={() => {this.bringContent("BERNESE")}}> <span>Pictures of Bernese Mountain Dogs</span></div>
            <div onClick={() => {this.bringContent("MOM")}}> <span> Hi, Mom  </span></div>
            <div onClick={() => {this.bringContent("ALLY")}}> <span> Altara </span></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Nav;

// <div onClick={() => {this.bringContent("WHISKEY")}}> <span> Whiskey Reccomendation </span></div>
// <div onClick={() => {this.bringContent("FP")}}> <span>Fountain Pens</span></div>
