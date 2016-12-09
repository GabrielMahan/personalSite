import React, { Component } from 'react';
import './stylesheets/hire.css';
class Hire extends Component {

  render() {
    return (
      <div className="hire">
        <div className="contact">
            Cell: <span>(651) 587-4926 </span> | Email: <a id="email" href="malito:gabe@vert.live" >gabe@vert.live</a> | <a href="http://github.com/gabrielmahan">github </a> | <a href="http://linkedin.com/in/gabriel-mahan">LinkedIn </a>
        </div>
        <div className="resume">
          <iframe src="https://resume.creddle.io/embed/9t27qcyv8fp" width="850" height="1100" seamless> </iframe>
        </div>

        <div className="github"> </div>
      </div>
    )
  }
}

export default Hire;
