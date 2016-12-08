import React from 'react';
// import Back from './Back.js';
import InstagramEmbed from 'react-instagram-embed'
import './App.css';


const bernerInstas = [
  "https://www.instagram.com/p/BNvIZIuDZ_4/",
  "https://www.instagram.com/p/BNdJ_BkDIdq/",
  "https://www.instagram.com/p/BNpaqjiDtgU/",
  "https://www.instagram.com/p/BNnovLFjRA-/",
  "https://www.instagram.com/p/BNQSPRLDoFm/",
  "https://www.instagram.com/p/BM78pElAO0E/",
  "https://www.instagram.com/p/BMy7qjtACB4/",
  "https://www.instagram.com/p/BNGoNRbABiT/",
  "https://www.instagram.com/p/BMzUixQAxQF/",
  "https://www.instagram.com/p/BNZ6lD9DCD6/"

]



class Bernese extends React.Component {

  // constructor(){
  //   super();
  // }

  render() {
    return(
      <div className="bernerContainer">
        {bernerInstas.map( (src) => { return <InstagramEmbed url={src} maxWidth={520} hideCaption  containerTagName='div' /> })}
      </div>
    )
  }
}


export default Bernese;
