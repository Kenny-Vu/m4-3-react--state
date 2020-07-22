import React from "react";

import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";

import { categories } from "../data";
import data from "../data";
import Typeahead from "./Typeahead";

const Wrapper = styled.div`
   {
    text-align: center;
    padding: 0.5rem;
    margin: 0.5rem;
  }
`;

const App = (props) => {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Typeahead
          suggestions={data.books}
          handleSelect={(suggestions) => {
            window.alert(suggestions);
          }}
        />
      </Wrapper>
    </>
  );
};

export default App;
