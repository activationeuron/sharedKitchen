import React, { Component } from "react";

// import "react-multi-carousel/lib/styles.css";
const request = require("request");

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibilityGutter: 60
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 50
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30
  }
};

class Instagram2 extends Component {
  constructor() {
    super();
    this.state = { posts: [] };
  }

  componentDidMount() {
    try {
      request(
        {
          url: "https://www.instagram.com/instagram/?__a=1",
          json: true
        },
        (error, response, body) => {
          console.log(body.graphql.user.edge_owner_to_timeline_media.edges);
          const posts = body.graphql.user.edge_owner_to_timeline_media.edges;
          this.setState({
            posts
          });
          console.log(this.state.posts);
        }
      );
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div className="insta-posts">
        <div className="row">
          {this.state.posts.slice(0, 4).map((eachpost, index) => {
            return (
              <div className="col-md-3 tabspace">
                <a
                  href={
                    "https://www.instagram.com/p/" +
                    eachpost.node.shortcode +
                    "/"
                  }
                >
                  <img
                    src={eachpost.node.thumbnail_src}
                    height="300px"
                    widht="300px"
                    alt=""
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default Instagram2;
