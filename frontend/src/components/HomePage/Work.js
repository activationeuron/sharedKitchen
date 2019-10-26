import React, { Component } from "react";
import myhow from "../../asset/howitworks.png";

class Works extends Component {
  render() {
    return (
      <div className="works">
        <div className="row">
          <div className="col-md-5" id="mid"></div>
          <div className="col-md-4">
            <h3 id="how">How it Works?</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-5" id="mid"></div>
          <div className="col-md-4">
            <img src={myhow} id="howimg" />
          </div>
        </div>
      </div>
    );
  }
}
export default Works;
