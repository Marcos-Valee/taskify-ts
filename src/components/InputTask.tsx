import { type TasksProps } from "../types/TasksProps";
import { useState, type FormEvent, type ChangeEvent } from "react";
import { motion } from "framer-motion";

type InputTaskProps = {
  setTasks: React.Dispatch<React.SetStateAction<TasksProps[]>>;
};

const InputTask = ({ setTasks }: InputTaskProps) => {
  const [task, setTask] = useState<TasksProps>({ name: "", isComplete: false });

  const handleTaskName = (e: ChangeEvent<HTMLInputElement>) => {
    setTask((prev) => ({ ...prev, name: e.target.value }));
  };

  const addTask = (e: FormEvent) => {
    if (!task?.name.trim()) return;
    e.preventDefault();
    setTasks((prev) => ([...prev, task]))
    setTask({name: "", isComplete: false})
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-15"
    >
      <form onSubmit={addTask} className="flex gap-4">
        <input
          type="text"
          className="border rounded-lg p-2 w-60 border-gray-500"
          value={task.name}
          placeholder="Add Task"
          onChange={handleTaskName}
        />
        <button
          className="border rounded-lg text-white bg-indigo-500 p-2 w-30 h-11 cursor-pointer hover:bg-indigo-600 transition"
          type="submit"
        >
          Add
        </button>
      </form>
    </motion.div>
  );
};

export default InputTask;
