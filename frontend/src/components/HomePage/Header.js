import React, { Component } from "react";
import { Link } from "react-router-dom";
import myfindimg from "../../asset/findimg.png";
import mylistimg from "../../asset/listimg.png";

import "./style.css";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "LOGIN/SIGNUP",
      url: "/login",
      dashboard_url: "/login"
    };
  }
  componentDidMount() {
    fetch("/fetchdb/getcookie", {})
      .then(response => response.json())
      .then(response => {
        console.log(response);
        if (response.body !== "not logged in") {
          this.setState({
            displayName: response.body.username,
            url: "/",
            dashboard_url: "/" + response.body.type + "dashboard"
          });
        }
      });
  }
  render() {
    return (
      <div id="toppage">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <img id="findimg" src={myfindimg} alt="" />
              <Link to={"#findkitchen"} id="mylink1">
                <h3 id="findtext">FIND A KITCHEN</h3>
              </Link>
            </div>
            <div className="col-md-3"></div>
            <div className="col-md-3"></div>
          </div>
          <div className="row midrow">
            <div className="col-md-3"></div>
            <div className="col-md-3"></div>
            <div className="col-md-3"></div>
            <div className="col-md-3"></div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <img id="findimg" src={mylistimg} alt="" />
              <Link to={"#findkitchen"} id="mylink1">
                <h3 id="findtext">LIST A KITCHEN</h3>
              </Link>
            </div>
            <div className="col-md-3"></div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
