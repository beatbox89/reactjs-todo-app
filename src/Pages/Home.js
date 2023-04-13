import { useState } from "react";
import CustomForm from "../Component/CustomForm";
import ListTodo from "../Component/ListTodo";

const Home = () => {
  const [taskInput, setTaskInput] = useState("");
  const [updateInput, setUpdateInput] = useState("");
  const [editTask, setEditTask] = useState(null);

  const [addTask, setAddTask] = useState([]);

  //   adding task
  const onSubmitCreateTask = (e) => {
    e.preventDefault();

    setAddTask(() => [
      ...addTask,
      {
        // id: crypto.randomUUID(),
        date: Date.now(),
        task: taskInput,
        completed: false,
      },
    ]);
    setTaskInput("");
  };

  const onSubmitUpdateTask = (e, any) => {
    e.preventDefault();
    setAddTask((prev) =>
      prev.map((t) => (t.date === any.date ? { ...t, task: updateInput } : t))
    );
    setEditTask(null);
  };

  const deleteTaskBtn = (task) => {
    const removeTask = addTask.filter((t) => t.date !== task.date);
    setAddTask(removeTask);
  };

  const cancelUpdateTaskBtn = (e) => {
    e.preventDefault();
    setEditTask(null);
    setUpdateInput("");
  };

  return (
    <div>
      <div className="form-add">
        <CustomForm
          taskInput={taskInput}
          setTaskInput={setTaskInput}
          onSubmitCreateTask={onSubmitCreateTask}
        />
      </div>
      {addTask.length === 0 && <h2>No task for now!</h2>}

      <ListTodo
        addTask={addTask}
        setAddTask={setAddTask}
        editTask={editTask}
        setEditTask={setEditTask}
        updateInput={updateInput}
        setUpdateInput={setUpdateInput}
        cancelUpdateTaskBtn={cancelUpdateTaskBtn}
        deleteTaskBtn={deleteTaskBtn}
        onSubmitUpdateTask={onSubmitUpdateTask}
      />
    </div>
  );
};

export default Home;
