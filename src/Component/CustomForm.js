import { PlusCircleIcon } from "@heroicons/react/24/outline";

const CustomForm = ({ taskInput, setTaskInput, onSubmitCreateTask }) => {
  return (
    <form onSubmit={onSubmitCreateTask}>
      <input
        type="text"
        value={taskInput}
        required
        placeholder="Type here ..."
        onChange={(e) => setTaskInput(e.target.value)}
      />
      <button>
        <PlusCircleIcon />
      </button>
    </form>
  );
};

export default CustomForm;
