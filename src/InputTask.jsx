import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import TasksContiner from "./TasksContainer";
import InfoCardContainer from "./InfoCardContainer"
import { v4 as uuidv4 } from 'uuid';
import { duration } from '@mui/material/styles';
export default function InputTask({getTask}){

    let [addTask,setAddTask] = useState([{
        task: "Sample task",
        id: uuidv4(),
        isDone: false
    }]);
    let [inputTask,setInputTask] = useState("");
    let [count, setCount] = useState({
        total: 0,
        completed: 0
    });
    
    function getInput(event){
        setInputTask(event.target.value)
        console.log(event.target.value)
    }
   
    function setInput(){
        setAddTask([
            ...addTask,
            {
                task: inputTask,
                id: uuidv4(),
                isDone: false
            }
        ])
        setInputTask("")
        setCount({
            ...count,
            total: count.total+1
        })
    }
    
    function deleteTask(id){
        setAddTask(addTask.filter((ele)=> ele.id != id))
    }

   function markAsDone(id){
    setAddTask(
        addTask.map((ele)=>{
            return ele.id ===id? {...ele, isDone: !ele.isDone} : ele
        })
    )

   
        setCount({
            ...count,
            completed: count.completed+1
        })

    
    
   }

    return(
        <>
        <div className='flex gap-2 w-xl h-19 border-1 border-solid p-2 rounded-xl'>
            <TextField label="Add Task" variant="filled" className='w-full' value={inputTask} onChange={getInput}/>
            <Button variant="text" onClick={setInput}>ADD</Button>
        </div>

        <TasksContiner task={addTask} deleteTask={deleteTask} markAsDone={markAsDone}/>

        <InfoCardContainer total={count.total} completed={count.completed}/>
        </>
        
       
    )
}