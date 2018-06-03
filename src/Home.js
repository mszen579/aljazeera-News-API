import React, { Component } from "react";
import api from "./api";
// import { Link } from "react-router-dom";//this is for routing
import "./components/style/home.css";
import  './components/style/img/aljazeera.png';
//these is for the time format
import Moment from "react-moment";
//these is for the slider
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";

//this is a Component with state therefore we have to have a constructor
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null
    };
  }
  componentDidMount() {
    api.getResult().then(
      function(result) {
        this.setState(function() {
          return {
            result: result
          };
        });
      }.bind(this)
    );
  }

  render() {
    //    return (
    //       <div className="api">
    //       {this.state.result && this.state.result.map(function (results) {

    //           return (
    //               <ul  className='ul' key={results.url}>
    //                   <li ><h2>Title: {results.title}</h2></li>
    //                   <li >Author: {results.author}</li>
    //                   <li >Published at: {results.publishedAt}</li>
    //                   <li >See details:<a href={results.url}>{results.url}</a></li>
    //                   <li ><img src={results.urlToImage} width="300" /></li>
    //                   <li >Short Description: {results.description}</li>
    //                   <li >Source: {results.source.name}</li>
    //                   <br/>
    //                   <hr/>
    //               </ul>
    //           )

    //       })}
    //   </div>
    //     );
    //   }
    // }

    // export default Home;

    return (
      <div>
      {/* <img src="./components/style/img/aljazeera.png" alt="alj logo"/> */}
        <h1 style={{color: "#DAA000", fontWeight: "700"}}>Headlines...</h1>
        <div className="table-responsive-md">
          <Carousel autoPlay style={{ height: "530px", textAlign: "center" }}>
            {this.state.result &&
              this.state.result.slice(0, 3).map(function(results) {
                return (
                  <div style={{ height: "530px", textAlign: "center" }} >
                    <img src={results.urlToImage} />
                    <h1
                      className="legend titlehome"
                      style={{ fontSize: "30px" }}
                    >
                      {results.title} &nbsp;
                    <a href={results.url} className="wpcf7-submit">
                     read more
                    </a>
                    </h1>
                    
                  </div>
                 
                );
              })}
          </Carousel>
        </div>
        <br />
        <br />
        <br />

        <section id="aboutUs">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="aboutus_area wow fadeInLeft">
                  <h2 className="titile">Who we are?</h2>

                  <h5>
                    <b>A Truly Global Network</b>
                  </h5>
                  <p>
                    Al Jazeera English since 2006 is part of a growing network
                    comprising more than 10 channels and divisions. Launched in
                    1996, Al Jazeera Arabic was the first independent news
                    channel in the Arab world dedicated to providing
                    comprehensive news and live debate. The network challenged
                    established narratives and gave a global audience an
                    alternative voice one that put the people back at the centre
                    of the news agenda and quickly made it one of the world's
                    most influential news networks. Each subsidiary in the Al
                    Jazeera Media Network follows the same principles and values
                    that inspire it to be challenging and bold, and to provide a
                    voice for the voiceless in some of the most unreported
                    places on the planet. It's a responsibility shared by every
                    employee at the Al Jazeera Media Network. From our
                    headquarters to our broadcast centres. In more than 70
                    bureaus around the world, we strive to deliver content that
                    captivates, informs, inspires and entertains. The Voice of
                    the People At Al Jazeera English, we understand that our
                    viewers turn to us when they want incisive analysis, that
                    reveals the impact of world events. That is why our stories
                    are built on a foundation of honesty; fairness, balance;
                    independence; and diversity. These are traits that build
                    more than just great stories — they build trust — creating a
                    bond that reporters at Al Jazeera English work to maintain
                    and strengthen. From crowded city streets, to remote
                    villages, our international team of correspondents work
                    relentlessly to find and cover the stories that matter. From
                    the people making decisions to those affected by them, we
                    are the voice of the people. It is a responsibility we take
                    very seriously A Truly Global Network Al Jazeera English is
                    part of a growing network comprising more than 10 channels
                    and divisions. Launched in 1996, Al Jazeera Arabic was the
                    first independent news channel in the Arab world dedicated
                    to providing comprehensive news and live debate. The network
                    challenged established narratives and gave a global audience
                    an alternative voice one that put the people back at the
                    centre of the news agenda and quickly made it one of the
                    world's most influential news networks. Each subsidiary in
                    the Al Jazeera Media Network follows the same principles and
                    values that inspire it to be challenging and bold, and to
                    provide a voice for the .
                  </p>
                  <h5>
                    <b>The Voice of the People</b>{" "}
                  </h5>
                  <p>
                    At Al Jazeera English, we understand that our viewers turn
                    to us when they want incisive analysis, that reveals the
                    impact of world events. That is why our stories are built on
                    a foundation of honesty; fairness, balance; independence;
                    and diversity. These are traits that build more than just
                    great stories — they build trust — creating a bond that
                    reporters at Al Jazeera English work to maintain and
                    strengthen. From crowded city streets, to remote villages,
                    our international team of correspondents work relentlessly
                    to find and cover the stories that matter. From the people
                    making decisions to those affected by them, we are the voice
                    of the people. It is a responsibility we take very seriously
                    A Truly Global Network Al Jazeera English is part of a
                    growing network comprising more than 10 channels and
                    divisions. Launched in 1996, Al Jazeera Arabic was the first
                    independent news channel in the Arab world dedicated to
                    providing comprehensive news and live debate. The network
                    challenged established narratives and gave a global audience
                    an alternative voice one that put the people back at the
                    centre of the news agenda and quickly made it one of the
                    world's most influential news networks. Each subsidiary in
                    the Al Jazeera Media Network follows the same principles and
                    values that inspire it to be challenging and bold, and to
                    provide a voice for the
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="newsfeed_area wow fadeInRight">
                  <ul className="nav nav-tabs feed_tabs" id="myTab2">
                    <li className="active">
                      <a href="#news" data-toggle="tab">
                        THE NEWS
                      </a>
                    </li>
                  </ul>

                  <div className="tab-content">
                    <div className="tab-pane fade in active" id="news">
                      <ul className="news_tab">
                        {this.state.result &&
                          this.state.result.map(function(results) {
                            return (
                              <li>
                                <div className="media">
                                  <div className="media-left">
                                    <a className="news_img" href="#">
                                      <img
                                        className="media-object" style={{borderRadius: "2px"}}
                                        src={results.urlToImage}
                                        alt="img"
                                      />
                                    </a>
                                  </div>

                                  <div className="media-body">
                                    <p className="legend titlehome">
                                      <b>{results.title}</b>
                                    </p>
                                    <p >
                                      {results.description} <a href={results.url} className="blog_summary">
                                      ...more
                                    </a>
                                    </p>
                                    
                                    <Moment
                                      className="text-muted"
                                      format="Do MMM YYYY"
                                    >
                                      {results.puplishedAt}
                                    </Moment>
                                    
                                  </div>
                                  
                                </div>
                              </li>
                            );
                          })}
                      </ul>
                      {/* <Link className="see_all" style={{ fontSize: "22px" }} to="/News">
                Alles Zien
              </Link> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
