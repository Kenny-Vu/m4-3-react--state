import React, { useState } from "react";
import styled from "styled-components";

const Input = styled.input`
   {
    border-radius: 4px;
    border: thin solid;
    height: 2.5rem;
    width: 300px;
    padding: 0.25rem;
    font-size: 1.25rem;
  }
`;
const Button = styled.button`
  height: 2.5rem;
  width: 80px;
  background-color: #24a0ed;
  border-radius: 4px;
  color: #fff;
  border: none;
  margin: 0.5rem;
  font-size: 1.25rem;
  padding: 0.5rem;
`;

const Typeahead = ({ data, handleSelect }) => {
  const [value, setValue] = useState("");
  return (
    <>
      <Input
        value={value}
        onChange={(event) => setValue(event.target.value)}
      ></Input>
      <Button onClick={() => setValue("")}>Clear</Button>
    </>
  );
};

export default Typeahead;
