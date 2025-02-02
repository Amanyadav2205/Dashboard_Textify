import React, { useState } from "react";
import { format, addDays, startOfWeek } from "date-fns";
import { motion } from "framer-motion";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const startDate = startOfWeek(selectedDate, { weekStartsOn: 1 });

  const dates = Array.from({ length: 5 }, (_, i) => addDays(startDate, i + 2));

  return (
    <div className="p-3 w-full max-w-md mx-auto bg-white rounded-xl shadow-lg">
      <h2 className="text-lg  text-black font-aclonica">Today, {format(new Date(), "dd MMMM")}</h2>
      <div className="flex justify-between items-center mt-4 overflow-x-auto">
        {dates.map((date, index) => (
          <motion.div
            key={index}
            className={`flex flex-col items-center p-2 rounded-xl transition-all cursor-pointer ${
              format(date, "dd") === format(selectedDate, "dd")
                ? "bg-white shadow-lg border border-gray-300"
                : "bg-gray-100"
            }`}
            onClick={() => setSelectedDate(date)}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-lg font-semibold text-black">{format(date, "dd")}</span>
            <span className="text-sm text-gray-500">{format(date, "EEE")}</span>
            <div className="flex mt-2 space-x-1">
              {["red", "blue", "green"].map((color, i) => (
                <span key={i} className={`w-2 h-2 bg-${color}-500 rounded-full`}></span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-2 h-1 w-14 bg-black mx-auto rounded-full"></div>
      
      {/* Temporary Event List Below the Calendar */}
      <div className="mt-4 space-y-1 mb-1">
        <div className="p-4 bg-[linear-gradient(90deg,#4A4D78,#979AC2)] rounded-lg shadow-md flex items-center text-sm cursor-pointer">
          <span className="mr-3 text-white text-xs p-2 bg-CARD rounded-full">📋</span>
          <div>
            <h3 className="text-white text-sm font-semibold">Check List</h3>
            <p className="text-white text-xs">Complete the tasks in the check list</p>
          </div>
        </div>
        <hr />
        <div className="p-4 bg-[linear-gradient(90deg,#4A4D78,#979AC2)] rounded-lg shadow-md flex items-center text-sm cursor-pointer">
          <span className="mr-3 text-white text-sm p-2 bg-CARD rounded-full">📋</span>
          <div>
            <h3 className="text-white text-sm font-semibold">Check List</h3>
            <p className="text-white text-xs">Complete the tasks in the check list</p>
          </div>
        </div>
        <hr />
        <div className="p-4 bg-[linear-gradient(90deg,#4A4D78,#979AC2)] rounded-lg shadow-md flex items-center  text-sm ">
          <span className="mr-3 text-white text-sm p-2 bg-CARD rounded-full">📜</span>
          <div>
            <h3 className="text-white font-sm font-semibold">Course</h3>
            <p className="text-white text-sm font-xs">Complete the ongoing design course</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
