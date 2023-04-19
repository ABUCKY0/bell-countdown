if (
  window.location.protocol === "http:" &&
  window.location.hostname !== "localhost"
) {
  window.location.protocol = "https:";
}
window.onerror = alert;

import React from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";

import LunchChooser from "./components/LunchChooser.jsx";
import DateCountdown from "./components/DateCountdown.jsx";
import BellCountdown from "./components/BellCountdown.jsx";
import LunchMenu from "./components/LunchMenu.jsx";
import Settings from "./components/Settings.jsx";
import Announcements from "./components/Announcements.jsx";
import Bell from "./components/bellimage.jsx";

import config from "./config.js";

import { Page, Folder, Nav, Button } from "./components/Page.jsx";
import Confetti from "./components/Confetti.jsx";

window.addEventListener("load", () => {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/sw.js", { scope: "/" });
  }
});
/*
fetch(`https://lc-bell-schedule-api.glitch.me/api/config.js`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json" 
    }
  }).then(response => response.json()) // Parse the response as text
  .then(js => {
    //json is a json object of the response
    
    if(!js.success){console.error(js.message);}
    
    config = js;
    
  }).catch(err => {
    //using .catch like this will catch the error if the response isn't json 
    //can we make a log file to log everything to or will that require some more node packages? 
    //since this is all on the client side, we would need a server to send the logs to, but on the server, we can do that. we could make something in the api and our database, 
    //but that would be alot of logging during debugging, unless we check to see if window.location == lc-bell-countdown.glitch.me normally, you don't need permanent logs on the client side, just fix the error when youre in development || true
    console.error(err);
  });*/
class App extends React.Component {
  constructor(props) {
    super(props);

    this.stored = {
      lunch: window.localStorage.getItem("lunch"),
      countdown: window.localStorage.getItem("countdown"),
      schedule: window.localStorage.getItem("schedule"),
    };

    this.date = new Date();

    var today = config.schedule.order[this.date.getDay()];
    var alt = config.schedule.alt;
    this.schedule = alt ? alt : today ? today : config.schedule.default;
    console.log(this.schedule);
    this.lunch = !!this.schedule.lunches.find((x) => x.id == this.stored.lunch)
      ? this.stored.lunch
      : false;
    this.state = {
      lunch: this.lunch,
      ready: !!this.lunch,
      countdown: this.stored.countdown
        ? JSON.parse(this.stored.countdown)
        : false,
      tabIndex: 0,
      schedule: this.schedule,
      menu: {
        loading: true,
        items: null,
      },
      page: "schedule",
    };

    this.onSelectLunch = this.onSelectLunch.bind(this);
    this.changeDate = this.changeDate.bind(this);
    this.setPage = this.setPage.bind(this);
    this.showannt = config.schedule.showAnnouncements;
  }

  componentDidMount() {
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      this.setState({ prompt: true });
    });
    
/*
     const d = new Date();
     const today = `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`;

     const options = new URLSearchParams();
     options.set("date", today);

     fetch(
       "https://bell-countdown-api.glitch.me/MenuItems?" + options.toString()
     )
       .then((r) => r.json())
       .then((items) => {
         this.setState({ menu: { loading: false, items } });
       });*/

    window.addEventListener("appinstalled", () => {
      this.setState({ prompt: true });
    });
  }

  onSelectLunch(lunch) {
    if (lunch !== "choose") {
      window.localStorage.setItem("lunch", lunch);
      this.setState({
        lunch,
        ready: true,
      });
    }
  }

  setPage(page) {
    this.setState({ page });
  }

  changeDate(title, date) {
    const obj = { title, date };
    window.localStorage.setItem("countdown", JSON.stringify(obj));
    this.setState({ countdown: obj });
  }
  /*showann(showannt) {
    if (showannt == true) {
      return( { <> <Page page="announcements" hidden>
          </Announcements> </>}) 
    }
  }*/
  //   setSchedule(type, schedule){
  //     this.setState({
  //       scheduleType: type,
  //       schedule: type=="default"?[config.order[this.date.getDay()]]:schedule
  //     });

  //     if(type == "custom"){
  //       window.localStorage.setItem("customSchedule", schedule);
  //     }

  //     window.localStorage.setItem("schedule", type);
  //   }

  render() {
    return (
      <>
        {this.state.confetti && <Confetti />}
        {!this.state.ready && (
          <LunchChooser schedule={this.schedule} submit={this.onSelectLunch} />
        )}
        {this.state.ready && (
          <>
            <Folder current={this.state.page}>
              <Nav set={this.setPage}>
                <Button page="schedule">Schedule</Button>
                <Button page="countdown">Countdown</Button>
                <Button page="bellschedule">Bell Schedule</Button>
                <Button page="announcements">Announcements</Button>
                <Button page="settings">Settings</Button>
                
              </Nav>
              <Page page="schedule">
                <BellCountdown
                  lunch={this.state.lunch}
                  schedule={this.state.schedule}
                  scheduleType={this.state.scheduleType}
                  display="counters"
                />
              </Page>

              <Page page="countdown">
                <DateCountdown countdown={this.state.countdown} />
              </Page>
              <Page page="menu">
                <Button page="menu">Menu</Button>
                <LunchMenu
                  loading={this.state.menu.loading}
                  items={this.state.menu.items}
                />
              </Page>
              <Page page="settings">
                <Settings
                  setLunch={this.onSelectLunch}
                  setSchedule={this.setSchedule}
                  schedule={this.schedule}
                  setTab={(index) => this.setState({ tabIndex: index })}
                  changeDate={this.changeDate}
                  
                />
              </Page>
                    <Page page="bellschedule"><iframe src="https://drive.google.com/file/d/1l2a5K4aW6r43224pAXtk6uirjbs4HKG1/view?usp=sharing?embedded=true" style={{ height:"95vh", width:"100%", margin:"0", border:"0", display:"block" }}></iframe> </Page>
    <Page page="announcements" hidden>
                <Announcements/ >
                
              </Page>

      <Page page="bell"> 
        <Bell/>
      </Page>
            </Folder>
          </>
        )}
      </>
  //bellschedule"><iframe src="https://docs.google.com/viewer?url=https://cdn.glitch.com/114ed44c-2e7f-4aea-b252-9d262062a66b/ACFrOgB5eOLpKNm29JCuh5jJAZil6mEGvKlBlDSp0oIyV0tdHrsxq54eLPXLNpAI3eIbM9tIbAZjOeAroHL_KF-01o_JlstFEVbmi9am8RFWybX0UToM2F_wSzh7-NbL3PACpdi4cU4On3ycn-4t.pdf?v=1672761551853&embedded=true
  );
  }
}

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
