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
import { borderColor, Box } from '@mui/system';

const JobCard = () => {
  return (
    <Card sx={styles.jobCardStyle}>
      <CardHeader title="Wix.com" subheader="I wanna go home" />
      <CardContent sx={styles.jobCardContentStyle}>
        <Paper elevation={3} sx={styles.gradeStyle}>
          <Typography variant="h4">9.6</Typography>
        </Paper>
        <Divider orientation="vertical" flexItem={true} />
        <Box sx={styles.jobCardActionContainerStyle}>
          <Button variant="outlined" sx={styles.buttonStyle}>view</Button>
          <Button variant="outlined" sx={styles.buttonStyle}>edit</Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default JobCard;
