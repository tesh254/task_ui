import setAuthToken from "../../../helpers/setAuthToken";
import { AUTH } from "../../type";

// Set logged in user
export const setCurrentUser = decoded => async dispatch => {
  if (decoded) {
    dispatch({
      type: AUTH,
      payload: {
        isAuthenticated: true
      }
    });
  } else {
    dispatch({
      type: AUTH,
      payload: {
        isAuthenticated: false
      }
    });
  }
};

// Log user out
export const logoutUser = () => dispatch => {
  // Remove token from localStorage
  localStorage.removeItem("jwt_token");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser(false));
};
