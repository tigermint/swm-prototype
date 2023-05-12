import { styled } from 'styled-components';
import Header from '../../components/organisms/Header';
import { Text, Flex } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
//component
import { GoogleButton } from '../../components/atoms/SocialButton/index';
//apis
import { googleLogin } from "../../apis/supabaseAuth";


const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 8.3rem);
  display: flex;
  justify-content: center;
`

const Test1Page = () => {
  //hooks
  const navigate = useNavigate();

  //custom method
  const onClick = () => {
    console.log("click");
    googleLogin('http://localhost:3000/name');
  }
  return (
    <>
      <Header />
      <Wrapper>
        <Flex
          mih={50}
          gap="xl"
          justify="center"
          align="center"
          direction="column"
          wrap="wrap"
        >
          <Text size={"1.6em"} weight={"bolder"} >생성자 모드입니다.</Text>
          {/* <GoogleButton onClick={onClick} children={"Continue with Google"} /> */}
        </Flex>
      </Wrapper>
    </>
  );
};
export default Test1Page;