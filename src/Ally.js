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
        <input value={this.state.val}  />
        <button onSubmit={this.handleSubmit}/>
      </div>
    )
  }
}


export default Ally;
