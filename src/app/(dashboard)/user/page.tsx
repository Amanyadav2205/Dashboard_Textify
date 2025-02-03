
import React from "react"
import UserPage from "@/components/UserPage"
import CompCourse  from "@/components/CompCourse"

const SettingPage = () =>{
    return(
        <div className="p-4 h-full flex gap-4 flex-col md:flex-row  m-2  " >
        {/* Left */}
        <div className="w-full lg:w-2/3 text-black flex flex-col gap-6 ">

        <UserPage/>
        </div>

        {/* Right */}
        <div className="w-full lg:w-1/3 text-black flex flex-col gap-6 mr-2  ">
        <CompCourse/>
        </div>


        
        </div>
    )
}

export default SettingPage