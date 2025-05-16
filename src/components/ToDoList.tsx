import { useState } from "react";
import InputTask from "./InputTask";
import { type TasksProps } from "../types/TasksProps";
import TaskView from "./TaskView";
import Header from "./Header";

const ToDoList = () => {
    const [tasks, setTasks] = useState<TasksProps[]>([])
    
    return(
        <div className="flex flex-col justify-center items-center gap-7 mt-20">
            <Header />
            <InputTask setTasks={setTasks}/>
            <TaskView tasks={tasks} setTasks={setTasks}/>
        </div>
    );
}

export default ToDoList