import axios from "axios";
const { REACT_APP_API_BACK } = process.env;

const apiClient = axios.create({
  baseURL: REACT_APP_API_BACK,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

const getTasks = (callback) => {
  apiClient
    .get("/get-all-tasks")
    .then((response) => {
      callback(response.data.data);
    })
    .catch((error) => {
      callback([]);
    });
};

const addTask = (task, callback) => {
  apiClient
    .post("/create", task)
    .then((response) => {
      console.log(response);
      callback();
    })
    .catch((error) => {
      console.log(error);
      callback();
    });
};

const deleteTask = (task, callback) => {
  apiClient
    .delete(`/delete/${task._id}`)
    .then((response) => {
      console.log(response);
      callback();
    })
    .catch((error) => {
      console.log(error);
      callback();
    });
};

const updateTask = (task, callback) => {
  apiClient
    .put(`/update/${task._id}`, task)
    .then((response) => {
      console.log(response);
      callback();
    })
    .catch((error) => {
      console.log(error);
      callback();
    });
};

const DoneUndoneTask = (task, callback) => {
  apiClient
    .put(`/done-undone-task/${task._id}`)
    .then((response) => {
      console.log(response);
      callback();
    })
    .catch((error) => {
      console.log(error);
      callback();
    });
};

export { getTasks, addTask, deleteTask, updateTask, DoneUndoneTask };
