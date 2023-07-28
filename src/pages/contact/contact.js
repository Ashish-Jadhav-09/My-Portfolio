import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import React from 'react';
import { github, instagram, linkedin } from '../home/style';
import StarIcon from '@mui/icons-material/StarBorder';
import './style.css';

const Contact = ({ setValue }) => {
  const cards = [
    {
      title: 'Linkedin',
      description: ['Go to my linkedIn profile'],
      image: require('../../assets/linkedin.png'),
      link: 'https://www.linkedin.com/in/ashish-jadhav-a3550419a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BjYu7abEkQeW%2BCM5GVzvoBw%3D%3D',
    },
    {
      title: 'Email',
      description: ['Send Email', 'jadhavashish228@gmail.com'],
      image: require('../../assets/gmail.png'),
      link: 'mailto:jadhavashish228@gmail.com',
    },
    {
      title: 'Location',
      description: ['Pune India'],
      image: require('../../assets/location.png'),
    },
  ];

  const footers = [
    {
      title: 'About',
      description: [
        'Hi, I am passionate Software Developer based in India. Welcome to my portfolio!. Thank you for visiting my portfolio, and I look forward to connecting with you!',
      ],
    },
    {
      title: 'Links',
      description: ['Home', 'About', 'Timeline', 'Skills'],
    },
    {
      title: 'Expertize',
      description: ['Check Expertize'],
    },
    {
      title: 'Any Questions?',
      description: ['jadhavashish228@gmail.com'],
    },
  ];

  return (
    <div sx={{ py: 6 }} maxWidth="md">
      <Typography
        sx={{ pb: 0, pt: 6 }}
        className="mySkills"
        fontSize={40}
        fontWeight={900}
      >
        Contact Me
      </Typography>
      <Container
        disableGutters
        maxWidth="sm"
        component="main"
        sx={{ pt: 8, pb: 6 }}
      >
        <Typography variant="h5" align="center" color="#fff" component="p">
          "Feel free to contact me for any questions, partnerships, or projects.
          Looking forward to connecting with you and discussing opportunities!"
        </Typography>
      </Container>
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {cards.map((card) => (
            <Grid
              item
              key={card.title}
              xs={12}
              sm={card.title === 'Enterprise' ? 12 : 6}
              md={4}
            >
              <Card
                sx={{
                  backgroundColor: '#0d0c0d',
                  color: '#eb523d',
                }}
                className="card"
              >
                <CardHeader
                  title={card.title}
                  titleTypographyProps={{ align: 'center' }}
                  action={card.title === 'Email' ? <StarIcon /> : null}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 8,
                      mt: card.title === 'Email' ? 6 : 2,
                    }}
                  >
                    <img
                      src={card.image}
                      alt={card.image}
                      style={{
                        height: 60,
                        width: 60,
                        marginBottom: card.title === 'Email' ? 8 : 2,
                      }}
                    />
                  </Box>
                  {card.description.map((line) => (
                    <Typography
                      component="span"
                      style={{ display: 'flex', justifyContent: 'center' }}
                      key={line}
                    >
                      <a href={card?.link} style={{ textDecoration: 'none' }}>
                        {line}
                      </a>
                    </Typography>
                  ))}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Container
        maxWidth="xl"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
        }}
      >
        <Grid container spacing={0} justifyContent="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={12} sm={2} key={footer.title}>
              <Typography
                color="#eb523d"
                gutterBottom
                style={{ fontSize: 25, marginRight: '-20px' }}
              >
                <b>{footer.title}</b>
              </Typography>
              {footer.description.map((item, index) => (
                <Typography
                  key={item}
                  style={{ textAlign: 'left', color: 'white' }}
                  onClick={() => {
                    if (footer.title === 'Links') {
                      setValue(index === 3 ? 4 : index);
                    }
                    if (footer.title === 'Expertize') {
                      setValue(3);
                    }
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Grid>
          ))}
        </Grid>
      </Container>
      <div style={{ marginLeft: '110px' }}>
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
            alt={require('../../assets/insta.png')}
            src={require('../../assets/insta.png')}
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
      <Typography variant="body2" color="white" align="center" sx={{ mt: 5 }}>
        {'Copyright © '}
        {new Date().getFullYear()}
        {' All Rights Reserved'}
      </Typography>
    </div>
  );
};

export default Contact;