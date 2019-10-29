import React, { Component } from "react";
import mypin from "../../asset/pin.png";
import { Link } from "react-router-dom";

//src={`${window.location.protocol}//image.${window.location.hostname}/${user.imagekey}/kitchen/kitchen1.jpeg`}
const request = require("request");

class PostList extends Component {
  drawstars = rating => {
    let stars = [];
    var blackstars = 5 - rating;
    if (rating % 1 > 0) {
      for (let i = 0; i < rating - 0.5; i++) {
        stars.push(<span className="fa fa-star checked" key={i}></span>);
      }
      stars.push(
        <span className="fa fa-star-half-o halfstar" key={blackstars}></span>
      );
      blackstars--;
    } else {
      for (let i = 0; i < rating - 0.5; i++) {
        stars.push(<span className="fa fa-star checked" key={i}></span>);
      }
    }
    for (let i = 0; i < blackstars; i++) {
      stars.push(<span className="fa fa-star-o blankstar" key={i}></span>);
    }
    return stars;
  };
  constructor() {
    super();
    this.state = { fetchdb: [] };
  }

  componentWillMount() {
    var lat;
    var long;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        console.log(position);
        lat = position.coords.latitude;
        long = position.coords.longitude;
        request(
          {
            //url: "https://maps.googleapis.com/maps/api/geocode/json?latlng="+lat+","+long+"&key=AIzaSyAmTHf5x8N9YUD0mFDZ_RnSik2h-EBt9I4",
            //url: "https://maps.googleapis.com/maps/api/geocode/json?latlng=18.6576169,73.7635762&key=AIzaSyAmTHf5x8N9YUD0mFDZ_RnSik2h-EBt9I4",
            url:
              "https://us1.locationiq.com/v1/reverse.php?key=pk.be7e2826b33ede6cef43ed66849d5c43&lat=" +
              lat +
              "&lon=" +
              long +
              "&format=json",
            json: true
          },
          (error, response, body) => {
            console.log(response);
            fetch("/fetchdb/loc", {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
              },
              body: JSON.stringify({ response })
            }).then(res => {
              console.log(res);
            });
          }
        );
      });
    }

    fetch("/fetchdb/all")
      .then(res => {
        console.log(res);
        return res.json();
      })
      .then(fetchdb => {
        console.log(fetchdb);
        this.setState({ fetchdb });
        console.log(this.state);
      });
  }
  render() {
    return (
      <div id="tabs">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6" id="toplabel">
            <img id="pinimg" src={mypin} />

            <h3 id="loc" className="topkitchenlabel">
              <a href="" id="topkitchenlabel">
                Top kitchens near your location
              </a>
            </h3>
          </div>
        </div>
        <div className="container-fluid2">
          <div className="row">
            {this.state.fetchdb.map((user, index) => {
              return (
                <div className="col-md-4 tabspace" key={index}>
                  <div className="card bg-transparent">
                    <div className="labels">
                      <Link to={"/products/" + user.id} id="card-links">
                        <img
                          className="card-img-top display-img"
                          id="cardimg"
                          src={
                            process.env.PUBLIC_URL +
                            "/userimages/main_kitchen/" +
                            user.id +
                            ".jpg"
                          }
                          alt="cards"
                        />

                        <div className="card-body">
                          <div className="titles">
                            <h5 className="card-title">{user.name} </h5>

                            <h5 className="price">${user.cost}</h5>
                            {this.drawstars(user.rating)}
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default PostList;
