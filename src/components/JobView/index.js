import { Box, Typography, Paper, List, Divider, ListItem } from '@mui/material';
import JobViewSection from '../JobViewSection';
import styles from './styles';

const JobView = (props) => {
  return (
    <Box sx={styles.jobViewContainer}>
      <Box sx={styles.jobViewHeader}>
        <Typography sx={styles.typographyHeader}>Facebook</Typography>
      </Box>
      <List sx={styles.jobViewListStyle}>
        <ListItem sx={styles.jobViewListItemStyle}>
          <JobViewSection />
        </ListItem>
        <Divider />
        <ListItem sx={styles.jobViewListItemStyle}>
          <JobViewSection />
        </ListItem>
        <Divider />
        <ListItem sx={styles.jobViewListItemStyle}>
          <JobViewSection />
        </ListItem>
      </List>
      <Box sx={styles.jobViewFooter}>
        <Typography sx={styles.finalGradeTypographyStyle}>
          Final Grade:
        </Typography>
        <Paper elevation={3} sx={styles.finalGradePaperStyles}>
          <Typography variant="h5">9.6</Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default JobView;
