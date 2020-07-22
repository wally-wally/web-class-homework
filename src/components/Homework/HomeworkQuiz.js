import React from 'react';
import './HomeworkQuiz.scss';
import { withRouter } from 'react-router-dom';

const HomeworkQuiz = ({ match }) => {
  const { classTitle, quizId } = match.params;
  const homeworkList = require(`../../assets/json/homework/${classTitle}.json`);
  const selectQuiz = homeworkList[Number(quizId - 1)].quiz;

  return (
    <article>
      {selectQuiz[0].quiz_id}
    </article>
  );
};

export default withRouter(HomeworkQuiz);