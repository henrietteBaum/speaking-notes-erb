import styled from "styled-components";

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const StyledSidebar = styled(Section)`
    grid-area: asideLeft;
`;

export default StyledSidebar