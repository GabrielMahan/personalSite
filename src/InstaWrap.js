import React from 'react';
import InstagramEmbed from 'react-instagram-embed'
import './stylesheets/instaWrap.css';
import loading from './assets/loading.gif'

class InstaWrap extends React.Component {
  constructor(){
    super();
    this.state = {
      linkCount: -1,
      loadedCount: 0
    }
  }

  componentDidMount(){
    this.setState({linkCount: this.props.links.length})
  }

  render() {
    return(
      <div>
        {this.state.loadedCount === this.state.linkCount ?
          null
        : <div className="loadContainer">
          <p className="">A wise choice...</p>
          <img src={loading} alt="loading"/>
        </div>
        }
        <div className={this.state.loadedCount === this.state.linkCount ? "instaWrapper" : "instaWrapper hidden"}>
          {this.props.links.map( (src) => { return <InstagramEmbed
              url={src}
              maxWidth={520}
              hideCaption
              containerTagName='div'
              onSuccess={() => {setTimeout(() => {this.setState({loadedCount: this.state.loadedCount + 1})},4000)}}
              /> })}
        </div>
      </div>
    )
  }
}


export default InstaWrap;
