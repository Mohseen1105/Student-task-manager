import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
export default function TasksContiner({task}){
    return(
        <div className="w-2xl h-64  p-3">
                <div >
                    {
                        task.map((ele, index) => {
                            return (
                                <div key={index} className="flex gap-2 items-center bg-gray-200 h-10 pl-3 p-1 rounded-sm m-3">
                                    <span>{ele}</span>

                                    <Checkbox />
                                    <Button size="small">Delete</Button>
                                </div>
                            )
                        })
                    }
                </div>
        </div>
    )
}