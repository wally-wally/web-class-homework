import React, { Fragment } from 'react';
import './App.scss';
import { Route, Switch, withRouter } from 'react-router-dom';
import Main from './components/Main/Main';
import NotFound from './components/Common/NotFound';
import HomeworkList from './components/Homework/HomeworkList';
import HomeworkQuiz from './components/Homework/HomeworkQuiz';
import Header from './components/Common/Header';

const App = ({ location }) => {
  return (
    <Fragment>
      <Header url={location.pathname} />
      <section>
        <Switch>
          <Route path="/" component={Main} exact />
          <Route path="/:classTitle" component={HomeworkList} exact />
          <Route path="/:classTitle/quiz/:quizId" component={HomeworkQuiz} exact />
          <Route component={NotFound} />
        </Switch>
      </section>
    </Fragment>
  );
};

export default withRouter(App);