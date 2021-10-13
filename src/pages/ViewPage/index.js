import React from 'react';
import JobView from '../../components/JobView';
import { getFullJobQA } from '../../functions/getJobQA.js';
import styles from './styles.module.css';

const ViewPage = () => {
  let jobQA = getFullJobQA();

  return (
    <div className={styles.viewPageStyle}>
      <JobView jobQA={jobQA} />
    </div>
  );
};

export default ViewPage;
