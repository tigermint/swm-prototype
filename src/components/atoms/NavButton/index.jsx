import { styled } from "styled-components";


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const IconSection = styled.div`
    margin-bottom: 0.5rem;
`
const LabelSection = styled.div`
    font-size: 1rem;
    font-weight: bold;
    color: ${props => props.color};
`

const NavButton = ({ icon, text, color, onClick }) => {
    return (
        <Wrapper onClick={onClick}>
            <IconSection>{icon}</IconSection>
            <LabelSection color={color}>{text}</LabelSection>
        </Wrapper>
    )
}
export default NavButton;