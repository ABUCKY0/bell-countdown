import React from "react";
import "../styles/Settings.css";
import config from "../config.js";

const serverURL = "https://node-js-api.glitch.me/";

// import calendar from "../icalfeed.json"
import "../styles/DateCountdown.css";
import "../styles/Announcements.css";

export default class Announcements extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      announcements: []
    };
    
    this.retrievedata = this.retrievedata.bind(this);
    
  }


retrievedata() {
  
  
  //what I would suggest here is perhaps fetching the api once the page loads - this way it will wake up in time for you 
  //to actually need to make requests. 
  // the only thing I worry about is the fact that glitch fully loads the loading page, then loads, then goes to the api. I saw this thing where it would fetch the data, test if it is json,
  // and if so, do someting, else do something else. Couldn't figure it out though. that code is below
  
  //there's an article about this on support.glitch.com, let me find it. It talks about a header you can use to disable the loading 
  //screen so you can use it as an api
  
  //here it is https://support.glitch.com/t/opt-out-of-waking-up-interstitial/8789
  //just add a content-type header, and glitch will just load and wont send the html loading screen
  fetch(`${serverURL}/api/announcements`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json" 
    }
  }).then(response => response.json()) // Parse the response as text
  .then(json => {
    //json is a json object of the response
    
    if(!json.success){console.error(json.message);}
    
    this.setState(state => ({
      announcements: json.data
    }))
    
  }).catch(err => {
    //using .catch like this will catch the error if the response isn't json 
    //can we make a log file to log everything to or will that require some more node packages? 
    //since this is all on the client side, we would need a server to send the logs to, but on the server, we can do that. we could make something in the api and our database, 
    //but that would be alot of logging during debugging, unless we check to see if window.location == lc-bell-countdown.glitch.me normally, you don't need permanent logs on the client side, just fix the error when youre in development || true
    console.error(err);
  });
}
//  for (const x = 0; x < 2; x++) {}
componentDidMount(){
  //load the announcements once the component is ready Hey Thanks! this really helps! I can somewhat build upon code that is already here, like with my styling, but its hard to build from scratch
//since I don't know much of what i'm doing. it is similar to java, but has many differences. ALso do you like how I have mine styled?
  // I love the styling, actually. The one thing i'm not the best at is styling yeah me either, but I just use like colors that would kinda go with a theme, and build upon them. Awesome!
  this.retrievedata();
}
  
  render() {
    return (
      <div className="AnnouncementsContainer">
        { (
          <>    
            {/*if no announcements, just say that below. this will auto-hide if announcments are added   |    that works below*/}
            {this.state.announcements.length == 0 && <p>No announcements!</p>} 
    {/*else, just show the announcments*/}
            
            {/* not quite sure how your database stores all of the info - heres a sample for displaying all of the data 
            automatically if you need

the only place that accesses the database is the node.js server I have. This accesses the server as an api in json
            
            It's working!! HOLY SLJA:LKJF:LDKJ:LRFJSDKGFL:KKDJSFKL:KJDS:FLKJSD:LKJF:LDSKJF:LDSKJF :LKSDJFLK:JSDHF: Thanks!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            
            I'm super happy to help - it's a lot of fun to do Seriously. Thanks for your help! also if you want to, We can finish this up here, and copy it to your liking so it fits your school and api thingy. It should be set up similarly
Alright, first, do you want to polish things up? we could see if the create page works YOO IT WORKED!! Only issue is it goes from oldest at the top to newest at the bottom
            */}
            {this.state.announcements.map(x=>
                                         <div className="announcements" key={x.id}>
                                           <h1 >{x.title}</h1>
                                           <span className="date">{new Date(x.date).toLocaleString().split(",")[0]}</span>
                                           <p>{x.description}</p>
                                           <div className="tags">
                                             {x.tags && x.tags?.map(tag=><span className="tag">{tag}</span>)}
                                           </div>
                                         </div>)}
            
          </>
        )}
      </div>
    );}}
  

