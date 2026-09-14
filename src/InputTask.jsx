import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import TasksContiner from "./TasksContainer";
import InfoCardContainer from "./InfoCardContainer"
import { v4 as uuidv4 } from 'uuid';
export default function InputTask({getTask}){

    let sampleTask = {
        task: "Sample task",
        id: uuidv4(),
        isDone: false
    }

    let [addTask,setAddTask] = useState([]);
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
        const task = addTask.find((ele) => ele.id === id);
        setAddTask(addTask.filter((ele)=> ele.id !== id))
        setCount({
            ...count,
            total: count.total-1,
           completed: task.isDone
            ? count.completed - 1
            : count.completed
        })
        

    }

   function markAsDone(id){

    const task = addTask.find((ele) => ele.id === id);

    setAddTask(
        addTask.map((ele)=>{
            return ele.id ===id? {...ele, isDone: !ele.isDone} : ele
        })
    )

      setCount({
        ...count,
        completed: task.isDone
            ? count.completed - 1
            : count.completed + 1
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