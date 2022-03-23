import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: rgb(34, 40, 87);
  border-radius: 5px;
  border: 0.5px solid dodgerblue;
  color: whitesmoke;
  font-size: larger;
  width: 5.5em;
  height: 2em;
  text-align: center;
  margin: 12px;

   &:hover {
    background-color: dodgerblue;
    color: rgb(34, 40, 87);
    cursor: pointer ;
  }
`;

export default StyledButton
