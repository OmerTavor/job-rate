import { Typography, Paper, Box } from '@mui/material';
import { redYellowGreenColorScale } from '../../assets/colorScale';
import NoteIcon from '@mui/icons-material/Article';
import QIcon from '@mui/icons-material/Search';
import styles from './styles';

const JobViewSection = ({ questionDetail, isGolden, grade, note }) => {
  const determineGradeColor = () => {
    return redYellowGreenColorScale.getColor(grade).toHexString();
  };

  const getColorByIfGolden = () => (isGolden ? '#FFD700' : '#A9A9A9');

  const renderNoteIcon = () => {
    if (note && note !== '') {
      return (
        <NoteIcon
          sx={{ ...styles.noteIconStyle, ...{ color: getColorByIfGolden() } }}
        />
      );
    }
  };

  const renderNoteTypography = () => {
    if (note && note !== '') {
      return <Typography sx={styles.noteTypographyStyle}>"{note}"</Typography>;
    }
  };

  return (
    <Box sx={styles.sectionContainerStyle}>
      <QIcon
        sx={{ ...styles.qIconStyle, ...{ color: getColorByIfGolden() } }}
      />
      <Typography sx={styles.questionTypograpghyStyle} variant="h6">
        {questionDetail}
      </Typography>
      <Paper
        elevation={3}
        sx={{
          ...styles.gradePaperStyles,
          ...{ backgroundColor: determineGradeColor() },
        }}
      >
        <Typography variant="h5">{grade}</Typography>
      </Paper>
      {renderNoteIcon()}
      {renderNoteTypography()}
    </Box>
  );
};

export default JobViewSection;
