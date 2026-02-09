import React from "react";
import jobs from "../constants/Jobs";
import { RiHomeOfficeFill } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";
import { SiLevelsdotfyi } from "react-icons/si";
import { MdAccessTimeFilled } from "react-icons/md";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const JobCards = () => {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      {jobs.map((job) => (
        <div
          key={job.id}
          onClick={() => navigate(`/details/${job.id}`)}
          className=" flex flex-col gap-4 px-6 py-6 bg-gray-300 rounded-md border-l-4 border-green-600 hover:scale-105 transition-all duration-300 cursor-pointer"
        >
          <div className="border-b-2 border-gray-200">
            <div className="flex gap-2 items-center">
              <RiHomeOfficeFill size={12} className="text-green-600" />
              <p className="text-sm text-gray-600">{job.company}</p>
            </div>
            <h2 className="text-2xl font-bold font-[Rubik]">{job.position}</h2>
            <div className="flex gap-2 items-center mb-4">
              <FaLocationDot size={12} className="text-green-600" />
              <p className="text-sm text-gray-600">{job.location}</p>
            </div>
          </div>
          <div className="border-b-2 border-gray-200 pb-4">
            <p className="text-[16px] text-gray-900 font-[ubuntu] text-justify line-clamp-5">
              {job.jobDescription}
            </p>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-2 px-3 text-xs rounded-full items-center bg-[#d9bb9b]">
              <MdAccessTimeFilled size={12} />
              <p>{job.jobType}</p>
            </div>
            <div className="flex gap-2 px-3 text-xs rounded-full items-center bg-[#d9bb9b]">
              <FaMoneyBillTrendUp size={12} />
              <p>NPR. {job.salary}+</p>
            </div>
            <div className="flex gap-2 px-3 py-1 text-xs rounded-full items-center bg-[#d9bb9b]">
              <SiLevelsdotfyi size={12} />
              <p>{job.experience}</p>
            </div>
          </div>
          <div className="mt-4">
            <button className="px-6 py-2 w-full text-white bg-green-600 rounded-md hover:bg-green-700 hover:text-white transition-all duration-300 cursor-pointer hover:scale-105">
              View details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobCards;
