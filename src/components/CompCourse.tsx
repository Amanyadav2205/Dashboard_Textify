import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const courses = [
  {
    title: "Chapter 1 : What is UI UX ?",
    description: "",
  },
  {
    title: "Chapter 2 : How to conduct user research?",
    description: "",
  },
  {
    title: "Chapter 3 : Basic of Figma",
    description: "",
  },
];

const CompletedCourses = () => {
  return (
    <div className="p-4 bg-white rounded-xl shadow-lg w-full max-w-md">
      <h2 className="text-lg  font-aclonica text-black mb-4">Completed Course</h2>
      <div className="space-y-2">
        {courses.map((course, index) => (
          <Card
            key={index}
            className="bg-[linear-gradient(360deg,#FF6968,#fa9696)] text-white p-4 flex items-center rounded-xl shadow-md pb-5"
          >
            <CheckCircle className="mr-3 text-white w-6 h-6" />
            <CardContent className="p-0">
              <h3 className="text-sm font-semibold">{course.title}</h3>
              {course.description && (
                <p className="text-xs">{course.description}</p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CompletedCourses;

