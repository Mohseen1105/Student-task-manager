import TaskManagementHeader from "./TaskManagementTitle"
import Discription from "./Discription"
import InputTask from "./InputTask"


export default function TaskManagerApp(){

    return(
        <div className=" flex flex-col items-center gap-4 mt-4">
            <TaskManagementHeader/>
            <Discription/>
            <InputTask />
        </div>
    )
}