import React from 'react';
import JobCardList from '../../components/JobCardList';
import styles from './styles.module.css';

const HomePage = () => {
  return (
    <div className={styles.homePageStyle}>
      {/* <div className={`${styles.jobsListStyle} ${styles.extra}`}> */}
      <div className={styles.jobsListContainerStyle}>
        <JobCardList />
      </div>
    </div>
  );
};

export default HomePage;
