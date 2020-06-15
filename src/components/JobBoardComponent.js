import React, { useState, useEffect } from "react";

const JobBoardComponent = ({ job }) => {
  const {
    logo,
    company,
    contract,
    location,
    position,
    postedAt,
    languages,
    tools,
    role,
    level,
    isNew,
    featured,
  } = job;

  const tags = [role, level];

  if (tools) {
    tags.push(...languages);
  }

  if (languages) {
    tags.push(...tools);
  }

  return (
    <div
      className={`flex bg-white shadow-md m-4 p-4 rounded ${
        featured && "border-l-4 border-teal-500 border-solid"
      }`}
    >
      <div>
        <img src={logo} alt={company} />
      </div>
      <div className="flex flex-col justify-between ml-4">
        <h3 className="font-bold text-xl text-teal-500">
          {company}{" "}
          {isNew && (
            <span className="text-teal-100 bg-teal-500 m-2 p-1 rounded-full">
              New
            </span>
          )}
          {featured && (
            <span className="text-white-500 bg-gray-800 p-1 rounded">
              Featured
            </span>
          )}
        </h3>
        <h2 className="font-bold text-xl">{position}</h2>
        <p className="text-gray-700">
          {postedAt} · {contract} · {location}
        </p>
      </div>
      <div className="flex items-center justify-center ml-auto">
        {tags
          ? tags.map((tag) => (
              <span className="text-teal-500 bg-teal-100 font-bold m-2 p-2 rounded">
                {tag}
              </span>
            ))
          : ""}
      </div>
    </div>
  );
};

export default JobBoardComponent;
