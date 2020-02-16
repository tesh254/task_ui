import { LOGIN_SUCCESS, ERROR, LOADING, AUTH } from "../type";

export let initialState = {
  message: "",
  token: "",
  isAuthenticated: false,
  isLoading: false
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        isLoading: true
      };
    case AUTH:
      return {
        isAuthenticated: action.payload.isAuthenticated
      };
    case LOGIN_SUCCESS:
      let token;

      token = action.payload.accessToken;
      localStorage.setItem("jwt_token", token);
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        token
      };
    case ERROR:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};

export default loginReducer;
