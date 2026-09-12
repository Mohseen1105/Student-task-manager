import InfoCard from "./InfoCard"

export default function InfoCardContainer({count}){
    return(
        <div className="flex gap-4">
            <InfoCard count={count} taskInfo={"Total task"}/>

            <InfoCard count={0} taskInfo={"Completed"}/>
        </div>
    )
}