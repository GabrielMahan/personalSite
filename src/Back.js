import React from 'react';

class Back extends React.Component {


  render() {
    return (
      <div className="backButton" onClick={this.props.goBack}>
        Go Back!!!
      </div>
    )
  }
}

export default Back;
