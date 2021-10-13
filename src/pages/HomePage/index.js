import React from 'react';
import JobCardList from '../../components/JobCardList';
import styles from './styles.module.css';

const jobCardsDummyData = [
  {
    id: '1',
    companyName: 'Wix.com',
    grade: 7,
  },
  {
    id: '2',
    companyName: 'Facebook',
    grade: 4.5,
  },
  {
    id: '3',
    companyName: 'Google',
    grade: 6.2,
  },
  {
    id: '4',
    companyName: 'Taboola',
    grade: 4.8,
  },
  {
    id: '5',
    companyName: 'Amazon',
    grade: 2.5,
  },
  {
    id: '6',
    companyName: 'Vim',
    grade: 5.5,
  },
  {
    id: '7',
    companyName: 'Palo Alto Networks',
    grade: 3.7,
  },
];

const HomePage = () => {
  return (
    <div className={styles.homePageStyle}>
      {/* <div className={`${styles.jobsListStyle} ${styles.extra}`}> */}
      <div className={styles.jobsListContainerStyle}>
        <JobCardList jobCardListData={jobCardsDummyData} />
      </div>
    </div>
  );
};

export default HomePage;
