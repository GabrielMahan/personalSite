import React from 'react';

class Ally extends React.Component {
  constructor(){
    super();
    this.state = {auth: false};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    // fetch()
    debugger;
  }

  render() {
    return(
      <div>
        {this.state.auth ?
          <div>
            authed!
          </div>
        :
          <div>
            <input value={this.state.val}  />
            <button onSubmit={this.handleSubmit}> check auth </button>
          </div>
      }
      </div>
    )
  }
}


export default Ally;
