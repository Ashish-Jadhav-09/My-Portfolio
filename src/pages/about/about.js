import React from 'react';
import { Container, Typography } from '@mui/material';
import './styles.css';

const About = () => {
  return (
    <div className="mainContainter image-div">
      <Container maxWidth="lg" className="content-overlap">
        <Typography
          className="aboutContent"
          component="h1"
          variant="h2"
          gutterBottom
        >
          About Me
        </Typography>
        <Typography variant="h6" color="white" sx={{ mb: 5, ml: 40 }}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Hi, I'm
          passionate Software Developer based in India. Welcome to my portfolio!
          I am dedicated to continuous learning and constantly strive to stay
          updated with the latest industry trends and technologies. I am always
          open to exciting opportunities, collaborations, and new projects. If
          you would like to get in touch, feel free to [Provide Contact
          Information or Link to Contact Page]. Thank you for visiting my
          portfolio, and I look forward to connecting with you!
        </Typography>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'right',
          }}
        >
          <Typography
            variant="body1"
            color="white"
            style={{ marginRight: '50px' }}
          >
            Name :{' '}
          </Typography>
          <Typography
            variant="body1"
            color="white"
            style={{ marginLeft: '15px', marginRight: '135px' }}
          >
            Ashish Jadhav
          </Typography>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'right',
          }}
        >
          <Typography variant="body1" color="white">
            Date of birth :{' '}
          </Typography>
          <Typography
            variant="body1"
            color="white"
            style={{ marginRight: '190px', marginLeft: '20px' }}
          >
            Dec 09
          </Typography>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'right',
          }}
        >
          <Typography
            variant="body1"
            color="white"
            style={{ marginRight: '40px' }}
          >
            Address :{' '}
          </Typography>
          <Typography
            variant="body1"
            color="white"
            style={{ marginRight: '53px', marginLeft: '9px' }}
          >
            Pune, Maharashtra, India.
          </Typography>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'right',
          }}
        >
          <Typography variant="body1" color="white">
            Email :{' '}
          </Typography>
          <Typography
            variant="body1"
            color="white"
            style={{ marginRight: '28px', marginLeft: '68px' }}
          >
            jadhavashish228@gmail.com
          </Typography>
        </div>
      </Container>
    </div>
  );
};

export default About;
