import React, { Component } from "react";
import Layout from "../Layout";
import { Link } from "react-router-dom";
class AdminDashboard extends Component {
  constructor() {
    super();
    this.state = {
      kitchens: [],
      license: [],
      requests: []
    };
  }
  componentDidMount() {
    fetch("/dashboard/admindata")
      .then(res => {
        console.log(res);
        return res.json();
      })
      .then(response => {
        console.log(response);
        this.setState({
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
        <div className="admindashboard">
          <div className="dashboard">
            <div className="firstrow">
              <div className="row">
                <div className="col-lg-4"></div>
                <div className="col-lg-4" align="center">
                  <h4 className="dlabel">Admin Dashboard</h4>
                </div>
                <div className="col-lg-4 selectform">
                  <form>
                    <h5 className="selector">
                      Period:
                      <select name="" className="month">
                        <option value="thismonth">This Month</option>
                        <option value="lastmonth">Last Month</option>
                      </select>
                    </h5>
                  </form>
                </div>
              </div>
            </div>
            <div className="labelrow">
              <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-6" align="center">
                  <h4 className="dlabel">Restaurants to be approved</h4>
                </div>
              </div>
            </div>
            <div className="optionrow">
              {this.state.kitchens.map((user, index) => {
                return (
                  <div className="row listings" key={index}>
                    <div className="col-md-2 textalign" align="center">
                      <h5 className="kitchenlabel">{user.name}</h5>
                    </div>
                    <div className="col-md-4" align="center">
                      <h5 className="textlink">
                        <Link to={"/admindashboard"} id="buttonlink">
                          Unpublished kitchen page
                        </Link>
                      </h5>
                    </div>
                    <div className="col-md-3" align="center">
                      <h5 className="textlink">
                        <Link to={"/admindashboard"} id="buttonlink">
                          Show docs
                        </Link>
                      </h5>
                    </div>
                    <div className="col-md-3" align="center">
                      <h5 className="chatlink">
                        <Link to={"/admindashboard"} id="pagelink">
                          <i
                            className="fa fa-paper-plane-o"
                            aria-hidden="true"
                          ></i>
                          Chat with Owner
                        </Link>
                      </h5>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="labelrow">
              <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-6" align="center">
                  <h4 className="dlabel">Renters to be approved</h4>
                </div>
              </div>
            </div>
            <div className="licenserow">
              {this.state.license.map((user, index) => {
                return (
                  <div className=" licensespacing" key={index}>
                    <div className="row">
                      <div className="col-md-3 text-left" align="center">
                        <h4 id="kitchenlabel2">{user.name}</h4>
                      </div>
                      <div className="col-md-3 " align="center">
                        <h5 className="textlink">
                          <Link to={""} id="buttonlink">
                            Show Docs
                          </Link>
                        </h5>
                      </div>
                      <div className="col-md-3" align="center">
                        <h5 className="chatlink">
                          <Link href="" id="pagelink">
                            <i
                              className="fa fa-paper-plane-o"
                              aria-hidden="true"
                            ></i>
                            Chat with renter
                          </Link>
                        </h5>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="labelrow">
              <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-6">
                  <h4 className="dlabel">Requests for kitchens</h4>
                </div>
              </div>
            </div>
            <div className="requestrow">
              {this.state.requests.map((user, index) => {
                return (
                  <div className="row requests" key={index}>
                    <div className="col-md-3 text-left">
                      <h4 id="kitchenlabel2">{user.name}</h4>
                    </div>
                    <div className="col-md-6" align="center">
                      <h5 className="textlink">{user.description}</h5>
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
export default AdminDashboard;
