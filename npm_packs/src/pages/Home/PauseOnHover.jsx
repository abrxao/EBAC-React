import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./slidepause.scss";
import rx7 from "./assets/rx7.png";
import rx72 from "./assets/rx7-2.png";
import rx73 from "./assets/rx7-3.png";
import rx74 from "./assets/rx7-4.png";
import rx75 from "./assets/rx7-5.png";

export default class PauseOnHover extends Component {
  constructor(){
    super();
  }
  render() {

    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      className: "slideMain",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        }
      ]
    };

    return (
      <div className="slidePause">
        <div className="decoration"></div>
        <div className="decoration-bottom"></div>
        <Slider {...settings}>

          <div style={{
            display:"flex",
            padding: "20px",
            alignItems: "center"
          }}>
            <img src={rx7} style={{
                width:"100%",
                aspectRatio: window.innerWidth<768?1.3:1.5,
                objectFit: "cover"
            }} alt=""/>
          </div>

          <div style={{
            display:"flex",
            alignItems: "center"
          }}>
            <img src={rx72} style={{
                width:"100%",
                aspectRatio:  window.innerWidth<768?1.3:1.5,
                objectFit: "cover"
            }} alt=""/>
          </div>

          <div style={{
            display:"flex",
            alignItems: "center"
          }}>
            <img src={rx73} style={{
                width:"100%",
                aspectRatio:  window.innerWidth<768?1.3:1.5,
                objectFit: "cover"
            }} alt=""/>
          </div>

          <div style={{
            display:"flex",
            alignItems: "center"
          }}>
            <img src={rx74} style={{
                width:"100%",
                aspectRatio:  window.innerWidth<768?1.3:1.5,
                objectFit: "cover"
            }} alt=""/>
          </div>

          <div style={{
            display:"flex",
            alignItems: "center"
          }}>
            <img src={rx75} style={{
                width:"100%",
                aspectRatio:  window.innerWidth<768?1.3:1.5,
                objectFit: "cover"
            }} alt=""/>
          </div>

        </Slider>
      </div>
    );
  }
}