import { styled } from 'styled-components';
import { Button } from '@mantine/core';

const Wrapper = styled.div`
    position: sticky;
    top: 0px;
    z-index: 100;
    height: 3.2rem;
    width: 100%;
    background-color: rgb(255, 255, 255);
    padding: 0.5rem 0px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    
`;

const Logo = styled.div`
    font-size: 2em;
    padding-left: 20px;
`;

const ButtonWrapper = styled.div`
    padding-right: 20px;

`

const Header = () => {
    return (

        <Wrapper>
            <div>
                <Logo>Hello</Logo>
            </div>
            <ButtonWrapper>
                <Button variant="light" color="indigo" radius="md" size="xl" compact>공간 추가</Button>
            </ButtonWrapper>
        </Wrapper>
    );
}

export default Header;