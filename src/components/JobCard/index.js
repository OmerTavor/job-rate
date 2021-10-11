import React from 'react';
import {
  Typography,
  Button,
  Divider,
  Card,
  CardActionArea,
  CardHeader,
  CardContent,
  Paper,
} from '@mui/material';
import styles from './styles';

const JobCard = () => {
  return (
    <Card sx={styles.jobCardStyle}>
      <CardHeader title="Wix.com" subheader="I wanna go home" />
      <CardContent sx={styles.jobCardContentStyle}>
        <Paper elevation={3} sx={styles.gradeStyle}>
          <Typography variant="h4">9.6</Typography>
        </Paper>
        <Divider orientation="vertical" flexItem={true} />
        <CardActionArea sx={styles.jobCardActionAreaStyle}>
          <Button>omer</Button>
          <Button>matan</Button>
        </CardActionArea>
      </CardContent>
    </Card>
  );
};

export default JobCard;
