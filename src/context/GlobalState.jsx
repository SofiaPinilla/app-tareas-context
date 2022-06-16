import React, { createContext, useReducer } from "react";
import axios from "axios";
import AppReducer from "./AppReducer";
const initialState = {
  tasks: [],
  task:{}
};

export const GlobalContext = createContext(initialState);

const API_URL = "http://localhost:8080";

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const getTasks = async () => {
    const res = await axios.get(API_URL + "/tasks");
    dispatch({
      type: "GET_TASKS",
      payload: res.data,
    });
  };
  const deleteTask = async (_id) => {
    try {
      const res = await axios.delete(API_URL + "/tasks/" + _id);
        dispatch({
          type: "DELETE_TASK",
          payload: res.data.taskDeleted,
        });
    } catch (error) {
      console.error(error);
    }
  };

  const addTask = async(task) => {
    try {
        const res = await axios.post(API_URL + '/tasks', task)
      
        dispatch({
            type: "ADD_TASK",
            payload: res.data.task,
          });
    } catch (error) {
        console.error(error)
    }
}
const getTask = async (_id) => {
    try {
      const res = await axios.get(API_URL +"/tasks/_id/" + _id);
      dispatch({
        type: "GET_TASK",
        payload: res.data,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const editTask = async (_id, task) => {
    try {
      await axios.put(API_URL +"/tasks/" + _id, task);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        tasks: state.tasks,
        task: state.task,
        getTasks,
        deleteTask,
        addTask,
        getTask,
        editTask
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
