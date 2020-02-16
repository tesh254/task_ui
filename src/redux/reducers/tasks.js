import { FETCH_TASKS, LOADING, ERROR } from "../type";

export let initialState = {
  tasks: [],
  isLoading: true,
  page: 1,
  perPage: 5,
  totalTasks: 5
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_TASKS:
        console.log(action.payload.totalTasks / action.payload.perPage)
      return {
        ...state,
        tasks: action.payload.tasks,
        isLoading: false,
        page: action.payload.page,
        lastPage: action.payload.totalTasks / action.payload.perPage,
        perPage: action.payload.perPage,
        totalTasks: action.payload.totalTasks
      };
    case ERROR:
      return {
        isLoading: false
      };
    default:
      return state;
  }
};

export default taskReducer;
