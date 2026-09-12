import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";

export default function TaskManagementHeader(){
    return(
        <>
        <div className="flex items-center gap-4 mt-5 mb-5">
        <FontAwesomeIcon 
        icon={faListCheck} 
        className=" text-4xl text-red-600"
        />

        <h1 className="text-5xl font-bold font-mono tracking-widest">Task Management</h1>
        </div>
        </>
    )
}