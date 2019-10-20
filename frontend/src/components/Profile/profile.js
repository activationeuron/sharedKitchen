import React, { Component } from "react";
import Layout from "../Layout";
import { connect } from "react-redux";
import { getProfile } from "../../actions/index";
class Profile extends Component {
  componentDidMount() {
    this.props.getProfile();
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <Layout>
          <h1>Profile</h1>
        </Layout>
      </div>
    );
  }
}

export default connect(
  null,
  { getProfile }
)(Profile);
