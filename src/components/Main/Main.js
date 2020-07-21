import React from 'react';
import ClassCard from './ClassCard';
import './Main.scss';

const Main = () => {
  return (
    <div className="web-classes">
      <ClassCard classId={1} classTitle="web-starter" />
      <ClassCard classId={2} classTitle="JS-starter" />
      <ClassCard classId={3} classTitle="web-intermediate" />
      <ClassCard classId={4} classTitle="web-advanced" />
    </div>
  );
};

export default Main;