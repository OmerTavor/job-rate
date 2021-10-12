import { List, Divider, ListItem } from '@mui/material';
import JobViewSection from '../JobViewSection';
import styles from './styles';

const JobView = (props) => {
  return (
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
  );
};

export default JobView;
