import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import mycuisine from "../../asset/cuisine.png";
import UAParser from "ua-parser-js";
import Simple from "./Simple";
import Section from "./Section";
const Index = ({ deviceType }) => {
  return (
    <div className="cuisines">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-8" id="toplabel">
          <div className="imageandcuisine">
            <img id="cicon" src={mycuisine} alt="" />
            <h3 id="cui">Cuisines</h3>
          </div>
        </div>
      </div>
      <Fragment>
        <Section>
          <Simple deviceType={deviceType} />
        </Section>
      </Fragment>
    </div>
  );
};

Index.getInitialProps = ({ req }) => {
  let userAgent;
  if (req) {
    userAgent = req.headers["user-agent"];
  } else {
    userAgent = navigator.userAgent;
  }
  const parser = new UAParser();
  parser.setUA(userAgent);
  const result = parser.getResult();
  const deviceType = (result.device && result.device.type) || "desktop";
  return { deviceType };
};

export default Index;
