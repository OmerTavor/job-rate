import { Typography, Paper, Box } from '@mui/material';
import NoteIcon from '@mui/icons-material/Article';
import QIcon from '@mui/icons-material/Search';
import styles from './styles';

const JobViewSection = (props) => {
  return (
    <Box sx={styles.sectionContainerStyle}>
      <QIcon sx={styles.qIconStyle} />
      <Typography sx={styles.questionTypograpghyStyle} variant="h6">
        High level of flexibility at work (home / office, arrival / departure)?
      </Typography>
      <Paper elevation={3} sx={styles.gradePaperStyles}>
        <Typography variant="h5">9.6</Typography>
      </Paper>
      <NoteIcon sx={styles.noteIconStyle} />
      <Typography sx={styles.noteTypographyStyle}>
        "
        {`work from home option 3/5 fmkmf mjfkdjf kjfdkijf fdkjfds jfkedjf lkfd`}
        "
      </Typography>
    </Box>
  );
};

export default JobViewSection;
