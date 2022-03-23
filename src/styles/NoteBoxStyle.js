import styled from "styled-components";

export const StyledTextarea = styled.textarea`
  grid-area: main;
  width: 35em;
  padding: 1em;
  background-color: rgb(34, 40, 87);
  border-radius: 5px;
  color: whitesmoke;
  font-familiy: 'Verdana', 'sans-serif';
  letter-spacing: 2px;
  font-size: x-large;

  &:focus {
    outline: none;
    border-color: dodgerblue;
  }
`;

export default StyledTextarea
