import React, { Component } from "react";
import "./la-homepage.css";
import { Link } from "react-router-dom";
import brand from "../../asset/brand.png";
import { connect } from "react-redux";
import { fetchUsers } from "../../actions/index";
class Layout extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <Link to="/auth">LOGIN</Link>
          </li>
        );
      default:
        return (
          <>
            <li>
              <Link to="/profile">PROFILE</Link>
            </li>
            <li>
              <a href="/api/logout">LOGOUT</a>
            </li>
          </>
        );
    }
  }

  render() {
    return (
      <div>
        <div>
          {/* <div className="la-Header">
          <img
            className="la-Header-item logo"
            src={logo}
            alt="logo"
            width="50"
            height="50"
          ></img>
          <div className="la-Header-item">Form</div>
          <div className="la-Header-item">
            <Link to="/">Home</Link>
            {this.renderContent()}
            <Link to="/list">List</Link>
            <Link to="/support">support</Link>
          </div> */}

          <div className="headercontainer">
            <div className="header">
              <div className="logo">
                <Link to="/">
                  {" "}
                  <img src={brand} alt="brand" className="logo" />
                </Link>
              </div>
              <div className="search-la">
                <form action="">
                  <div className="input">
                    <input
                      type="text"
                      className="input-box"
                      placeholder="Search Kitchen "
                    />
                    <div className="search-icon">
                      <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="26"
                        height="32"
                        viewBox="0 0 32 32"
                        className="search-color"
                        style={{ marginLeft: "-43px" }}
                      >
                        <title>search</title>
                        <path d="M31.008 27.231l-7.58-6.447c-0.784-0.705-1.622-1.029-2.299-0.998 1.789-2.096 2.87-4.815 2.87-7.787 0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12c2.972 0 5.691-1.081 7.787-2.87-0.031 0.677 0.293 1.515 0.998 2.299l6.447 7.58c1.104 1.226 2.907 1.33 4.007 0.23s0.997-2.903-0.23-4.007zM12 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z" />
                      </svg>
                    </div>
                  </div>
                </form>
              </div>
              <div className="nav">
                <ul>
                  <li>
                    <Link to="/">LIST</Link>
                  </li>
                  <li>
                    <Link to="/Search">FIND</Link>
                  </li>
                  <li>
                    <Link to="/support">SUPPORT</Link>
                  </li>
                  <> {this.renderContent()}</>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div>{this.props.children}</div>

        <div className="footer-as">
          {" "}
          <div>
            <footer id="section_footer">
              <div className="container">
                <div className="row mb-5">
                  <div className="col-md-3">
                    <div className="ftco-footer-widget mb-4">
                      <p className="ftco-heading-2">Terms and Conditions</p>
                      <p>Privacy Policy</p>
                      <p>Refund Poicy</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                      <li className="ftco-animate">
                        <Link href="" target="_blank">
                          <span>
                            <i className="fab fa-facebook-f"></i>
                          </span>
                        </Link>
                      </li>
                      <li className="ftco-animate">
                        <Link href="" target="_blank">
                          <span>
                            <i className="fab fa-instagram"></i>
                          </span>
                        </Link>
                      </li>
                      <li className="ftco-animate">
                        <Link href="" target="_blank">
                          <span>
                            <i className="fab fa-linkedin-in"></i>
                          </span>
                        </Link>
                      </li>
                      <li className="ftco-animate">
                        <Link href="" target="_blank">
                          <span>
                            <i className="fab fa-instagram"></i>
                          </span>
                        </Link>
                      </li>
                      <li className="ftco-animate">
                        <Link href="" target="_blank">
                          <span>
                            <i className="fab fa-linkedin-in"></i>
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-3">
                    <div className="ftco-footer-widget mb-4">
                      <p className="ftco-heading-2">About Shared Kitchen</p>
                      <p>Contact Us</p>
                      <p>Sustainability</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 text-center">
                    <p>
                      Copyright &copy; 2019 Shared Kitchen, All rights reserved
                    </p>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth: auth.userData };
};

export default connect(
  mapStateToProps,
  { fetchUsers }
)(Layout);
