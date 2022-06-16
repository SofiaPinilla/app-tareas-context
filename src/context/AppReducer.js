const tasks = (state, action) => {
  switch (action.type) {
    case "GET_TASKS":
      return {
        ...state,
        tasks: action.payload.tasks,
      };
    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task._id !== action.payload._id),
      };
    case "ADD_TASK":
      return {
        ...state,
        tasks: [action.payload, ...state.tasks],
      };
      case "GET_TASK":
        return {
          ...state,
          task: action.payload.task,
        };
  
    default:
      return state;
  }
};
export default tasks;
