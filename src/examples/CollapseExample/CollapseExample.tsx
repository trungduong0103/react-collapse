import React from "react";
import { Collapse } from "../../components/Collapse";
import { CardHeader, Card } from "./components";

const CollapseExample = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <CardHeader />
      <Collapse isOpen={isOpen}>
        <Card />
      </Collapse>
      <button onClick={() => setIsOpen((prev) => !prev)}>
        {isOpen ? "Collapse" : "Expand"}
      </button>
    </>
  );
};

export { CollapseExample };
