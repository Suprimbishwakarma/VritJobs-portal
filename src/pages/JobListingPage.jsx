import React from "react";
import JobCards from "../components/JobCards";
import Header from "../components/Header";

const JobListingPage = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <Header />
      <JobCards />
    </div>
  );
};

export default JobListingPage;
