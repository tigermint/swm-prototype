import {styled} from 'styled-components';
import Header from '../../components/organisms/Header';
import {Center, Input, Flex, Text, Button, Container} from '@mantine/core';
import {useNavigate} from 'react-router-dom';
import {IconMoodCheck} from '@tabler/icons-react';
//component
import {useEffect, useState} from 'react';
import {getAuth, getMyUserInform, signUp} from "../../apis/supabaseAuth";
import {existsUserJoinedOrganization} from "../../apis/supabaseOrganization";


const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 7.3rem);
  display: flex;
  justify-content: center;
`


const NamePage = () => {
    //hooks
    const navigate = useNavigate();
    const [name, setName] = useState("");

    // 이미 가입한 유저라면 이름 입력 및 회원등록 페이지를 건너뛴다.
    useEffect(() => {
        getMyUserInform().then(async (user) => {
            if (user !== undefined) {
                const joinedUser = await existsUserJoinedOrganization(user['user_id']);
                if (joinedUser) {
                    navigate("/space");
                } else {
                    navigate("/organization");
                }
            }
        })
    }, []);

    //custom method
    const onClick = () => {
        getAuth().then(async (uuid) => {
            await signUp(uuid, name);
            navigate("/organization");
        })
    }

    const handleName = (event) => {
        setName(event.target.value);
    }

    return (
        <>
            <Header/>
            <Wrapper>
                <Flex
                    mih={50}
                    gap="xl"
                    justify="center"
                    align="center"
                    direction="column"
                    wrap="wrap"
                >
                    <Container style={{width: "18rem"}}>
                        <Center>
                            <Text size={"1.6em"} weight={"bolder"}>이름(본명)을 입력해주세요!</Text>
                        </Center>
                    </Container>
                    <Input
                        style={{width: "100%"}}
                        icon={<IconMoodCheck/>}
                        placeholder="이름을 입력해주세요"
                        radius="lg"
                        variant='default'
                        size="lg"
                        onChange={handleName}
                    />
                    <Button
                        style={{width: "100%", height: "3.125rem"}}
                        onClick={onClick}
                        radius="lg"
                        variant="light"
                        color="indigo"
                        size="xl"
                        compact>
                        완료하기
                    </Button>
                </Flex>
            </Wrapper>
        </>
    );
};
export default NamePage;
