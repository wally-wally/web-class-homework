import React from 'react';
import './ClassCard.scss';
import { Link } from 'react-router-dom';
import { adjustTwoDigit } from '../../utils/adjustTwoDigit';

const ClassCard = ({ classId, classTitle, openClass }) => {
  const showAlert = () => alert('준비 중인 강의입니다.');

  return (
    <div className="card-wrapper">
      {openClass
        ? <Link to={`/${classTitle.toLowerCase()}`}>
            <div className="class-card">
              <h2>Phase {adjustTwoDigit(classId)}</h2>
              <p>{classTitle}</p>
            </div>
          </Link>
        : <div className="class-card" onClick={showAlert}>
            <h2>Phase {adjustTwoDigit(classId)}</h2>
            <p>{classTitle}</p>
          </div>
      }
    </div>
  );
};

export default ClassCard;