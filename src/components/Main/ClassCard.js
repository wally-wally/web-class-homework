import React from 'react';
import './ClassCard.scss';
import { Link } from 'react-router-dom';

function adjustTwoDigit(id) {
  return (id <= 9 ? '0' : '') + id
}

const ClassCard = ({ classId, classTitle }) => {
  return (
    <div className="card-wrapper">
      <div className="class-card">
        <Link to={`/${classTitle.toLowerCase()}`}>
          <h2>Phase {adjustTwoDigit(classId)}</h2>
          <p>{classTitle}</p>
        </Link>
      </div>
    </div>
  );
};

export default ClassCard;