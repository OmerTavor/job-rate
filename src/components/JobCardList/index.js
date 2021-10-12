import React from 'react';
import { List, ListItem } from '@mui/material';
import JobCard from '../JobCard';
import styles from './styles';

const JobCardList = ({ jobCardListData }) => {
  const renderJobCards = () => {
    return jobCardListData.map((jobCardData) => {
      return (
        <ListItem key={jobCardData.id}>
          <JobCard
            companyName={jobCardData.companyName}
            grade={jobCardData.grade}
          />
        </ListItem>
      );
    });
  };

  return <List sx={styles.jobsListStyle}>{renderJobCards()}</List>;
};

export default JobCardList;
