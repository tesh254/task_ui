import axios from "axios";
import { FETCH_TASKS, LOADING, ERROR } from "../../type";
import { toast } from "react-toastify";

const fetchTasks = (page, limit) => async dispatch => {
  dispatch({
    type: LOADING
  });

  await axios
    .get(
      `https://the-task-api.herokuapp.com/tasks/assigned?page=${parseInt(
        page,
        10
      )}&limit=${parseInt(limit, 10)}&order=createdAt&orderMethod=DESC`
    )
    .then(res => {
      dispatch({
        type: FETCH_TASKS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: ERROR,
        payload: err.response.data
      });
      toast.error("please login to your account");
    });
};

export default fetchTasks;
