import React from 'react';
import JobCard from '../../components/JobCard';
import styles from './styles.module.css';

const HomePage = () => {
  return (
    <div className={styles.homePageStyle}>
      {/* <div className={`${styles.jobsListStyle} ${styles.extra}`}> */}
      <div className={styles.jobsListStyle}>
        <JobCard />
      </div>
    </div>
  );
};

export default HomePage;
