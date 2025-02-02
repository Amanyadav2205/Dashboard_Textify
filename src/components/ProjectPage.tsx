import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MoreVertical} from "lucide-react";


interface Project {
    id: number;
    title: string;
    description: string;
    participants: number;
    dueDate: string;
    icon: string;
}

const ProjectsPage: React.FC = () => {
    const projects: Project[] = [
        {
            id: 1,
            title: "Slack Bot",
            description: "If everything I did failed - which it doesn't, I think that it actually succeeds.",
            participants: 10,
            dueDate: "02.08.22",
            icon: "/slack.png"
        },
        {
            id: 2,
            title: "Slack Bot",
            description: "If everything I did failed - which it doesn't, I think that it actually succeeds.",
            participants: 10,
            dueDate: "02.08.22",
            icon: "/slack.png"
        },
        {
            id: 3,
            title: "Slack Bot",
            description: "If everything I did failed - which it doesn't, I think that it actually succeeds.",
            participants: 10,
            dueDate: "02.08.22",
            icon: "/slack.png"
        },
        {
            id: 4,
            title: "Slack Bot",
            description: "If everything I did failed - which it doesn't, I think that it actually succeeds.",
            participants: 10,
            dueDate: "02.08.22",
            icon: "/slack.png"
        },
        {
            id: 5,
            title: "Slack Bot",
            description: "If everything I did failed - which it doesn't, I think that it actually succeeds.",
            participants: 10,
            dueDate: "02.08.22",
            icon: "/slack.png"
        },
        {
            id: 6,
            title: "Slack Bot",
            description: "If everything I did failed - which it doesn't, I think that it actually succeeds.",
            participants: 10,
            dueDate: "02.08.22",
            icon: "/slack.png"
        },
        {
            id: 7,
            title: "Slack Bot",
            description: "If everything I did failed - which it doesn't, I think that it actually succeeds.",
            participants: 10,
            dueDate: "02.08.22",
            icon: "/slack.png"
        },
        {
            id: 8,
            title: "Slack Bot",
            description: "If everything I did failed - which it doesn't, I think that it actually succeeds.",
            participants: 10,
            dueDate: "02.08.22",
            icon: "/slack.png"
        },
        {
            id: 9,
            title: "Slack Bot",
            description: "If everything I did failed - which it doesn't, I think that it actually succeeds.",
            participants: 10,
            dueDate: "02.08.22",
            icon: "/slack.png"
        }
    ];

    return (
        <div className="p-6 max-w-7xl mx-auto bg-CARD rounded-2xl">
            <div className="flex justify-between items-center mb-8">
                <div className='justify-start w-1/2'>
                    <h1 className="text-xl font-semibold mb-2 font-aclonica">Projects</h1>
                    <p className="text-gray-500 text-sm">
                        This is the paragraph where you can write more details about your projects.

                    </p>
                </div>
                <div className="flex items-center gap-4">
                    <div className="relative">

                    </div>
                    <Button className="bg-[linear-gradient(360deg,#FF9764,#EA5455)] text-white rounded-3xl">
                        Add New
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                {projects.map((project) => (
                    <Card key={project.id} className="bg-white border-1px-gray-300 shadow-lg">
                        <CardContent className="p-4">
                            <div className="flex justify-between items-start mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-[#6B7AFF]/10 rounded-lg flex items-center justify-center">
                                        <img
                                            src={project.icon}
                                            alt="Project icon"
                                            className="w-6 h-6"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-semibold text-gray-900">{project.title}</h3>
                                        <div className="flex -space-x-1 ">

                                            <div className="w-15 h-6 rounded-full bg-[#6B7AFF]/10 border-2 border-white">
                                                <img
                                                    src="/users.png"
                                                    alt=""
                                                    className="w-full h-full rounded-full"
                                                />
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <Button variant="ghost" size="icon" className="text-gray-400">
                                    <MoreVertical className="h-4 w-4" />
                                </Button>
                            </div>
                            <p className="text-gray-600 text-xs mb-2 line-clamp-2">{project.description}</p>
                            <hr />
                            <div className="flex justify-between text-sm mt-1">
                                <div className="text-gray-600 flex flex-col">
                                    <span className="text-xs text-black">{project.participants}</span>
                                    <span className=" text-xs" >Participants</span>
                                </div>
                                <div className="text-gray-500 flex flex-col">
                                <span className=" text-black text-xs">{project.dueDate}</span>
                                    <span className='text-xs'>Due date</span>
                                   
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Right sidebar - Add your existing Assignments component here */}
            {/* <CompletedCourses/> */}
            {/* <AssignmentsComponent /> */}
        </div>
    );
};

export default ProjectsPage;