import { TrashIcon, PencilIcon } from "@heroicons/react/24/outline";
import FormUpdate from "./FormUpdate";

const ListTodo = ({
  addTask,
  setAddTask,
  editTask,
  setEditTask,
  updateInput,
  setUpdateInput,
  cancelUpdateTaskBtn,
  deleteTaskBtn,
  onSubmitUpdateTask,
}) => {
  const toggleTaskComplete = (date) => {
    setAddTask((prev) =>
      prev.map((t) => (t.date === date ? { ...t, completed: !t.completed } : t))
    );
  };

  const editTaskBtn = (task) => {
    setEditTask(task.date);
    setUpdateInput(task.task);
  };

  return (
    <div>
      {addTask
        .sort((a, b) => b.date - a.date)
        .sort((a, b) => {
          if (a.completed > b.completed) return 1;
          if (a.completed < b.completed) return -1;
          return 0;
        })
        .map((task) => (
          <div className="todo-list" key={task.date}>
            {editTask === task.date ? (
              <FormUpdate
                task={task}
                setEditTask={setEditTask}
                updateInput={updateInput}
                setUpdateInput={setUpdateInput}
                cancelUpdateTaskBtn={cancelUpdateTaskBtn}
                onSubmitUpdateTask={onSubmitUpdateTask}
              />
            ) : (
              <>
                <input
                  type="checkbox"
                  checked={task.completed}
                  id={task.date}
                  value={task.completed}
                  onChange={() => toggleTaskComplete(task.date)}
                />
                <label htmlFor={task.date}>{task.task}</label>
                <button onClick={() => editTaskBtn(task)}>
                  <PencilIcon />
                </button>
                <button onClick={() => deleteTaskBtn(task)}>
                  <TrashIcon />
                </button>
              </>
            )}
          </div>
        ))}
    </div>
  );
};

export default ListTodo;
