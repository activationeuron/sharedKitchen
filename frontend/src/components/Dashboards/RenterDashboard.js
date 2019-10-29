import React, { Component } from "react";
import { connect } from "react-redux";
import Layout from "../Layout";
import { Link } from "react-router-dom";
class RenterDashboard extends Component {
  constructor() {
    super();
    this.state = {
      current: [],
      previous: [],
      kitchens: [],
      license: [],
      requests: []
    };
  }
  componentDidMount() {
    fetch("/dashboard/renterdata")
      .then(res => {
        console.log(res);
        return res.json();
      })
      .then(response => {
        console.log(response);
        if (response.message === "false") {
          window.open("http://localhost:3000/login", "_self");
        }
        this.setState({
          current: response.current,
          previous: response.previous,
          kitchens: response.kitchens,
          license: response.license,
          requests: response.requests
        });
        console.log(this.state);
      });
  }

  render() {
    return (
      <Layout>
        <div className="renterdashboard">
          <link
            href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
            rel="stylesheet"
            integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
            crossOrigin="anonymous"
          ></link>
          <link
            href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
            rel="stylesheet"
            integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
            crossOrigin="anonymous"
          ></link>
          <div className="dashboard">
            <div className="statrow">
              <div className="row">
                <div className="col-lg-4"></div>
                <div className="col-lg-4" align="center">
                  <h4 className="dlabel"> My Dashboard</h4>
                </div>
                <div className="col-lg-4 statustab"></div>
              </div>
              <div className="stattab">
                <div className="row">
                  <div className="col-lg-4" align="center">
                    <h3 className="statlabel">Total savings so far</h3>
                    <br />
                    <div className="statcolumn">
                      <h3 className="statvalue">2.3K</h3>
                      <h6 className="statvar">average savings</h6>
                    </div>
                  </div>
                  <div className="col-lg-4" align="center">
                    <h3 className="statlabel">Total hours this month</h3>
                    <br />
                    <div className="statcolumn2">
                      <h3 className="statvalue">400 hours</h3>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4"></div>
                </div>
              </div>
            </div>
            <div className="mybookingdiv">
              {this.state.current.map((user, index) => {
                return (
                  <div className="bookingrow" key={index}>
                    <div className="row">
                      <div className="col-lg-4"></div>
                      <div className="col-lg-4" align="center">
                        <h4 className="dlabel">My Bookings</h4>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-3">
                        <h6 className="sublabel">Current Booking</h6>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-3 text-left">
                        <h4 id="kitchenlabel2">
                          {user.name}
                          <i
                            className="fa fa-check-square-o"
                            aria-hidden="true"
                          ></i>
                        </h4>
                      </div>
                      <div className="col-lg-3 labeloption" align="center">
                        <div>
                          <h5 className="textlink">
                            <Link to={""} id="buttonlink">
                              Charges & Payments
                            </Link>
                          </h5>
                        </div>
                      </div>
                      <div className="col-lg-3 labeloption" align="center">
                        <h5 className="textlink">
                          <Link to={""} id="buttonlink">
                            Change booking
                          </Link>
                        </h5>
                      </div>
                      <div className="col-lg-3 labeloption" align="center">
                        <h5 className="textlink">
                          <Link to={""} id="buttonlink">
                            Request service
                          </Link>
                        </h5>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="previousbooking">
                <div className="row">
                  <div className="col-lg-3">
                    <h6 className="sublabel">Previous Booking</h6>
                  </div>
                </div>
              </div>
              {this.state.previous.map((user, index) => {
                return (
                  <div key={index}>
                    <div className="row previousrow">
                      <div className="col-lg-4 text-left">
                        <h4 id="kitchenlabel2">
                          {user.name}
                          <i className="fa fa-clock-o" aria-hidden="true"></i>
                        </h4>
                      </div>
                      <div className="col-lg-4 labeloption">
                        <h5 className="datetext">
                          {user.booked_from.slice(0, 10)} to{" "}
                          {user.booked_until.slice(0, 10)}
                        </h5>
                      </div>
                      <div className="col-lg-4 labeloption" align="center">
                        <h5 className="textlink">
                          <Link to={""} id="buttonlink">
                            Book Again
                          </Link>
                        </h5>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};
export default connect(mapStateToProps)(RenterDashboard);
