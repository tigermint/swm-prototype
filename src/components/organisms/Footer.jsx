import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseChimney, faRightFromBracket, faBook } from '@fortawesome/free-solid-svg-icons'

//component
import NavButton from '../atoms/NavButton';

const Wrapper = styled.div`
    position: sticky;
    left: 0px;
    right: 0px;
    bottom: 0px;
    z-index: 100;
`
const NavListSection = styled.div`
    width: 100%;
    height: 4rem;
    background-color: rgb(255, 255, 255);
    box-shadow: rgba(0, 0, 0, 0.16) 0px -1px 6px 0px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`



const Footer = () => {
    const navigate = useNavigate();

    return (
        <Wrapper>
            <NavListSection>
                <NavButton icon={<FontAwesomeIcon icon={faHouseChimney} size="xl" />} text={"회의실"} onClick={() => {
                    navigate("/space");
                }} />
                <NavButton icon={<FontAwesomeIcon icon={faBook} size="xl" />} text={"예약내역"} onClick={() => {
                    navigate("/me");
                }} />
                <NavButton icon={<FontAwesomeIcon icon={faRightFromBracket} size="xl" />} text={"로그아웃"} onClick={() => {
                    navigate("/");
                }} />
            </NavListSection>
        </Wrapper>
    );
}

export default Footer;
