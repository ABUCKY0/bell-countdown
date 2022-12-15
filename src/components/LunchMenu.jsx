import React, { useState, useEffect } from "react";

// window.onerror = alert;

class LunchItemImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      none: false,
    };
    var paramsStr = props.url.split("?")[1],
      params = new URLSearchParams(paramsStr);
    
    this.url =
      "https://bell-countdown-api.glitch.me/MenuImageCache?MenuItem=" +
      params.get("menuItemId");
  }

  componentDidMount() {
    this.timer = setTimeout(() => {
      this.setState((s) => ({
        none: s.loading,
      }));
    }, 5000);
    /*fetch(`${this.url}`, {
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
  });*/
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    return (
      <>
        {this.state.loading && !this.state.none && (
          <img
            width="40"
            height="40"
            className="MenuImage"
            src="https://cdn.glitch.com/41b9504c-a9af-4d48-8bcf-ed59058d6a31/loading-loading-forever.gif"
          />
        )}
        {!this.state.none && (
          <img
            src={this.url}
            onLoad={() => this.setState({ loading: false })}
            style={this.state.loading ? { display: "none" } : {}}
            className="MenuImage"
            width="40"
            height="40"
          />
        )}
      </>
    );
  }
}

function LunchMenu(props) {
  var isWeekend = /[60]{1}/.test(new Date().getDay());

  if (props.loading) {
    return <>Loading...</>;
  } else if (Object.keys(props.items).length == 0 || isWeekend) {
    return (
      <>
        <p>There is nothing on the menu today</p>
      </>
    );
  } else {
    return (
      <div className="LunchMenu container">
        <h1>On the Menu Today</h1>
        <h2>Meal:</h2>
        <h3>
          <ul>
            {props.items["LUNCH ENTREE"].map((itm) => (
              <li key={itm.MenuItemDescription}>
                <LunchItemImage
                  url={itm.ThumbnailImageURL}
                  key={itm.ThumbnailImageURL}
                />
                {itm.MenuItemDescription}
              </li>
            ))}
          </ul>
        </h3>
        <h2>Vegetables:</h2>
        <ul>
          {props.items["VEGETABLE"].map((itm) => (
            <li key={itm.MenuItemDescription}>
              <LunchItemImage
                url={itm.ThumbnailImageURL}
                key={itm.ThumbnailImageURL}
              />
              {itm.MenuItemDescription}
            </li>
          ))}
        </ul>
        <h2>Fruits:</h2>
        <ul>
          {props.items["FRUIT"].map((itm) => (
            <li key={itm.MenuItemDescription}>
              <LunchItemImage
                url={itm.ThumbnailImageURL}
                key={itm.ThumbnailImageURL}
              />
              {itm.MenuItemDescription}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default LunchMenu;
