import React from 'react';
import { Container, Grid, LinearProgress, Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import './style.css';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& .MuiLinearProgress-barColorPrimary': {
      backgroundColor: '#eb523d',
    },
    '& .MuiLinearProgress-bar': {
      backgroundColor: '#eb523d',
    },
  },
}));

const Skills = () => {
  const classes = useStyles();

  const skillsData = [
    {
      skill: 'MongoDB',
      progress: 80,
    },
    {
      skill: 'ExpressJS',
      progress: 70,
    },
    {
      skill: 'ReactJS',
      progress: 80,
    },
    {
      skill: 'NodeJS',
      progress: 90,
    },
    {
      skill: 'GraphQL',
      progress: 80,
    },
    {
      skill: 'System Design and Development',
      progress: 70,
    },
    {
      skill: 'JavaScript',
      progress: 90,
    },
    {
      skill: 'Typescript',
      progress: 80,
    },
    {
      skill: 'NestJS',
      progress: 70,
    },
    {
      skill: 'NextJS',
      progress: 70,
    },
    {
      skill: 'MySQL',
      progress: 50,
    },
    {
      skill: 'Oracle',
      progress: 40,
    },
    {
      skill: 'CMS(Strapi)',
      progress: 40,
    },
    {
      skill: 'Docker',
      progress: 30,
    },
    {
      skill: 'Jest',
      progress: 80,
    },
    {
      skill: 'Java',
      progress: 60,
    },
  ];

  return (
    <Container sx={{ py: 6 }} maxWidth="md">
      <Typography
        sx={{ pb: 3, mt: 12 }}
        className="mySkills"
        fontSize={40}
        fontWeight={900}
      >
        My Skills
      </Typography>
      <Grid container spacing={5}>
        {skillsData.map((element, index) => (
          <Grid
            item
            key={`skills${index+1}`}
            xs={12}
            sm={6}
            md={6}
            className={classes.root}
          >
            <Typography className="skillTitle" fontSize={20}>
              {element.skill}
              {` (${element.progress}%)`}
            </Typography>
            <LinearProgress
              className="skillProgress"
              variant="determinate"
              value={element.progress}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Skills;
