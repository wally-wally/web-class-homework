import React from 'react';
import './HomeworkList.scss';

const HomeworkList = ({ match }) => {
  const { classTitle } = match.params;

  return (
    <div>
      {classTitle}
    </div>
  );
};

export default HomeworkList;