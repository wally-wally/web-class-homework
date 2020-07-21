import React from 'react';
import { BsExclamationDiamondFill } from "react-icons/bs";
import './NotFound.scss';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="not-found">
      <BsExclamationDiamondFill />
      <p>이 페이지는 없는 페이지 입니다.</p>
      <Link to="/">메인으로</Link>
    </div>
  );
};

export default NotFound;