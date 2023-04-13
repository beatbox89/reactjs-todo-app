import { ArrowPathIcon, XMarkIcon } from "@heroicons/react/24/outline";
// import { useState } from "react";

const FormUpdate = ({
  task,
  updateInput,
  setUpdateInput,
  cancelUpdateTaskBtn,
  onSubmitUpdateTask,
}) => {
  return (
    <form onSubmit={(e) => onSubmitUpdateTask(e, task)}>
      <input
        type="text"
        required
        autoFocus
        placeholder="Type here ..."
        value={updateInput}
        onChange={(e) => setUpdateInput(e.target.value)}
      />
      <button>
        <ArrowPathIcon />
      </button>
      <button onClick={cancelUpdateTaskBtn}>
        <XMarkIcon />
      </button>
    </form>
  );
};

export default FormUpdate;
