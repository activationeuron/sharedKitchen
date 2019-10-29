import React, { Component } from "react";
import { Link } from "react-router-dom";
import myfindimg from "../../asset/findimg.png";
import mylistimg from "../../asset/listimg.png";
class Help extends Component {
  render() {
    return (
      <div className="help">
        <div className="row">
          <div className="col-md-6">
            <div className="imagelabel">
              <img id="findimg" src={myfindimg} alt="findimg" />
              <div className="imagespacing">
                <Link to={"#findkitchen"} id="mylink1">
                  <h3 id="findtext">FIND A KITCHEN</h3>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="imagelabel">
              <img id="findimg" src={mylistimg} alt="listimg" />
              <div className="imagespacing">
                <Link to={"#findkitchen"} id="mylink1">
                  <h3 id="findtext">LIST A KITCHEN</h3>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Help;
