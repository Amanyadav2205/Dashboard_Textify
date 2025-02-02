import CompCourse  from "@/components/CompCourse"
import ProjectsPage from "@/components/ProjectPage"
import { Button } from "@/components/ui/button"
import React from "react"

import EmergencyRecordingIcon from '@mui/icons-material/EmergencyRecording';

const ProjectPage = () =>{
    return(
        <div className="P-4 flex gap-4 flex-col md:flex-row  ml-4">
            {/* LEFT */}
            <div className="w-full lg:w-2/3 text-black flex flex-col gap-6   rounded-2xl ml-2 shadow-lg"> 
            <ProjectsPage/>
            </div>
            {/* Right */}
            <div className="w-full lg:w-1/3 text-black flex flex-col gap-4 mr-2">
            <CompCourse/>
            <Button className="bg-newgreen text-white gap-2 font-aclonica font-semibold"> <EmergencyRecordingIcon/>Assignments</Button>
            </div>

        </div>
    )
}

export default ProjectPage