import React from 'react';
import JobView from '../../components/JobView';
import styles from './styles.module.css';

const ViewPage = () => {
  return (
    <div className={styles.viewPageStyle}>
      <JobView />
    </div>
  );
};

export default ViewPage;
