import React from "react";
import { Route, Routes } from "react-router-dom";
import JobListingPage from "./pages/JobListingPage";
import JobDetailsPage from "./pages/JobDetailsPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<JobListingPage />} />
        <Route path="/details/:id" element={<JobDetailsPage />} />
      </Routes>
    </>
  );
};

export default App;
