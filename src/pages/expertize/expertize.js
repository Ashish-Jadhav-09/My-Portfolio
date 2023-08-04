import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import './style.css';

const Expertize = () => {
  const expertizeData = [
    {
      title: 'MongoDB',
      image: require('../../assets/mongoDB.png'),
    },
    {
      title: 'ExpressJS',
      image: require('../../assets/express.png'),
    },
    {
      title: 'ReactJS',
      image: require('../../assets/react.png'),
    },
    {
      title: 'NodeJS',
      image: require('../../assets/nodejs.png'),
    },
    {
      title: 'NestJS',
      image: require('../../assets/nestjs.png'),
    },
    {
      title: 'NextJS',
      image: require('../../assets/nextjs.png'),
    },
    {
      title: 'GraphQL',
      image: require('../../assets/graphql.png'),
    },
    {
      title: 'JavaScript',
      image: require('../../assets/js.png'),
    },
    {
      title: 'Typescript',
      image: require('../../assets/typescript.png'),
    },
    {
      title: 'Java',
      image: require('../../assets/java.png'),
    },
    {
      title: 'Jest',
      image: require('../../assets/jest.png'),
    },
    {
      title: 'MySQL',
      image: require('../../assets/mysql.png'),
    },
  ];

  return (
    <Container sx={{ py: 6 }} maxWidth="md">
      <Typography
        sx={{ pb: 6, mt: 12 }}
        className="myExpertize"
        fontSize={40}
        fontWeight={900}
      >
        Expertize In...
      </Typography>
      <Grid container spacing={4}>
        {expertizeData.map((element, index) => (
          <Grid item key={`element${index + 1}`} xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                color:'white',
                backgroundColor: '#0d0c0d',
              }}
              className="title"
            >
              <CardMedia
                component="div"
                style={{
                  padding: '50px 10px 0px 5px',
                  objectFit: 'cover',
                  height: 70,
                  width: 350,
                }}
                image={element.image}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                >
                  {element.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Expertize;
