import React from "react";
import { Container, Typography } from "@mui/material";
import "./styles.css";

const About = () => {
  return (
    <div className="aboutDiv">
      <div className="image-div">
        <Container className="content-overlap">
          <Typography
            className="aboutContent"
            component="h1"
            variant="h2"
            gutterBottom
          >
            About Me
          </Typography>
          <Typography className="aboutMainContent" variant="h6" color="white">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Hi, I'm
            passionate Software Developer based in India. I am dedicated to
            continuous learning and constantly strive to stay updated with the
            latest industry trends and technologies. I am always open to
            exciting opportunities, collaborations, and new projects. If you
            would like to get in touch, feel free to contact. Thank you for
            visiting my portfolio, and I look forward to connecting with you!
          </Typography>
          <div className="detail-div">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "right",
              }}
            >
              <Typography
                variant="body1"
                color="white"
                style={{ marginRight: "50px" }}
              >
                Name :{" "}
              </Typography>
              <Typography
                variant="body1"
                color="white"
                style={{ marginLeft: "15px", marginRight: "135px" }}
              >
                Ashish Jadhav
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "right",
              }}
            >
              <Typography variant="body1" color="white">
                Date of birth :{" "}
              </Typography>
              <Typography
                variant="body1"
                color="white"
                style={{ marginRight: "190px", marginLeft: "20px" }}
              >
                Dec 09
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "right",
              }}
            >
              <Typography
                variant="body1"
                color="white"
                style={{ marginRight: "40px" }}
              >
                Address :{" "}
              </Typography>
              <Typography
                variant="body1"
                color="white"
                style={{ marginRight: "53px", marginLeft: "9px" }}
              >
                Pune, Maharashtra, India.
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "right",
              }}
            >
              <Typography variant="body1" color="white">
                Email :{" "}
              </Typography>
              <Typography
                variant="body1"
                color="white"
                style={{ marginRight: "28px", marginLeft: "68px" }}
              >
                jadhavashish228@gmail.com
              </Typography>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default About;
