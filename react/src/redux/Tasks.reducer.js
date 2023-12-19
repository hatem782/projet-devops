import { apiClient as axios } from "../services/services";

const keys = {
  SET_TASKS: "SET_TASKS",
  SET_PAYLOAD: "SET_PAYLOAD",
};
// ###################################### STATE ###################################### //
export const InitialState = {
  tasks: [],
  payload: false,
};
// ###################################### Reducer ###################################### //
export const TasksReducers = (state = { ...InitialState }, action) => {
  switch (action.type) {
    case keys.SET_TASKS:
      return { ...state, tasks: action.value, payload: false };
    case keys.SET_PAYLOAD:
      return { ...state, payload: action.value };
    default:
      return state;
  }
};
// ###################################### Actions ###################################### //

export const GetAllTasks = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("/get-all-tasks");
      console.log(response.data.data);
      dispatch({
        type: keys.SET_TASKS,
        value: response.data.data,
      });
    } catch (error) {
      dispatch({
        type: keys.SET_PAYLOAD,
        value: false,
      });
    }
  };
};

export const CreateTask = (task) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("/create", task);
      console.log(response);
      dispatch(GetAllTasks());
    } catch (error) {
      dispatch({
        type: keys.SET_PAYLOAD,
        value: false,
      });
    }
  };
};

export const UpdateTask = (task, callback) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(`/update/${task._id}`, task);
      console.log(response);
      dispatch(GetAllTasks());
      callback();
    } catch (error) {
      dispatch({
        type: keys.SET_PAYLOAD,
        value: false,
      });
    }
  };
};

export const DoneUndoneTask = (task) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(`/done-undone-task/${task._id}`);
      console.log(response);
      dispatch(GetAllTasks());
    } catch (error) {
      dispatch({
        type: keys.SET_PAYLOAD,
        value: false,
      });
    }
  };
};

export const deleteTask = (task) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(`/delete/${task._id}`);
      console.log(response);
      dispatch(GetAllTasks());
    } catch (error) {
      dispatch({
        type: keys.SET_PAYLOAD,
        value: false,
      });
    }
  };
};
