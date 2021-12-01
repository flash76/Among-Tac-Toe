import { useState } from "react";

export const Board = (props) => {
  const [board, setBoard] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);
  return (
    <div style={styles.centerAllChildren}>
      <div>
        <Paragraph id={0} />
        <Paragraph id={1} />
        <Paragraph id={2} />
      </div>
      <div>
        <Paragraph id={3} />
        <Paragraph id={4} />
        <Paragraph id={5} />
      </div>
      <div>
        <Paragraph id={6} />
        <Paragraph id={7} />
        <Paragraph id={8} />
      </div>
    </div>
  );
};
