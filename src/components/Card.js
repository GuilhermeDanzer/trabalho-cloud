import React from "react";
import styled from "styled-components";
const RecipeContainer = styled.div`
  background-color: #fff;
    padding:10px;
    margin-left: 10px;
    border-radius: 20px;
    margin-top: 20px;
    overflow: hidden;

    flex: 1 1 300px;
}
`;
export const Card = ({ children }) => {
  return <RecipeContainer>{children}</RecipeContainer>;
};
