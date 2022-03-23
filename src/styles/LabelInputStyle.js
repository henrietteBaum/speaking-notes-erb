import styled from "styled-components";

export const StyledLabel = styled.label`
  grid-area: footerMid;
  background-color: rgb(34, 40, 87);
  border: 0.5px solid dodgerblue;
  border-radius: 5px;
  color: whitesmoke;
  font-size: larger;
  width: 5.5em;
  height: 1.6em;
  text-align: center;
  padding-top: 0.3em;
  margin: 12px;

   &:hover {
    background-color: dodgerblue;
    color: rgb(34, 40, 87);
    cursor: pointer;
  }
`;
