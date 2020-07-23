import React, { useState } from "react";
import styled from "styled-components";

//STYLING
const Input = styled.input`
  border-radius: 4px;
  border: thin solid;
  height: 2.5rem;
  width: 500px;
  padding: 0.25rem;
  font-size: 1.25rem;
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
  padding: 0.5rem 0;
  box-shadow: 0 0 4px grey;

  li {
    padding: 0.5rem;
  }
  li span {
    font-weight: bold;
  }
`;

//COMPONENT
const Typeahead = ({ suggestions, handleSelect }) => {
  const [entry, setEntry] = useState("");
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = React.useState(
    -1
  );
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
          onKeyDown={(event) => {
            switch (event.key) {
              case "Enter": {
                handleSelect();
                return;
              }
              case "ArrowUp": {
                setSelectedSuggestionIndex(selectedSuggestionIndex - 1);
                return;
              }
              case "ArrowDown": {
                setSelectedSuggestionIndex(selectedSuggestionIndex + 1);
                return;
              }
            }
          }}
        ></Input>
        <Button onClick={() => setEntry("")}>Clear</Button>
        <div>
          {matchedSuggestions.length > 0 && (
            <Suggestions>
              {matchedSuggestions.map((match, index) => {
                const firstHalf = match.title.slice(
                  0,
                  index + 1 + entry.length
                );
                const secondHalf = match.title.slice(index + 1 + entry.length);
                const isSelected = index === selectedSuggestionIndex;
                return (
                  <li
                    key={match.id}
                    onClick={handleSelect}
                    onMouseEnter={(event) => {
                      setSelectedSuggestionIndex(index);
                    }}
                    style={
                      isSelected
                        ? { backgroundColor: "hsla(50deg,100%,80%,0.25)" }
                        : { backgroundColor: "" }
                    }
                  >
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
