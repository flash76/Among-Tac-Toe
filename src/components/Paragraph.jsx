import { useState } from "react";
const Paragraph = (props) => {
  // const [thisId, setThisId] = useState(id);
  return (
    <p
      onClick={() => {
        alert("You clicked " + thisId);
      }}
    >
      {props.children}
    </p>
  );
};

export default Paragraph;
