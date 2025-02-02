"use client"
import UserCard from "@/components/UserCard"
import BarChart  from "@/components/BarChart"
import PieChart  from "@/components/PieChart"
import EventCalender  from "@/components/EventCalender"
import CompCourse  from "@/components/CompCourse"
import GeoChart from "@/components/GeoChart"

const AdminPage = () => {
    return (
        <div className="P-4 flex gap-4 flex-col md:flex-row  ml-4">
            {/* LEFT */}
            <div className="w-full lg:w-2/3 text-black flex flex-col gap-6"> 
            {/* Usercard */}
            <div className="flex gap-4 justify-between  flex-wrap">
                <UserCard type="Figma"/>
                <UserCard type="Adobe"/>
                <UserCard type="Project"/>
                <UserCard type="Design"/>
            </div>
            {/* Middle Charts */}
            <div className=" bg-CARD rounded-2xl ml-2 shadow-lg">
                <h1 className="ml-8 pt-8 text-black font-aclonica"> Revenue</h1>
            <BarChart/>
            </div>

            {/* Bottom Charts */}
            <div className="flex gap-4 justify-between  flex-wrap">
           
                <div className="rounded-2xl bg-CARD p-4 flex-1 ml-2 min-w-[130px] min-h-[100px] shadow-lg"><GeoChart/></div>
                <div className="rounded-2xl bg-CARD p-4 flex-1 ml-2 min-w-[130px] min-h-[100px] shadow-lg">
                <h1 className="ml-0.5 pt-0.5 text-black font-aclonica"> Sales</h1>
                    <PieChart/></div>
            </div>
            </div>

            {/* Right */}
            <div className="w-full lg:w-1/3 text-black flex flex-col gap-6 mr-2">
            <div className=" rounded-xl">
            <EventCalender/>
            </div>
            <div>
            <CompCourse/>
            </div>
            
            
            </div>

        </div>
        
    )
}
export default AdminPage