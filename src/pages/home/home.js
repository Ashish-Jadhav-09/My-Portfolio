import { Avatar, Typography } from "@mui/material";
import React, { useCallback, useState, useRef, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import "./style.css";

const img1 = require("../../assets/me.jpeg");
const img2 = require("../../assets/photography.jpg");
const img3 = require("../../assets/treakking.jpeg");
const img4 = require("../../assets/travelling.jpg");
const img5 = require("../../assets/temple.jpg");

const images = [img1, img2, img3, img4, img5];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  let sliderInterval = useRef();
  let switchImages = useCallback(() => {
    if (currentSlide < images.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setCurrentSlide(0);
    }
  }, [currentSlide]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    sliderInterval = setInterval(() => {
      switchImages();
    }, 3000);
    return () => clearInterval(sliderInterval);
  }, [images.length, currentSlide]);

  return (
    <>
      <div className="container">
        <div className="responsiveDiv1">
          <div className="name-div">
            <div>
              <Typography className="name-div-text">Hello, folks!</Typography>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <Typography className="iam-div-text">I'm</Typography>
              <Typography className="name-text">Ashish Jadhav</Typography>
            </div>
          </div>
          <div className="bio-div">
            <Typography className="bio-div-initial-text">I'm a</Typography>
            <Typography className="bio-div-type-writer">
              <Typewriter
                words={["Full Stack Developer"]}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                loop={0}
              />
            </Typography>
          </div>
          <br />
          <Typography className="bio-div-text">
            I always say empty glass Attitude.🤗📚 During the weekends&nbsp; I
            enjoy Travelling, Treaking, Photography and surfing &nbsp;on
            Internet. I am a person who thirves in a fast paced environment.
            <br />
            🎯 2023 Goals: Learn more about MERN stack and many more.
          </Typography>
          <div className="contact-image-div">
            <a href="https://www.linkedin.com/in/ashish-jadhav-a3550419a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BjYu7abEkQeW%2BCM5GVzvoBw%3D%3D">
              <img
                className="linkedin"
                alt={require("../../assets/LinkedIn_icon_circle.png")}
                src={require("../../assets/LinkedIn_icon_circle.png")}
              />
            </a>
            <a href="https://www.instagram.com/the_mr.aj/">
              <img
                className="instagram"
                alt={require("../../assets/insta.png")}
                src={require("../../assets/insta.png")}
              />
            </a>
            <a href="https://github.com/Ashish-Jadhav-09">
              <img
                className="github"
                alt={require("../../assets/git.png")}
                src={require("../../assets/git.png")}
              />
            </a>
          </div>
        </div>
        <div className="responsiveDiv2">
          <Avatar
            className="avtar"
            key={images[currentSlide]}
            alt={images[currentSlide]}
            src={images[currentSlide]}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
