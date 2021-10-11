import React from 'react';
import { List, ListItem } from '@mui/material';
import JobCard from '../JobCard';
import styles from './styles';

const JobCardList = () => {
  //   const renderJobCards = () => {

  //   };

  return (
    <List sx={styles.jobsListStyle}>
      <ListItem>
        <JobCard />
      </ListItem>
      <ListItem>
        <JobCard />
      </ListItem>
      <ListItem>
        <JobCard />
      </ListItem>
      <ListItem>
        <JobCard />
      </ListItem>
      <ListItem>
        <JobCard />
      </ListItem>
      <ListItem>
        <JobCard />
      </ListItem>
      <ListItem>
        <JobCard />
      </ListItem>
      <ListItem>
        <JobCard />
      </ListItem>
      <ListItem>
        <JobCard />
      </ListItem>
      <ListItem>
        <JobCard />
      </ListItem>

    </List>
  );
};

export default JobCardList;
