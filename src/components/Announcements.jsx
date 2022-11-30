import React from "react";
import "../styles/Settings.css";
import config from "../config.js";


// import calendar from "../icalfeed.json"
import "../styles/DateCountdown.css";
import "../styles/Announcements.css";

export default class Announcements extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };

  }
data (){
       fetch(this.state.apiUrl)
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
//  for (const x = 0; x < 2; x++) {}

  
  render() {
    return (
      <div className="Announcements Container">
        { (
          <>    
            
    <div class="announcements">
      <h1>Title Here</h1>
      <p>This is one really big a** paragraph of text, that can represents me typing an unreasonably long description for an announcement. If your name is harrison and you want to see more, look in this html file. Everyone else just has to suck it the frick up. I know that it sounds selfish, and a bit rude, and you would be right. It is very rude. Time for the lorem ipsums: <br/><br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur shit occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. -- Generated with a Lorem Ipsum Generator</p>
      <div class="tag">I wonder what happens if I make an unreasonably long tag. Oh thats what happens. Ok</div>
      <div class="tag">Tag Two</div>
    </div>
    <div class="announcements">
      <h1>Title Here</h1>
      <p>This is one really big a** paragraph of text, that can represents me typing an unreasonably long description for an announcement. If your name is harrison and you want to see more, look in this html file. Everyone else just has to suck it the frick up. I know that it sounds selfish, and a bit rude, and you would be right. It is very rude. Time for the lorem ipsums: <br/><br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur shit occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. -- Generated with a Lorem Ipsum Generator</p>
      <div class="tag">I wonder what happens if I make an unreasonably long tag. Oh thats what happens. Ok</div>
      <div class="tag">Tag Two</div>
    </div>
          </>
        )}
      </div>
    );}}
  

