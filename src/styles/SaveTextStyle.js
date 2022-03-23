import styled from "styled-components";

export const StyledInputSave = styled.div`
  grid-area: footerRight;
`;

export const StyledFileName = styled.input`
  font-family: monospace;
  font-size: 20px;
  color: white;
  background-color: rgb(34, 40, 87);
  border: 0.5px solid dodgerblue;
  border-radius: 5px;
  height: 1.5em;
  padding: 0.2em;
  margin-bottom: 0.5em;
  margin-left: 8px;

  &:focus {
    background-color: rgb(30,144,255, 0.5);
    border-color: rgb(4, 4, 51);
    color: rgb(4, 4, 51);
    font-weight: bold;
    outline: none;
  }
`
