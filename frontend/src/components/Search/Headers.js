import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      borderRadius: "100px",

      query: "",
      people: [],
      visibility: "visible",
      val: "",
      states: {
        width: "70%",
        marginTop: "13vh",
        position: "fixed",
        marginLeft: "-1%",
        visibility: "hidden"
      },
      navbar: {
        borderRadius: "100px",
        visibility: "hidden",
        color: "asd"
      }
    };

    this.onChange = this.onChange.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
  }

  onUpdate(e) {
    this.props.onUpdates(this.state.val);

    this.setState({
      query: "",
      val: "",
      people: [],
      borderRadius: "100px",
      navbar: {
        borderRadius: "100px",
        visibility: this.state.navbar.visibility,
        color: this.state.navbar.color
      }
    });
    this.setState({people:[]});
    e.preventDefault();
  }
  onChange = e => {
    const { value } = e.target;

    this.setState({
      query: value,
      val: value
    });

    this.search(value);
  };

  search = query => {
    const url = `/users?search=${query}`;
    const token = {};
    this.token = token;

    fetch(url)
      .then(results => results.json())
      .then(data => {
        if (this.token === token) {
          if (data != null)
            this.setState({
              people: data,
              borderRadius: "30px 30px 0px 0px",
              navbar: {
                borderRadius: "30px 30px 0px 0px",
                visibility: this.state.navbar.visibility,
                color: this.state.navbar.color
              }
            });
          else
            this.setState({
              people: [],
              borderRadius: "100px",
              navbar: {
                borderRadius: "100px",
                visibility: this.state.navbar.visibility,
                color: this.state.navbar.color
              }
            });
        }
      });
  };

  listenScrollEvent = e => {
    if (window.scrollY > 150) {
      this.setState({
        visibility: "hidden",
        query: "",
        states: {
          width: "74%",
          marginTop: "13vh",
          position: "fixed",
          marginLeft: "-1%",
          visibility: "visible"
        },
        navbar: {
          borderRadius: this.state.navbar.borderRadius,
          visibility: "visible",
          color: "dark"
        }
      });
    } else {
      this.setState({
        visibility: "visible",
        states: {
          width: "74%",
          marginTop: "13vh",
          position: "fixed",
          marginLeft: "-1%",
          visibility: "hidden"
        },
        navbar: {
          borderRadius: this.state.navbar.borderRadius,
          visibility: "hidden"
        }
      });
    }
  };

  componentDidMount() {
    this.search("");
    window.addEventListener("scroll", this.listenScrollEvent);
  }
  render() {
    return (
      <div className="headers" id="home">
        <Navbar fixed="top" bg={this.state.navbar.color} expand="lg">
          <Navbar.Brand href="#home">
            <img width="50%" src="images/brand.png" alt="nav bar"></img>
          </Navbar.Brand>
          <form onSubmit={this.onUpdate} role="search">
            <input
              value={this.state.val}
              onChange={this.onChange}
              style={this.state.navbar}
              type="text"
              placeholder="Zip code or city or restaurant name"
              class="form-control1"
            />
          </form>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Form inline>
              <Nav.Link Link="#home" className="mr-sm-2">
                <b>List</b>
              </Nav.Link>
              <Nav.Link className="mr-sm-2" Link="/search">
                <b>Find</b>
              </Nav.Link>
              <Nav.Link className="mr-sm-2" Link="#link">
                <b>Support</b>
              </Nav.Link>
              <Nav.Link className="mr-sm-2" Link="/auth">
                <b>Login/Signup</b>
              </Nav.Link>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        <ul style={this.state.states} className="myUL">
          {this.state.people.map(person => (
            <li>
              <Link to={`/products/${person.id}`}>
                <h6>
                  {person.name} ,{person.address} ,{person.city} ,
                  {person.zipcode}
                </h6>
              </Link>
            </li>
          ))}
        </ul>

        <div class="container">
          <form onSubmit={this.onUpdate} class="search">
            <input
              value={this.state.val}
              onChange={this.onChange}
              style={this.state}
              type="text"
              class="search__input"
              placeholder="Zip code or city or restaurant name"
            />
            <button class="search__button"></button>
          </form>
          {this.state.people.map(person => (
            <ul style={this.state} className="myUL" key={person.name}>
              <li>
                <Link to={`/products/${person.id}`}>
                  <h6>
                    {person.name}, {person.address}, {person.city},
                    {person.zipcode}
                  </h6>
                </Link>
              </li>
            </ul>
          ))}
        </div>
      </div>
    );
  }
}
export default Header;
