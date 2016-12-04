import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import head from './head.png'

class App extends Component {
  constructor(){
    super();
    this.state = {
      display: 'NAV'
    }
    this.changeNav = (m) => {this.setState({display: m})};
  }



  render() {
    return (
      <div className="App">
          {this.state.display === 'NAV' ?
            <div className="nav">
              <span>What brings you here?</span>
              <div className="option-container">
                <div > <span>You're a parent or student </span></div>
                <div className="hire" onClick={() => {this.changeNav("HIRE")}}> <span id="balancer" >Hire Gabe</span></div>
                <div > <span>Fountain Pens</span></div>
                <div > <span>Pictures of Bernese Mountain Dogs</span></div>
                <div > <span> Whiskey Reccomendation </span></div>
                <div > <span> Hi, Mom  </span></div>

                <div onClick={() => {this.changeNav("ALLY")}}> <span> Altara </span></div>
              </div>
            </div>
          : null
          }
          {this.state.display === 'ALLY' ?
            <div className="ally">
              hey!
            </div>
          : null
          }
          {this.state.display === 'HIRE' ?
            <div className="ally">
              hey!
            </div>
          : null
          }

          <img src={head} />
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
