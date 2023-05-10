import { styled } from "styled-components";


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    :hover {
        cursor: pointer;
    }
`
const IconSection = styled.div`
    margin-bottom: 0.5rem;
`
const LabelSection = styled.div`
    font-size: 0.9rem;
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