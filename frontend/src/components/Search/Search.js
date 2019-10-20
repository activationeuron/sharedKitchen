import React, { Component } from "react";
import Section from "./Sections";
import Header from "./Headers";
// import Footer from './../Footers';
import FormDialog from "./FormDialog";
import Button from "react-bootstrap/Button";

class Search extends Component {
  state = {
    name: "",
    current: "",
    currents: "",
    found: "Top kitchens near your location"
  };

  onUpdate = names => {
    this.setState({ name: names, found: `Search Results For ${names}` });
  };

  render() {
    return (
      <div className="App">
        <Header onUpdates={this.onUpdate} />

        <br />
        <br />
        <h3 align="center">
          <i class="fas fa-map-marker-alt"></i> {this.state.found}
        </h3>
        <Section name={this.state.name} />
        <h4 align="center">
          <i class="fa fa-search" aria-hidden="true"></i> Can't Find A Kitchen{" "}
          <Button variant="light">
            <h4>
              {" "}
              <FormDialog />{" "}
            </h4>
          </Button>
        </h4>
        <br />
        <h4 align="center">
          <a href="/search">
            <Button variant="light">
              <h4> Go back </h4>
            </Button>
          </a>
        </h4>
        <br />
        <br />

        {/* <Footer/> */}
      </div>
    );
  }
}
export default Search;
