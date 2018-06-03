import React, { Component } from 'react';
import Home from "./Home"
import { BrowserRouter, Router, Route, Switch, Link } from "react-router-dom";
import Script from "react-load-script";

//js and css
import "./components/style/css/bootstrap.min.css";
import "./components/style/css/font-awesome.min.css";
import "./components/style/css/superslides.css";
import "./components/style/css/slick.css";

import "./components/style/css/animate.css";
import "./components/style/css/jquery.tosrus.all.css";
import "./components/style/css/themes/default-theme.css";
import "./components/style/style.css";

// import "./components/UserPanel/css/bootstrap.min.css";
// import "./components/UserPanel/css/font-awesome.min.css";
// import "./components/UserPanel/css/superslides.css";
// import "./components/UserPanel/css/slick.css";

// import "./components/UserPanel/css/animate.css";
// import "./components/UserPanel/css/jquery.tosrus.all.css";
// import "./components/UserPanel/css/themes/default-theme.css";
// import "./components/UserPanel/style.css";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = { scriptError: "", scriptLoaded: "" };


    this.handleScriptError = this.handleScriptError.bind(this);
    this.handleScriptCreate = this.handleScriptCreate.bind(this);
    this.handleScriptLoad = this.handleScriptLoad.bind(this);

  }

  handleScriptCreate() {
    this.setState({ scriptLoaded: false })
  }

  handleScriptError() {
    this.setState({ scriptError: true })
  }

  handleScriptLoad() {
    this.setState({ scriptLoaded: true })
  }


  render() {
    return (
      <div className="App">
       
        <header className="App-header">
        <h1 className='world' style={{color: "#DAA000", fontWeight: "900"}}>ALJAZEERA WORLD NEWS</h1>
          <div><Home /></div>
           
        
          <Script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"
            onCreate={this.handleScriptCreate.bind(this)}
            onError={this.handleScriptError.bind(this)}
            onLoad={this.handleScriptLoad.bind(this)}

          />

          <Script url="components/UserPanel/js/queryloader2.min.js" type="text/javaScript"
            onCreate={this.handleScriptCreate.bind(this)}
            onError={this.handleScriptError.bind(this)}
            onLoad={this.handleScriptLoad.bind(this)}
          />

          <Script url="components/UserPanel/js/wow.min.js"
            onCreate={this.handleScriptCreate.bind(this)}
            onError={this.handleScriptError.bind(this)}
            onLoad={this.handleScriptLoad.bind(this)}

          />

          <Script url="components/UserPanel/js/bootstrap.min.js"
            onCreate={this.handleScriptCreate.bind(this)}
            onError={this.handleScriptError.bind(this)}
            onLoad={this.handleScriptLoad.bind(this)}


          />

          <Script url="components/UserPanel/js/slick.min.js"
            onCreate={this.handleScriptCreate.bind(this)}
            onError={this.handleScriptError.bind(this)}
            onLoad={this.handleScriptLoad.bind(this)}

          />

          <Script url="components/UserPanel/js/jquery.easing.1.3.js"
            onCreate={this.handleScriptCreate.bind(this)}
            onError={this.handleScriptError.bind(this)}
            onLoad={this.handleScriptLoad.bind(this)} />
          <Script url="components/UserPanel/js/jquery.animate-enhanced.min.js"
            onCreate={this.handleScriptCreate.bind(this)}
            onError={this.handleScriptError.bind(this)}
            onLoad={this.handleScriptLoad.bind(this)} />
          <Script url="components/UserPanel/js/jquery.superslides.min.js" type="text/javascript" charset="utf-8"
            onCreate={this.handleScriptCreate.bind(this)}
            onError={this.handleScriptError.bind(this)}
            onLoad={this.handleScriptLoad.bind(this)}
          />

          <Script url="https://cdn.rawgit.com/pguso/jquery-plugin-circliful/master/js/jquery.circliful.min.js"
            onCreate={this.handleScriptCreate.bind(this)}
            onError={this.handleScriptError.bind(this)}
            onLoad={this.handleScriptLoad.bind(this)}
          />

          <Script type="text/javascript" language="javascript" url="components/UserPanel/js/jquery.tosrus.min.all.js"
            onCreate={this.handleScriptCreate.bind(this)}
            onError={this.handleScriptError.bind(this)}
            onLoad={this.handleScriptLoad.bind(this)}

          />
          <Script url="components/UserPanel/js/custom.js"
            onCreate={this.handleScriptCreate.bind(this)}
            onError={this.handleScriptError.bind(this)}
            onLoad={this.handleScriptLoad.bind(this)}

          /> 

        </header>
      </div>
    );
  }
}

export default App;
