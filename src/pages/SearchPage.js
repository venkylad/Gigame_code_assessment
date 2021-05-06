import React, { useEffect, useState } from "react";
import Joblists from "../components/Joblists";
import FormFields from "../components/FormFields";
import { jobData } from "../data";

const SearchPage = () => {
  return (
    <div>
      <FormFields />
      <Joblists />
    </div>
  );
};

export default SearchPage;
