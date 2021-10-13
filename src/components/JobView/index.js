import { Box, Typography, Paper, List, Divider, ListItem } from '@mui/material';
import JobViewSection from '../JobViewSection';
import { redYellowGreenColorScale } from '../../assets/colorScale';
import styles from './styles';

const JobView = (props) => {
  const determineGradeColor = (_grade) => {
    return redYellowGreenColorScale.getColor(_grade).toHexString();
  };
  const renderJobViewList = (_jobQAArray) => {
    return _jobQAArray.map((qaItem, index) => {
      return (
        <Box sx={{ width: '100%' }}>
          <ListItem key={index} sx={styles.jobViewListItemStyle}>
            <JobViewSection
              questionDetail={qaItem.questionDetail}
              isGolden={qaItem.isGolden}
              grade={qaItem.grade}
              note={qaItem.note}
            />
          </ListItem>
          {index !== _jobQAArray.length - 1 ? <Divider />: null}
        </Box>
      );
    });
  };

  return (
    <Box sx={styles.jobViewContainer}>
      <Box sx={styles.jobViewHeader}>
        <Typography sx={styles.typographyHeader}>
          {props.jobQA.companyName}
        </Typography>
      </Box>
      <List sx={styles.jobViewListStyle}>
        {renderJobViewList(props.jobQA.QA)}
      </List>
      <Box sx={styles.jobViewFooter}>
        <Typography sx={styles.finalGradeTypographyStyle}>
          Final Grade:
        </Typography>
        <Paper
          elevation={3}
          sx={{
            ...styles.finalGradePaperStyles,
            ...{ backgroundColor: determineGradeColor(props.jobQA.finalGrade) },
          }}
        >
          <Typography variant="h5">{props.jobQA.finalGrade}</Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default JobView;
