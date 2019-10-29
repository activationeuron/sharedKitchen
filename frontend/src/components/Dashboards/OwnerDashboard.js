import React, { Component } from "react";
import Layout from "../Layout";
import { Link } from "react-router-dom";
class RenterDashboard extends Component {
  constructor() {
    super();
    this.state = {
      mykitchens: []
    };
  }
  showStatus = verified => {
    let icon = [];
    if (verified === 0) {
      icon.push(<i class="fa fa-hourglass-half"></i>);
    } else {
      icon.push(<i class="fa fa-check-square-o" aria-hidden="true"></i>);
    }
    return icon;
  };
  componentDidMount() {
    fetch("/dashboard/ownerdata")
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
          mykitchens: response.mykitchens
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
          <div className="dashboard">
            <div className="statrow">
              <div className="row">
                <div className="col-lg-4"></div>
                <div className="col-lg-4" align="center">
                  <h4 className="dlabel"> My Dashboard</h4>
                </div>
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
                  <div className="col-lg-4" align="center">
                    {" "}
                    <h3 className="statlabel">Growth rate</h3>
                    <br />
                    <div className="statcolumn3">
                      <h3 className="statvalue">2.3K</h3>
                      <h6 className="statvar">average savings</h6>
                    </div>
                  </div>
                </div>
                <div className="row"></div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4"></div>
              <div className="col-lg-4" align="center">
                <h4 className="dlabel"> My Kitchens</h4>
              </div>
            </div>
            <div className="mybookingdiv">
              {this.state.mykitchens.map((user, index) => {
                return (
                  <div className="bookingrow" key={index}>
                    <div className="row">
                      <div className="col-lg-2 text-right" align="center">
                        <h4 className="kitchenlabel2">
                          <Link to={"#" + user.id} id="kitchenlabel2">
                            {user.name}
                          </Link>
                        </h4>
                      </div>

                      <div className="col-lg-3 labeloption" align="center">
                        <div>
                          <h5 className="textlink">
                            <Link to={""} id="buttonlink">
                              Edit Availability
                            </Link>
                          </h5>
                        </div>
                      </div>
                      <div className="col-lg-3 labeloption" align="center">
                        <h5 className="textlink">
                          <Link to={""} id="buttonlink">
                            Edit Listing
                          </Link>
                        </h5>
                      </div>

                      <div className="col-md-3" align="center">
                        <h5 className="chatlink">
                          <Link to={""} id="pagelink">
                            <i
                              className="fa fa-paper-plane-o"
                              aria-hidden="true"
                            ></i>
                            Chat with Owner
                          </Link>
                        </h5>
                      </div>
                      <div className="col-md-2"></div>
                      <div className="col-lg-3 labeloption" align="center">
                        <h5 className="textlink">
                          <Link to={""} id="buttonlink">
                            See Reviews
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
export default RenterDashboard;
