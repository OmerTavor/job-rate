import { questionsBank } from '../data/questionBank';
import { jobQA } from '../data/jobQA';

const findFittingQustionDetail = (_questionId) => {
  return questionsBank.find(
    (questionItem) => questionItem.questionId === _questionId
  ).questionDetail;
};

const getFullQAArray = (_QAArray) => {
  return _QAArray.map((qaItem) => {
    return {
      questionDetail: findFittingQustionDetail(qaItem.questionId),
      isGolden: qaItem.isGolden,
      grade: qaItem.grade,
      note: qaItem.note ? qaItem.note : '',
    };
  });
};

const getFullJobQA = () => {
  return {
    id: jobQA.id,
    companyName: jobQA.companyName,
    finalGrade: jobQA.finalGrade,
    QA: getFullQAArray(jobQA.QA),
  };
};

export { getFullJobQA };
