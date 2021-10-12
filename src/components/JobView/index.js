import { Typography, Paper, Box, List, Divider, ListItem } from '@mui/material';
import styles from './styles';

const JobView = (props) => {
  return (
    <List sx={styles.jobViewListStyle}>
      <ListItem sx={styles.jobViewListItemStyle}>
        <Box></Box>
      </ListItem>
      <Divider />
      <ListItem sx={styles.jobViewListItemStyle}>
        <Box></Box>
      </ListItem>
      <Divider />
      <ListItem sx={styles.jobViewListItemStyle}>
        <Box></Box>
      </ListItem>
    </List>
  );
};

export default JobView;
