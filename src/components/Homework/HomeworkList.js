import React from 'react';
import './HomeworkList.scss';
import { adjustTwoDigit } from '../../utils/adjustTwoDigit';
import { Link } from 'react-router-dom';

const HomeworkList = ({ match }) => {
  const { classTitle } = match.params;
  const homeworkList = require(`../../assets/json/homework/${classTitle}.json`);
  const recentlyHomeworkList = homeworkList.sort((a, b) => b.id - a.id);

  const openPracticeUrl = url => window.open(url);

  return (
    <ol>
      {recentlyHomeworkList.map(homework => (
        <li className="homework-item" key={homework.id}>
          <div className="homework-item-info">
            <span className="homework-item-date">
              <small>{homework.created_at.split('-')[0]}</small>
              <p>{homework.created_at.slice(5)}</p>
            </span>
            <span className="homework-item-title">
              {`${adjustTwoDigit(homework.id)}_homework`}
            </span>
          </div>
          <div className="homework-item-buttons">
            {homework.quiz.length
              ? (<Link
                  className="homework-item-button"
                  to={`/${classTitle}/quiz/${homework.id}?quizcount=${homework.quiz.length}`}
                >Quiz</Link>)
              : (<span
                  className="homework-item-button disabled-button"
                >Quiz</span>)
            }
            {homework.practice.length
              ? (<button
                  className="homework-item-button"
                  onClick={() => openPracticeUrl(homework.practice[0])}
                >Practice</button>)
              : (<span
                  className="homework-item-button disabled-button"
                >Practice</span>)
            }
          </div>
        </li>
      ))}
    </ol>
  );
};

export default HomeworkList;