import React, { useState, useEffect, Fragment, useRef} from 'react';
import qs from 'qs';
import './HomeworkQuiz.scss';
import { AiOutlineOrderedList } from 'react-icons/ai';
import { withRouter } from 'react-router-dom';
import { showQuizType } from '../../utils/showQuizType';
import { adjustTwoDigit } from '../../utils/adjustTwoDigit';
import axios from 'axios';

const HomeworkQuiz = ({ match, location, history }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true
  });
  const quizCount = query.quizcount;
  const nowQuizNumber = useRef(null);
  const nowQuizQuestion = useRef(null);
  const nowQuizImage = useRef(null);
  const [nowQuizId, setNowQuizId] = useState(0);
  const { classTitle, homeworkId } = match.params;

  const changeQuizId = nextStatus => {
    setNowQuizId(nowQuizId + nextStatus);
    window.scrollTo(0, 0);
  }

  const goHomeworkList = () => {
    history.push(`/${match.url.split('/').slice(1, 2).join()}`);
  }

  useEffect(() => {
    if (nowQuizNumber.current) {
      axios.get(`/homework/${classTitle}.json`)
        .then(res => {
          const result = res.data[homeworkId - 1].quiz[nowQuizId - 1];
          // 퀴즈 번호, 유형
          nowQuizNumber.current.innerText = null;
          nowQuizNumber.current.innerText += `Question ${result.quiz_id} (${showQuizType(result.quiz_type)})`;
          // 퀴즈 문제
          nowQuizQuestion.current.innerText = null;
          nowQuizQuestion.current.innerText += result.question;
          // 퀴즈 이미지
          nowQuizImage.current.innerHTML = null;
          if (result.img) {
            nowQuizImage.current.innerHTML += `
              <img src="${result.img}" alt="${result.quiz_id}번 퀴즈 이미지">
            `;
          };
        })
    }
  });

  return (
    <div className="quiz-card">
      {!nowQuizId
        ? (
            <article>
              <p><AiOutlineOrderedList /></p>
              <p className="quiz-title">
                {`${adjustTwoDigit(homeworkId)}_homework Quiz`}
              </p>
              <p className="quiz-count">
                {`(${quizCount} Questions)`}
              </p>
              <button
                className="start-button"
                onClick={() => setNowQuizId(nowQuizId + 1)}
              >Start Quiz</button>
            </article>
          )
        : (
            <Fragment>
              <div className="quiz-number" ref={nowQuizNumber}></div>
              <div className="quiz-question" ref={nowQuizQuestion}></div>
              <div className="quiz-image" ref={nowQuizImage}></div>
              <div className="quiz-buttons">
                <div>
                  <button
                    className="homework-list-button"
                    onClick={goHomeworkList}
                  >Go Homework List</button>
                </div>
                <div>
                  {nowQuizId > 1 &&
                    <button
                      className="prev-quiz-button"
                      onClick={() => changeQuizId(-1)}
                    >Previous Quiz</button>}
                  {nowQuizId < quizCount &&
                    <button
                      className="next-quiz-button"
                      onClick={() => changeQuizId(1)}
                    >Next Quiz</button>}
                </div>
              </div>
            </Fragment>
          )
      }
    </div>
  );
};

export default withRouter(HomeworkQuiz);