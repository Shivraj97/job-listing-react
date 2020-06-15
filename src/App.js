import React, { useState, useEffect, Fragment } from "react";
import JobBoardComponent from "./components/JobBoardComponent";
import data from "./assets/data.json";

function App() {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    setJobs(data);
  }, []);

  const filterFunc = ({ role, level, tools, languages }) => {
    if (filters.length === 0) {
      return true;
    }

    const tags = [role, level];

    if (tools) {
      tags.push(...tools);
    }
    if (languages) {
      tags.push(...languages);
    }

    //return tags.some((tag) => filters.includes(tag));
    return filters.every((filter) => tags.includes(filter));
  };

  const handleTagClick = (tag) => {
    // avoid reading duplicate tags
    if (filters.includes(tag)) return;

    setFilters([...filters, tag]);
  };

  const handleFilterClick = (passedFilter) => {
    setFilters(filters.filter((f) => f !== passedFilter));
  };

  const clearFilters = () => {
    setFilters([]);
  };

  const filteredJobs = jobs.filter(filterFunc);

  return (
    <>
      <header className="bg-teal-500 mb-12">
        <img
          className="w-full"
          src="/images/bg-header-desktop.svg"
          alt="header-background"
        />
      </header>
      <div className="container m-auto">
        {filters.length > 0 && (
          <div
            className={`flex flex-wrap bg-white shadow-md -my-20 mb-16 my-12 mx-10 p-6 rounded z-10 relative`}
          >
            {filters.map((filter) => (
              <Fragment>
                <span
                  onClick={() => handleFilterClick(filter)}
                  className="text-teal-500 bg-teal-100 cursor-pointer font-bold p-2 rounded"
                >
                  {filter}
                </span>
                <span
                  onClick={() => handleFilterClick(filter)}
                  className="bg-teal-500 font-bold text-md cursor-pointer p-2 mr-4 text-teal-100"
                >
                  Χ
                </span>
              </Fragment>
            ))}
            <button
              onClick={clearFilters}
              className="font-bold text-gray-700 ml-auto"
            >
              Clear
            </button>
          </div>
        )}
        {jobs.length === 0 ? (
          <p>Jobs are fetching...</p>
        ) : (
          filteredJobs.map((job) => (
            <JobBoardComponent
              job={job}
              key={job.id}
              handleTagClick={handleTagClick}
            />
          ))
        )}
      </div>
    </>
  );
}

export default App;
