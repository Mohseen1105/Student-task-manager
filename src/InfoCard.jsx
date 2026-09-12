export default function InfoCard({count, taskInfo}){
    return(
        <div className="p-4 w-60 h-30  ">
            <h3 className="text-4xl font-bold">{count}</h3>
            <p className="mt-2">{taskInfo}</p>
        </div>
    )
}