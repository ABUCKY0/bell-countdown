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

  

  
  render() {
    return (
      <div className="Announcements Container">
        { (
          <>            
            <h1>Test</h1>
            <span>Your Mom</span>
            <ul className="nnouncements">
              <li class="announcements" class=""><p></p> days</li>
              <li><p></p> hours</li>
              <li><p></p> minutes</li>
              <li><p></p> seconds</li>
            </ul>
          </>
        )}
      </div>
    );
  }
}
