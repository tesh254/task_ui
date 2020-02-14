import { toast } from "react-toastify";
import axios from "axios";
import { ERROR, LOADING, LOGIN_SUCCESS } from "../../type";

const loginUser = async data => async dispatch => {
  dispatch({
    type: LOADING
  });

  axios
    .post("https://the-task-api.herokuapp.com/auth/login", data)
    .then(res => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });
      /* istanbul ignore next */
      toast.success("Log in success");
      /* istanbul ignore next */
      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
    })
    .catch(err => {
      dispatch({
        type: ERROR,
        payload: err.response.data
      });
      /* istanbul ignore next */
      toast.error(
        err.response.data.error.message || err.response.data.error.password
      );
    });
};

export default loginUser;
