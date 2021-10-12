import React from 'react';
import { Switch, Route } from 'react-router-dom';
import JobRateAppBar from './components/JobRateAppBar';
import HomePage from './pages/HomePage';
import ViewPage from './pages/ViewPage';

const App = () => {
  return (
    <div className="defaultAppPage">
      <JobRateAppBar />
      <Switch>
        <Route path="/view" exact>
          <ViewPage />
        </Route>
        <Route path="/" exact>
          <HomePage />
        </Route>
        {/* <Route path="/*" exact>
          <h1>GGG</h1>
        </Route> */}
      </Switch>
    </div>
  );
};

export default App;
