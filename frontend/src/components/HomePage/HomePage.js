import React from "react";
import Layout from "../Layout";
import Instagram from "./Instagram";
import Work from "./Work";
import Sample from "./Sample";
const HomePage = () => {
  return (
    <Layout>
      <Sample />

      <Instagram />
      <Work />
    </Layout>
  );
};

export default HomePage;
