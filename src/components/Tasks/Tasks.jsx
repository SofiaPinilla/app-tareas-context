import { useContext, useEffect } from "react";
import AddTask from "./AddTask/AddTask";
import Task from "./Task/Task";
import { GlobalContext } from "../../context/GlobalState";

const Tasks = () => {
  const { tasks, getTasks} = useContext(GlobalContext);
  useEffect(() => {
    getTasks();
  }, []);

  if (tasks.length <= 0) {
    return <span>Cargando...</span>;
  }

  return (
    <div>
      <h1> Tasks</h1>
      <AddTask />
      {tasks.map((task) => {
        return <Task task={task} />;
      })}
    </div>
  );
};

export default Tasks;
