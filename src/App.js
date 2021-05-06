import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import JobDescription from "./pages/JobDescription";
import SearchPage from "./pages/SearchPage";

const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route path="/" exact>
          <SearchPage />
        </Route>
        <Route path="/:id" exact>
          <JobDescription />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
