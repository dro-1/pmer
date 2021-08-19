import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import LoginPage from "./pages/login.page";
import HomePage from "./pages/home.page";
import SignupPage from "./pages/signup.page";

const App = ({ isSignedIn }) => {
  const PrivateRoute = (props) => {
    return isSignedIn ? <Route {...props} /> : <Redirect to="/login" />;
  };

  const PublicRoute = (props) => {
    return isSignedIn ? <Redirect to="/" /> : <Route {...props} />;
  };

  return (
    <Switch>
      <PrivateRoute path="/" exact component={HomePage} />
      <PublicRoute path="/login" exact component={LoginPage} />
      <PublicRoute path="/signup" exact component={SignupPage} />
    </Switch>
  );
};

export default App;
