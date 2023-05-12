import { styled } from "styled-components";

const StyledContentLayout = styled.div`
    width: 100%;
    min-height: calc(100vh - 8.2rem);
    background-color: rgb(255, 255, 255);
    position: relative;
    
`

const ContentLayout = ({ children }) => {
    return (
        <StyledContentLayout>
            {children}
        </StyledContentLayout>
    );
}
export default ContentLayout;
