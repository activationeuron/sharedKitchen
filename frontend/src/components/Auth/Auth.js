import React from "react";
import { Link } from "react-router-dom";
// Example JS object used for CSS styling
import Layout from "../Layout/index";
import style from "./la-login.modules.css";
import { connect } from "react-redux";
const styles = {
  facebookBtn: {
    backgroundColor: "rgb(51, 89, 157)"
  },
  form: {
    textAlign: "center"
  }
};

class Auth extends React.Component {
  handleOnSubmit = e => {
    e.preventDefault();
    console.log("Submitted!");
  };

  googleHandle = args => {
    window.location.href = args;
  };
  faceBookHandle = args => {
    window.location.href = args;
  };
  render() {
    console.log(this.props);

    if (!this.props.auth.userData) {
      return (
        <Layout>
          <div className="col-md-6 mx-auto" style={{ marginTop: "20px" }}>
            <form style={styles.form} onSubmit={this.handleOnSubmit}>
              <h4>Welcome Back!</h4>
              <div className="form-group row">
                <input className="input-la" type="text" placeholder="Email" />
              </div>
              <div className="form-group row">
                <input
                  className="input-la"
                  type="password"
                  placeholder="Password"
                />
              </div>
              <div className="form-group row">
                <button className="btn" type="submit">
                  Log In
                </button>
              </div>
              <div className="form-group row">
                <button
                  className="fb"
                  onClick={() => this.googleHandle("/auth/facebook")}
                >
                  Connect with Facebook
                </button>
              </div>
              <div className="form-group row">
                <button
                  className="google"
                  onClick={() => this.googleHandle("/auth/google")}
                >
                  Connect with Google
                </button>
              </div>

              <div className="form-group row">
                <button className="btn" type="submit">
                  Sign Up Using Email
                </button>
              </div>
            </form>
          </div>
        </Layout>
      );
    }

    return (
      <div>
        <Layout>
          {" "}
          <Link to="/profile">Profile</Link>
        </Layout>
      </div>
    );
  }
}

// class Auth extends React.Component {
//   render() {
//     const { children, title } = this.props;
//     return (
//       <div className="col-md-6 mx-auto">
//         <header>
//           <h1>{title}</h1>
//         </header>
//         {children}
//       </div>
//     );
//   }
// }

const mapStateToPros = ({ auth }, hasOwnProperty) => {
  return { auth, hasOwnProperty };
};

export default connect(mapStateToPros)(Auth);
