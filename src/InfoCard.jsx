export default function InfoCard({count, taskInfo}){
    return(
        <div className="p-4 w-60 h-30 border-2 border-solid rounded-xl ">
            <h3 className="text-4xl font-bold">{count}</h3>
            <p className="mt-2">{taskInfo}</p>
        </div>
    )
}