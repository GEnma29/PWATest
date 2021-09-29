import { useState, useEffect } from "react";

const componente = (props) => {
  const [text, setText] = useState("");
  useEffect(() => {
    setText("react js");
  });

  return <h1>{text}</h1>;
};

export default componente;
