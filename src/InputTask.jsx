import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import TasksContiner from "./TasksContainer";
import InfoCardContainer from "./InfoCardContainer"
export default function InputTask({getTask}){

    let [addTask,setAddTask] = useState(["Sample task"]);
    let [inputTask,setInputTask] = useState("");
    let [count, setCount] = useState(0)
    
    function getInput(event){
        setInputTask(event.target.value)
        console.log(event.target.value)
    }
   
    function setInput(){
        setAddTask([
            ...addTask,
            inputTask
        ])
        setInputTask("")
        setCount(count+1)
    }
    

    return(
        <>
        <div className='flex gap-2 w-xl h-19 border-1 border-solid p-2 rounded-xl'>
            <TextField label="Add Task" variant="filled" className='w-full' value={inputTask} onChange={getInput}/>
            <Button variant="text" onClick={setInput}>ADD</Button>
        </div>

        <TasksContiner task={addTask}/>

        <InfoCardContainer count={count}/>
        </>
        
       
    )
}