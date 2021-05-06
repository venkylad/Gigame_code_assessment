import React from "react";

// POINT NEED TO BE NOTED THAT BELOW DATA WILL BE SAME FOR ALL ALL JOB DESCRIPTION  COMPONENTS

const JobRightDescription = () => {
  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        accumsan dui enim, in tincidunt purus suscipit ac. Phasellus tincidunt
        viverra eros, ut fermentum augue vulputate quis. Aenean gravida vehicula
        posuere. Sed dignissim mattis odio eu iaculis. Donec euismod vel orci eu
        efficitur. Sed non odio semper, sagittis nisl eu, mollis urna. Donec
        condimentum vehicula nulla, sit amet.
      </p>
      <p>
        imperdiet justo ullamcorper eget. Curabitur pellentesque ante in eros
        rhoncus ultricies. Fusce porttitor porttitor est, eget volutpat ipsum
        malesuada nec. Nunc lobortis orci tempor justo eleifend vulputate.
        Vestibulum eleifend id mi vel ultrices.
      </p>

      <h4 className="job_desc_side_heading">You will :</h4>
      <ul>
        <li>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          accumsan dui enim, in tincidunt purus suscipit ac
        </li>
        <li>
          Phasellus tincidunt viverra eros, ut fermentum augue vulputate quis
        </li>
        <li>
          Aenean gravida vehicula posuere. Sed dignissim mattis odio eu iaculis.
          Donec euismod vel orci
        </li>
        <li>
          efficitur. Sed non odio semper, sagittis nisl eu, mollis urna. Donec
          condimentum vehicula nulla, sit amet
        </li>
        <li>
          {" "}
          eu imperdiet justo ullamcorper eget. Curabitur pellentesque ante in
          eros rhoncus ultricies.
        </li>
        <li>
          porttitor est, eget volutpat ipsum malesuada nec. Nunc lobortis orci
          tempor justo eleifend vulputate. Vestibulum eleifend id mi vel
          ultrices.
        </li>
      </ul>
      <h4 className="job_desc_side_heading">Our Ideal Candidate will have :</h4>
      <ul>
        <li>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          accumsan dui enim, in tincidunt purus suscipit ac
        </li>
        <li>
          Phasellus tincidunt viverra eros, ut fermentum augue vulputate quis
        </li>
        <li>
          Aenean gravida vehicula posuere. Sed dignissim mattis odio eu iaculis.
          Donec euismod vel orci
        </li>
        <li>
          efficitur. Sed non odio semper, sagittis nisl eu, mollis urna. Donec
          condimentum vehicula nulla, sit amet
        </li>
        <li>
          {" "}
          eu imperdiet justo ullamcorper eget. Curabitur pellentesque ante in
          eros rhoncus ultricies.
        </li>
      </ul>
      <h4 className="job_desc_side_heading">Nice To haves :</h4>
      <ul>
        <li>SQL skills may not be helpful</li>
        <li>Readind and Writing of english is not mandatory.</li>
        <li>Candidate need not be trained in any programming language.</li>
      </ul>
    </div>
  );
};

export default JobRightDescription;
