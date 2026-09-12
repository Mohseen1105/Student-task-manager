import Button from '@mui/material/Button';

export default function TasksContiner({task}){
    return(
        <div className="w-2xl h-64 border-2 border-solid rounded-xl p-3">
<div>
    {
        task.map((ele, index) => {
            return (
                <div key={index} className="flex gap-2 items-center">
                    <span>{ele}</span>

                    <input type="checkbox" />

                     <Button variant="text">Delete</Button>
                </div>
            )
        })
    }
</div>
        </div>
    )
}