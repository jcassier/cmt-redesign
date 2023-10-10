import React from 'react';
import { 
  BrowserRouter as Router,
  Route,
 } from 'react-router-dom';
import styles from './app.module.css';
import { Header } from './header/header';
import { Body } from './body/body';
import routes from '../constants/routes.json'

export const App: React.FC = (): JSX.Element => {
  const x = true;
  return (
    <div className={styles.appContainer}>
      <Router>
        <Header />
        <Body className={styles.bodyContainer}>
          <Route exact path={routes.HOME}>
            <div>home page !!!</div>
          </Route>
          <Route path={routes.CHAPTER}>
            <div>chapter page</div>
          </Route>
          <Route path={routes.MEMBERS}>
            <div>the who&apos;s who of the chapter</div>
          </Route>
          <Route path={routes.PLEDGING}>
            <div>new member ed</div>
          </Route>
          <Route path={routes.ANNUAL_REPORT}>
            <div>let&apos;s win the schrader</div>
          </Route>
          <Route path={routes.FINANCES}>
            <div>all the monies, y&apos;all</div>
          </Route>
          <Route path={routes.TRAININGS}>
            <div>who&apos;s done their training ?</div>
          </Route>
          <Route path={routes.REGION_METRICS}>
            <div>regional info page</div>
          </Route>
          <Route path={routes.NAT_OFF}>
            <div>NAT OFFS ONLY... shhh</div>
          </Route>
          <Route path={routes.PROFLE}>
            <div>all about me</div>
          </Route>
          <Route path={routes.HELP}>
            <div>all the faqs</div>
          </Route>
          <Route path={routes.LOGIN}>
            <div>log in to see more</div>
          </Route>
        </Body>
      </Router>
    </div>
  );
};
