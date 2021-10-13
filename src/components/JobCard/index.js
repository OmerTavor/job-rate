import React from 'react';
import {
  Typography,
  Button,
  Divider,
  Card,
  CardHeader,
  CardContent,
  Paper,
  Box,
} from '@mui/material';
import { redYellowGreenColorScale } from '../../assets/colorScale';
import styles from './styles';

const JobCard = (props) => {
  const determineGradeColor = () => {
    return redYellowGreenColorScale.getColor(props.grade).toHexString();
  };

  return (
    <Card sx={styles.jobCardStyle}>
      <CardHeader title={props.companyName} />
      <CardContent sx={styles.jobCardContentStyle}>
        <Paper
          elevation={3}
          sx={{
            ...styles.gradeStyle,
            ...{ backgroundColor: determineGradeColor() },
          }}
        >
          <Typography variant="h4">{props.grade}</Typography>
        </Paper>
        <Divider orientation="vertical" flexItem={true} />
        <Box sx={styles.jobCardActionContainerStyle}>
          <Button variant="outlined" sx={styles.buttonStyle}>
            view
          </Button>
          <Button variant="outlined" sx={styles.buttonStyle}>
            edit
          </Button>
          <Button variant="outlined" color="error" sx={styles.buttonStyle}>
            delete
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default JobCard;
