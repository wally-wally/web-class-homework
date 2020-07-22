import React from 'react';
import ClassCard from './ClassCard';
import './Main.scss';

const Main = () => {
  return (
    <div className="web-classes">
      <ClassCard classId={1} classTitle="web-starter" openClass={true} />
      <ClassCard classId={2} classTitle="JS-starter" openClass={false} />
      <ClassCard classId={3} classTitle="web-intermediate" openClass={false} />
      <ClassCard classId={4} classTitle="web-advanced" openClass={false} />
    </div>
  );
};

export default Main;