import InfoCard from "./InfoCard"

export default function InfoCardContainer({total, completed}){
    return(
        <div className="flex gap-4">
            <InfoCard count={total} taskInfo={"Total task"}/>

            <InfoCard count={completed} taskInfo={"Completed"}/>
        </div>
    )
}