import "./Intro.scss"
import TypewriterComponent from "typewriter-effect";

export default function Intro() {
  
  return (
    <div className='intro' id="intro">
      <div className="left">
        <div className="imageContainer">

        </div>
      </div>
      <div className="right">
        <div className="wrapper">      
          <h2>Hi there, I'm</h2>
          <h1> <span> <TypewriterComponent 
           options={{ 
           strings:["Janindu Jayasuriya"],
           autoStart:true,
           delay:50,
           loop:true
           }}
           /> </span></h1>
          <h3>Software Engineering Undergraduate</h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="Down arrow"/>
        </a>
      </div>
    </div>
  )
}
