import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import Main from './components/Main/Main';
import NotFound from './components/Common/NotFound';
import HomeworkList from './components/Homework/HomeworkList';

const index = () => {
  return (
    <div id="app">
      <h1>Web-Class Homework</h1>
      <hr />
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/:classTitle" component={HomeworkList} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default index;