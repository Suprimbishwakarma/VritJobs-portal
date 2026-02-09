import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate, useParams } from "react-router-dom";
import jobs from "../constants/Jobs";
import { RiHomeOfficeFill } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";
import { SiLevelsdotfyi } from "react-icons/si";
import { MdAccessTimeFilled } from "react-icons/md";
import { FaMoneyBillTrendUp } from "react-icons/fa6";

const JobDetailsPage = () => {
  const [showModal, setShowModal] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  let job = null;

  for (let i = 0; i < jobs.length; i++) {
    if (jobs[i].id === parseInt(id)) {
      job = jobs[i];
      break;
    }
  }
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <button
        onClick={() => {
          navigate("/");
        }}
        className="text-gray-700 flex gap-2 items-center cursor-pointer"
      >
        <FaArrowLeft size={16} />
        Back to Listings
      </button>
      <div className="flex flex-col gap-6 mt-6">
        <div>
          <h2 className="text-2xl font-bold font-[Rubik]">{job.position}</h2>
          <div className="flex gap-6 items-center">
            <div className="flex gap-2 items-center">
              <RiHomeOfficeFill size={12} className="text-green-600" />
              <p className="text-sm text-gray-600">{job.company}</p>
            </div>

            <div className="flex gap-2 items-center">
              <FaLocationDot size={12} className="text-green-600" />
              <p className="text-sm text-gray-600">{job.location}</p>
            </div>
          </div>
        </div>
        <div>
          <p className="text-green-600 text-[24px] font-semibold">
            Job Descriptions
          </p>
          <p className="text-gray-700 ">{job.jobDescription}</p>
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
        <div>
          <p className="text-green-600 text-[24px] font-semibold">
            Required skills
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-2 pl-6">
            {job.skills.map((skill, index) => (
              <li key={index} className="mb-1">
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <button
            onClick={() => {
              setShowModal(true);
            }}
            className="px-6 py-2 text-white bg-green-600 hover:scale-105 hover:bg-green-700 transition-all duration-300 cursor-pointer rounded-md"
          >
            Apply Now
          </button>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-8 rounded-lg max-w-md w-full relative">
            <p className="text-gray-600 mb-6 text-center font-[ubuntu]">
              Application Submitted Successfully!
            </p>

            <div className="flex gap-4 justify-center">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobDetailsPage;
