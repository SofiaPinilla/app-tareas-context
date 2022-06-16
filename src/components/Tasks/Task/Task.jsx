import { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalState";
import { Link } from "react-router-dom";

const Task = ({ task }) => {
  const { deleteTask } = useContext(GlobalContext);

  return (
    <div className="task" key={task._id}>
      <span>{task.title}</span>
      <button>
        <Link to={"/task/" + task._id}>Edit</Link>
      </button>
      <button onClick={() => deleteTask(task._id)}>X</button>
    </div>
  );
};

export default Task;
