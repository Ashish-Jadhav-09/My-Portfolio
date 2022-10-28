import { Avatar } from '@mui/material';
import React, { useCallback } from 'react';
import { useState, useRef, useEffect } from 'react';
import { avtar, avtarDiv, contentDiv, github, homeDiv, instagram, linkedin } from './style';

const img1 = require('../../assets/me.jpeg');
const img2 = require('../../assets/photography.jpg');
const img3 = require('../../assets/treakking.jpeg');
const img4 = require('../../assets/travelling.jpg');
const img5 = require('../../assets/temple.jpg');

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
    <div
      style={homeDiv}
    >
      <div
        style={contentDiv}
      >
        <b style={{ fontSize: 40, fontFamily: 'initial' }}>
          Hello, folks! I'm Ashish Jadhav
        </b>
        <br />
        <b style={{ fontSize: 20, fontFamily: 'initial' }}>
          I'm a Full stack Developer.
        </b>
        <br />
        <b style={{ fontSize: 17, fontFamily: 'monospace' }}>
          I always say empty glass Attitude.🤗📚 During the weekends
          <br />
          I enjoy Travelling, Treaking, Photography and surfing
          <br /> on Internet. I am a person who thirves in a fast paced
          environment.
          <br />
          🎯 2022 Goals: Learn more about MERN stack and many more.
        </b>
        <br />
        <br />
        <br />
        <div>
          <a href="https://www.linkedin.com/in/ashish-jadhav-a3550419a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BjYu7abEkQeW%2BCM5GVzvoBw%3D%3D">
            <img
              style={linkedin}
              alt={require('../../assets/LinkedIn_icon_circle.png')}
              src={require('../../assets/LinkedIn_icon_circle.png')}
            />
          </a>
          <a href="https://www.instagram.com/the_mr.aj/">
            <img
              style={instagram}
              alt={require('../../assets/instagram.png')}
              src={require('../../assets/instagram.png')}
            />
          </a>
          <a href="https://github.com/Ashish-Jadhav-09">
            <img
              style={github}
              alt={require('../../assets/git.png')}
              src={require('../../assets/git.png')}
            />
          </a>
        </div>
      </div>
      <div
        style={avtarDiv}
      >
        <Avatar
          style={avtar}
          key={images[currentSlide]}
          alt={images[currentSlide]}
          src={images[currentSlide]}
        />
      </div>
    </div>
  );
};

export default Home;
