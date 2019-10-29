import React from "react";
import Layout from "../Layout";

import Instagram from "./Instagram";
import Work from "./Work";
import Sample from "./Sample";
import Header from "./Header";
import Postlist from "./PostList";
import Simple from "./Simple";
import Help from "./Help";
import Cuisines from "./Cuisines";
import Links from "./Links";
const HomePage = () => {
  return (
    <Layout>
      <Header />
      <Postlist />
      <Cuisines />
      <Work />
      <Help />
      <Links />

      <Instagram />
    </Layout>
  );
};

export default HomePage;
