import { FaTrash, FaPen } from "react-icons/fa";
import { type TasksProps } from "../types/TasksProps";
import { motion } from "framer-motion";
import { useState } from "react";
import Modal from "./Modal";
import { type ChangeEvent } from "react";

type TaskViewProps = {
  tasks: TasksProps[];
  setTasks: React.Dispatch<React.SetStateAction<TasksProps[]>>;
};

const TaskView = ({ tasks, setTasks }: TaskViewProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [prevEdit, setPrevEdit] = useState("");

  const editTask = (index: number) => {
    setEditIndex(index);
    setPrevEdit(tasks[index].name);
    setIsModalOpen(true);
  };

  const handleEditChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPrevEdit(e.target.value);
  };

  const updateTask = (index: number | null) => {
    if (index === null) return;
    setTasks((prevTasks) =>
      prevTasks.map((task, i) =>
        i === index ? { ...task, name: prevEdit } : task
      )
    );
    setEditIndex(null);
    setIsModalOpen(false);
  };

  const deleteTask = (index: number) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };

  const checkTask = (index: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) =>
        i === index ? { ...task, isComplete: !task.isComplete } : task
      )
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center"
    >
      {tasks.length === 0 ? (
        <div className="flex flex-col gap-3 bg-[#EDEDF9] mt-10  w-[460px]  p-4 rounded-lg sm:w-[660px] text-center">
          <p className="bg-white p-2 rounded">Nenhuma tarefa adicionada</p>
        </div>
      ) : (
        <ul className="flex flex-col gap-3 bg-[#EDEDF9] mt-10  w-[460px]  p-4 rounded-lg sm:w-[660px]">
          {tasks.map((task, index) => (
            <li
              className="flex justify-between bg-white rounded-sm p-2"
              key={index}
            >
              <div
                className={`flex gap-2 items-center transition-all duration-200 ${
                  task.isComplete ? "line-through text-gray-500" : "text-black"
                }`}
              >
                <input
                  type="checkbox"
                  className="w-6 h-6 appearance-none border-2 border-gray-300 rounded-md checked:bg-indigo-500 checked:border-indigo-500 cursor-pointer"
                  onChange={() => checkTask(index)}
                  checked={task.isComplete}
                />
                {task.name}
              </div>
              <div className="flex gap-1">
                <button onClick={() => deleteTask(index)}>
                  <FaTrash className="cursor-pointer text-gray-600 bg-[#EDEDF9] text-3xl rounded p-2 hover:bg-gray-200" />
                </button>
                <button onClick={() => editTask(index)}>
                  <FaPen className="cursor-pointer text-gray-600 bg-[#EDEDF9] text-3xl rounded p-2 hover:bg-gray-200" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <input
          type="text"
          className="rounded-lg p-2 w-60 border-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-300 bg-white"
          onChange={handleEditChange}
          value={prevEdit}
        />
        <div className="flex gap-2 mt-4">
          <button
            className="border rounded-lg text-white bg-indigo-500 p-2 w-30 h-11 cursor-pointer hover:bg-indigo-600 transition font-semibold"
            onClick={() => updateTask(editIndex)}
          >
            Update Task
          </button>
          <button
            className="border rounded-lg text-white bg-gray-400 p-2 w-30 h-11 cursor-pointer hover:bg-gray-500 transition font-semibold"
            onClick={() => setIsModalOpen(false)}
          >
            Cancel
          </button>
        </div>
      </Modal>
    </motion.div>
  );
};

export default TaskView;
