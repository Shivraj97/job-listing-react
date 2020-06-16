import React from "react";

const JobBoardComponent = ({ job, handleTagClick }) => {
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
      className={`flex flex-col bg-white shadow-md my-12 mx-10 p-6 rounded ${
        featured && "border-l-4 border-teal-500 border-solid"
      } lg:flex-row lg:my-4`}
    >
      <div>
        <img
          className="mb-4 w-20 h-20 -mt-16 lg:h-24 lg:w-24 lg:my-0"
          src={logo}
          alt={company}
        />
      </div>
      <div className="flex flex-col justify-between ml-4">
        <h3 className="font-bold text-xl text-teal-500">
          {company}{" "}
          {isNew && (
            <span className="text-teal-100 text-sm uppercase bg-teal-500 m-2 py-1 px-2 rounded-full">
              New
            </span>
          )}
          {featured && (
            <span className="text-white-500 text-sm uppercase bg-gray-800 p-1 rounded">
              Featured
            </span>
          )}
        </h3>
        <h2 className="font-bold text-xl my-2">{position}</h2>
        <p className="text-gray-700">
          {postedAt} · {contract} · {location}
        </p>
      </div>
      <div className="flex flex-wrap items-center mt-4 mx-4 pt-4 border-t border-gray-500 border-solid lg:ml-auto lg:border-0 lg:pt-0 lg:mt-0">
        {tags
          ? tags.map((tag) => (
              <span
                onClick={() => handleTagClick(tag)}
                className="text-teal-500 bg-teal-100 cursor-pointer font-bold mr-4 mb-4 p-2 rounded lg:mb-0"
              >
                {tag}
              </span>
            ))
          : ""}
      </div>
    </div>
  );
};

export default JobBoardComponent;
