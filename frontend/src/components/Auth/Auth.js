import React from "react";
import { Link } from "react-router-dom";
// Example JS object used for CSS styling
import Layout from "../Layout/index";
import style from "./la-login.modules.css";
import { connect } from "react-redux";
import {login} from '../../actions/index'
const styles = {
  facebookBtn: {
    backgroundColor: "rgb(51, 89, 157)"
  },
  form: {
    textAlign: "center"
  }
};

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password:"",
    };}

  handleOnSubmit = e => {
    e.preventDefault();
    this.props.login(this.state.email,this.state.password)
  };

  handleEmail=(e)=>{
    this.setState({email:e.target.value})
}
handlePassword=(e)=>{
    this.setState({password:e.target.value})
}

handleLogin=(e)=>{
  e.preventDefault();

  this.props.login(this.state.email,this.state.password)
}
  // googleHandle = args => {
  //   fetch(args)
  //       .then(res => {
            
  //           return res.json()
  //        })
  //       .then(users => { 
            
  //        });
  //   window.location.href = args;
  // };
  // faceBookHandle = args => {
  //   window.location.href = args;
  // };



  render() {

    if (!this.props.auth.userData) {
      return (
        <Layout>
          <div className="col-md-6 mx-auto" style={{ marginTop: "20px" }}>
            <form style={styles.form}>
              <h4>Welcome Back!</h4>
              <div className="form-group row">
                <input className="input-la" value={this.state.email} type="text" placeholder="Email" onChange={this.handleEmail} />
              </div>
              <div className="form-group row">
                <input
                value={this.state.password}
                  className="input-la"
                  type="password"
                  placeholder="Password"
                  onChange={this.handlePassword}
                />
              </div>
              <div className="form-group row">
                <button className="btn1" type="submit" onClick={this.handleLogin} >
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

                <Link to="/auth/signup">

                <button className="btn" style={{"width":"inherent"}} >
                  Sign Up Using Email
                </button >
                </Link>
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

export default connect(mapStateToPros,{login})(Auth);
