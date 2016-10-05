class Home extends React.Component {

  constructor() {
    super();
    this.circleUp = this.circleUp.bind(this)
    this.toCenter = this.toCenter.bind(this)

  }

  componentDidMount() {
    this.circleUp();
    this.refs.pic.style.top = "350px"
    this.refs.pic.style.left = "350px"
    document.getElementById("pic").style.top = "0px"

  }

  circleUp() {
    var refTags = Object.keys(this.refs)
    for (var i = 0; i < refTags.length; i++) {
      this.refs[refTags[i]].style.left = String(350 + 300 * Math.cos((Math.PI * (i + 1)) / 6)) + "px"
      this.refs[refTags[i]].style.top = String(350 - 300* Math.sin((Math.PI * (i + 1)) / 6)) + "px"
    }
  }

  toCenter(e) {
    this.circleUp()
    for (var i = 0; i <  document.getElementsByClassName("bubbleQueue").length; i++) {
      document.getElementsByClassName("bubbleQueue")[i].style.top = "400px"
    }
    document.getElementById(e.target.id.slice(3)).style.top = "0px"
    e.target.style.top = "350px";
    e.target.style.left = "350px";
  }


  render() {
    return (
      <div id="wrapper">
        <div id="infoPane">
          <h1> Gabriel Mahan</h1>
          <h2>Full Stack Web Developer</h2>
          <p>

          </p>
        </div>
        <div id="sm pic" src="assets/photo" className="smBubble txtIco" onClick={this.toCenter} ref="pic"> photo </div>
        <div id="sm_contact" src="assets/contact.png" className="smBubble txtIco" onClick={this.toCenter} ref="ed">contact</div>
        <div id="sm bio" className="smBubble txtIco" onClick={this.toCenter} ref="bio"> bio </div>
        <div id="sm skills" className="smBubble txtIco" onClick={this.toCenter} ref="skills"> skills </div>
        <div id="sm resume" className="smBubble txtIco" onClick={this.toCenter} ref="resume"> resume </div>
        <img id="sm_code" src="/images/octocat.png" className="smBubble" onClick={this.toCenter} ref="github" />
        <img id="sm_linkedin" className="smBubble" src="/images/linkedin.png" onClick={this.toCenter} ref="linkedin" />
        <div id="bubble">
          <div id="contact" className="bubbleQueue">
            <p>
              <ul>
                <li>
                  phone: 651 587 4926
                </li>
                <li>
                  email: mahan.gabe@gmail.com
                </li>
              </ul>
            </p>
          </div>
          <div id="bio" className="bubbleQueue">
            <p>
              <h1> Bio </h1>
              Originally from Minnesota, I studied philosophy at Cornell before teaching for three years in Downtown Brooklyn, originally through Teach for America
            </p>
          </div>
          <div id="pic" className="bubbleQueue">
            <img src="/images/face.jpg" />
          </div>
          <div id="code" className="bubbleQueue">
            <p>
              <h1>Code</h1>
              Check me out at <a href="http://github.com/gabrielmahan" target="_blank"> github.com/gabrielmahan </a>
            </p>
          </div>
          <div id="skills" className="bubbleQueue">
            <p>
              <h1>Skills</h1>
              <ul>
                <li>Ruby</li>
                <li>Ruby on Rails</li>
                <li>ReactJS</li>
                <li>Javascript</li>
                <li>JQuery</li>
                <li>SQL</li>
                <li>HTML5</li>
                <li>CSS</li>
              </ul>
            </p>
          </div>
          <div id="linkedin" className="bubbleQueue">
            <p>
              <h1> linkedIn </h1>
                Check me out on linkedin at <a href="http://linkedin.com/in/gabriel-mahan" target="_blank">linkedin.com/in/gabriel-mahan</a>
            </p>
          </div>
          <div id="resume" className="bubbleQueue">
            <p>
              <h1> Resume </h1>
                Find my resume on Creddle at <a href="https://resume.creddle.io/resume/9t27qcyv8fp" target="_blank">linkedin.com/in/gabriel-mahan</a>
            </p>
          </div>
        </div>
      </div>
    )
  }
}
