import React from "react";
import { Link } from "react-router-dom";
// Example JS object used for CSS styling
import Layout from "../Layout/index";
import style from "./la-login.modules.css";
import { connect } from "react-redux";

import {register} from '../../actions/'
const styles = {
  facebookBtn: {
    backgroundColor: "rgb(51, 89, 157)"
  },
  form: {
    textAlign: "center"
  }
};

class CostumeAuth extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          email: "",
          password:"",
          name:"",
        };}

        handleName=(e)=>{
            this.setState({name:e.target.value})
        }
        handleEmail=(e)=>{
            this.setState({email:e.target.value})
        }
        handlePassword=(e)=>{
            this.setState({password:e.target.value})
        }
        sumbitUser=(e)=>{
            if(this.state.email==="" || this.state.password==="" || this.state.name===""){
                alert("password and email cannot be empty!")
                return;
            }
            e.preventDefault();
            this.props.register(this.state.email,this.state.password,this.state.name)
        }
  
  render() {

    if (!this.props.auth.userData) {
      return (
        <Layout>
          <div className="col-md-6 mx-auto" style={{ marginTop: "20px" }}>
            <form style={styles.form} onSubmit={this.handleOnSubmit}>
            <div className="form-group row">
                <input className="input-la" type="text" placeholder="Name" value={this.state.name} onChange={this.handleName} />
              </div>
  
              <div className="form-group row">
                <input className="input-la" type="text" placeholder="Email" value={this.state.email} onChange={this.handleEmail} />
              </div>
              <div className="form-group row">
                <input
                  className="input-la"
                  type="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handlePassword}
                />
              </div>
             

              <div className="form-group row">
                <button className="btn1" type="submit" onClick={this.sumbitUser} >
                 Signup 
                </button>
              </div>
             
              
            </form>
          </div>
        </Layout>
      );
    }

    
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

export default connect(mapStateToPros,{register})(CostumeAuth);
