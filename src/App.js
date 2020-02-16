import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import jwt_decode from "jwt-decode";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./bulma.css";

import setAuthToken from "./helpers/setAuthToken";
import store from "./redux/store.js";
import {
  setCurrentUser,
  logoutUser
} from "./redux/actions/auth/setCurrentUser";
import PrivateRoute from "./HOC/PrivateRouter";
import tokenChecker from "./helpers/tokenChecker";

// Components
import Nav from "./components/commons/Nav";
import LoginView from "./views/LoginView";
import TaskView from "./views/TaskView";
import Default from "./Default"

if (localStorage.getItem("jwt_token")) {
  try {
    // Set auth token header auth
    setAuthToken(localStorage.getItem("jwt_token"));
    // Decode token and get its content
    const decoded = jwt_decode(localStorage.getItem("jwt_token"));
    // Set user and isAuthenticate
    store.dispatch(setCurrentUser(true));
    // Check for expired token
    const currentTime = Date.now() / 1000;

    if (decoded.exp < currentTime) {
      store.dispatch(logoutUser());

      // Redirect to login
      window.location.href = "/login";
    }
  } catch (e) {
    console.log(e);
  }
}

class App extends React.Component {
  componentDidMount() {
    // Check token
    tokenChecker();
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <ToastContainer autoClose={3000} />
          <div className="App">
            <Nav />
            <Switch>
              <Route exact path="/login" component={LoginView} />
              <PrivateRoute exact path="/tasks" component={TaskView} />
              <Route exact path="/" component={Default} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
