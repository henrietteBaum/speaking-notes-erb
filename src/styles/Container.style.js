import styled from "styled-components";


export const Container = styled.div`
  width: 100vh;
  height: 80vh;
  display: grid;
  grid-gap: 12px;
  margin-left: 12px;
  grid-template-areas:
    'ico header header'
    'asideLeft main main'
    'footerLeft footerMid footerRight'
  ;

  grid-template-columns: 30% 20% 30em;
  grid-template-rows: 70px 85% 15%;
`;

export default Container
