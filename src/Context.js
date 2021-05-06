import React, { useState, useEffect } from "react";
import { jobData } from "./data";

export const Context = React.createContext();

export const ContextProvider = ({ children }) => {
  //state for job listing and serach
  const [search, setSearch] = useState("");
  const [data, setData] = useState(jobData);

  // handles search query
  const handleSearch = (input) => {
    setSearch(input);
  };

  // function filteres the state based on search
  const filteredSearch = data.filter((job) => {
    return job.role.toLowerCase().includes(search.toLowerCase());
  });

  // onClick to set State to normal
  const handleReset = () => {
    const input = "";
    setData(jobData);
    setSearch(input);
  };

  // whenever search gets updated job list state need to be updated changed as per search
  useEffect(() => {
    setData(
      data.filter((job) => {
        return job.role.toLowerCase().includes(search.toLowerCase());
      })
    );
    if (search == "") {
      setSearch("");
      setData(jobData);
    }
  }, [search]);

  return (
    //context provider to pass data to other components
    <Context.Provider
      value={{
        data,
        handleSearch,
        filteredSearch,
        handleReset,
      }}
    >
      {children}
    </Context.Provider>
  );
};
