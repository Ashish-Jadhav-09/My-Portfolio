import React from 'react';
import { Container, Typography } from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { TimelineOppositeContent } from '@mui/lab';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import ClassOutlinedIcon from '@mui/icons-material/ClassOutlined';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';

const MyTimeline = () => {
  return (
    <Container sx={{ py: 6 }} maxWidth="md">
      <Typography
        sx={{ pb: 3 }}
        className="mySkills"
        fontSize={40}
        fontWeight={900}
      >
        Timeline...
      </Typography>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            color="white"
          >
            Education (Aug 2017 - Aug 2021)
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <HistoryEduIcon fontSize="large" />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h5" component="span" color="#eb523d">
              BACHELOR OF TECHNOLOGY
            </Typography>
            <br />
            <Typography variant="h9" color="white">
              COMPUTER SCIENCE AND ENGINEERING
            </Typography>
            <Typography color="white">
              Yashoda Technical Campus, Satara.
            </Typography>
            <Typography color="#eb523d">Grad. 2021 CGPA: 7.96</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="white"
          >
            Campus Placement (Aug 2021 - Nov 2021)
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="secondary">
              <ClassOutlinedIcon fontSize="large" />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h5" component="span" color="#eb523d">
              CYBER SUCCESS
            </Typography>
            <br />
            <Typography variant="h9" color="white">
              TRAINING INSTITUTE
            </Typography>
            <Typography color="#eb523d">Java Developer</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            color="white"
          >
            Working (Dec 2021 - Till Now)
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="success">
              <WorkOutlineIcon fontSize="large" />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h5" component="span" color="#eb523d">
              Associate Engineer
            </Typography>
            <br />
            <Typography variant="h9" color="white">
              MERN Stack Developer
            </Typography>
            <Typography color="white">
              SUCCESSIVE DIGITAL PVT. LTD. PUNE, INDIA
            </Typography>
            <Typography color="#eb523d">Problem Solver</Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Container>
  );
};

export default MyTimeline;
