import React, { Component } from "react";
import { Link } from "react-router-dom";
import mylinkimg from "../../asset/linkimg.png";
import myinstaimg from "../../asset/instaimg.png";
class Links extends Component {
  render() {
    return (
      <div className="links">
        <div className="row">
          <div className="col-md-3" id="mid"></div>
          <div className="col-md-16">
            <h3 id="how">
              Renting and scheduling a kitchen at your fingertips
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4" id="mid"></div>
          <div className="col-md-4">
            <img src={mylinkimg} id="linkimg" />
          </div>
        </div>

        <div className="instagram">
          <div className="row align-items-center">
            <div className="col-md-7 "></div>
            <div className="col-md-3 ">
              <img src={myinstaimg} id="instaimg" />
            </div>
          </div>
        </div>
        <div className="instagram-text">
          <div className="row align-items-center">
            <div className="col-md-7 "></div>
            <div className="col-md-3 ">
              <h2 className="head">#sharedkitchen</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Links;
