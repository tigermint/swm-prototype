import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faCalendar, faShareFromSquare } from '@fortawesome/free-regular-svg-icons'
import { useState, useEffect } from "react";

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
    const [space, setSpace] = useState("");
    const [reservation, setReservation] = useState("");

    useEffect(() => {
        window.location.pathname === "/space" ? setSpace("#3864FF") : setSpace("#656A7B");
        window.location.pathname === "/me" ? setReservation("#3864FF") : setReservation("#656A7B");
    }, [])

    return (
        <Wrapper>
            <NavListSection>
                <NavButton icon={<FontAwesomeIcon icon={faBuilding} size="xl" color={space} />} text={"회의실"} color={space} onClick={() => {
                    navigate("/space");
                }} />
                <NavButton icon={<FontAwesomeIcon icon={faCalendar} size="xl" color={reservation} />} text={"예약내역"} color={reservation} onClick={() => {
                    navigate("/me");
                }} />
                <NavButton icon={<FontAwesomeIcon icon={faShareFromSquare} size="xl" color={"#656A7B"} />} text={"로그아웃"} color={"#656A7B"} onClick={() => {
                    navigate("/");
                }} />
            </NavListSection>
        </Wrapper>
    );
}

export default Footer;
