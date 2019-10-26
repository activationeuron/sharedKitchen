import Carousel from "react-multi-carousel";
import React from "react";
import "react-multi-carousel/lib/styles.css";

import continental from "../../asset/continental.png";
import italian from "../../asset/italian.png";
import japanese from "../../asset/japanese.jpg";
import spanish from "../../asset/spanish.jpg";
import barbecue from "../../asset/barbecue.jpg";
import french from "../../asset/french.jpg";
import indian from "../../asset/indian.jpg";
import mexican from "../../asset/mexican.jpg";
import american from "../../asset/american.jpg";
import coffee from "../../asset/coffee.jpg";
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

const Simple = ({ deviceType }) => {
  return (
    <Carousel
      ssr
      partialVisbile
      deviceType={deviceType}
      itemClass="image-item"
      responsive={responsive}
      infinite={true}
      itemClass="carousel-item-padding-100-px"
    >
      <div>
        <a id="imagelinks" href="#homepage">
          <img id="sliderimages" src={italian} alt="italian" />
          <div className="carousel-caption">
            <h1>Italian</h1>
          </div>
        </a>
      </div>
      <div>
        <a id="imagelinks" href="#homepage">
          <img id="sliderimages" src={coffee} alt="coffee" />
          <div className="carousel-caption">
            <h1>Coffee</h1>
          </div>
        </a>
      </div>
      <div>
        <a id="imagelinks" href="#homepage">
          <img id="sliderimages" src={continental} alt="continental" />
          <div className="carousel-caption">
            <h1>Continental</h1>
          </div>
        </a>
      </div>
      <div>
        <div>
          <a id="imagelinks" href="#homepage">
            <img id="sliderimages" src={japanese} alt="japanese" />
            <div className="carousel-caption">
              <h1>Japanese</h1>
            </div>
          </a>
        </div>
      </div>
      <div>
        <a id="imagelinks" href="#homepage">
          <img id="sliderimages" src={indian} alt="indian" />
          <div className="carousel-caption">
            <h1>Indian</h1>
          </div>
        </a>
      </div>
      <div>
        <a id="imagelinks" href="#homepage">
          <img id="sliderimages" src={spanish} alt="spanish" />
          <div className="carousel-caption">
            <h1>Spanish</h1>
          </div>
        </a>
      </div>
      <div>
        <a id="imagelinks" href="#homepage">
          <img id="sliderimages" src={barbecue} alt="barbecue" />
          <div className="carousel-caption">
            <h1>Barbecue</h1>
          </div>
        </a>
      </div>
      <div>
        <a id="imagelinks" href="#homepage">
          <img id="sliderimages" src={french} alt="french" />
          <div className="carousel-caption">
            <h1>French</h1>
          </div>
        </a>
      </div>
      <div>
        <a id="imagelinks" href="#homepage">
          <img id="sliderimages" src={mexican} alt="mexican" />
          <div className="carousel-caption">
            <h1>Mexican</h1>
          </div>
        </a>
      </div>
      <div>
        <a id="imagelinks" href="#homepage">
          <img id="sliderimages" src={american} alt="american" />
          <div className="carousel-caption">
            <h1>American</h1>
          </div>
        </a>
      </div>
    </Carousel>
  );
};

export default Simple;
