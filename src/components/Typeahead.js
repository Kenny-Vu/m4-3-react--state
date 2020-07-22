import React, { useState } from "react";
import styled from "styled-components";

const Input = styled.input`
   {
    border-radius: 4px;
    border: thin solid;
    height: 2.5rem;
    width: 500px;
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
const Suggestions = styled.ul`
   {
    padding: 0.5rem 0;
    box-shadow: 0 0 4px grey;
  }
  li {
    padding: 0.5rem;
  }
  li:hover {
    background-color: #fffff4;
  }
  li span {
    font-weight: bold;
  }
`;

const Typeahead = ({ suggestions, handleSelect }) => {
  const [entry, setEntry] = useState("");
  let matchedSuggestions = suggestions.filter((book) => {
    //only activate the typeAhead if user typed at least 2 characters
    if (entry.length > 1) {
      return book.title.toLowerCase().includes(entry.toLowerCase());
    }
  });

  return (
    <>
      <div>
        <Input
          value={entry}
          onChange={(event) => setEntry(event.target.value)}
          onKeyDown={(event) => event.key === "Enter" && handleSelect()}
        ></Input>
        <Button onClick={() => setEntry("")}>Clear</Button>
        <div>
          {matchedSuggestions.length > 0 && (
            <Suggestions>
              {matchedSuggestions.map((match) => {
                let index = match.title.search(entry);
                let firstHalf = match.title.slice(0, index + 1 + entry.length);
                let secondHalf = match.title.slice(index + 1 + entry.length);
                return (
                  <li onClick={handleSelect}>
                    {firstHalf}
                    <span>{secondHalf}</span>
                  </li>
                );
              })}
            </Suggestions>
          )}
        </div>
      </div>
    </>
  );
};

export default Typeahead;
