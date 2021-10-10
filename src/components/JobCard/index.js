import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardActions,
  CardHeader,
  CardContent,
  Paper,
} from '@mui/material';
import styles from './styles';

const JobCard = () => {
  return (
    <Card sx={styles.jobCardStyle}>
      <CardHeader title="Wix.com" subheader="I wanna go home" />
      <Box sx={styles.gradeContainerStyle}>
        <Paper elevation={3} sx={styles.gradeStyle}>
          <Typography variant="h4">9.6</Typography>
        </Paper>
      </Box>
    </Card>
  );
};

export default JobCard;
