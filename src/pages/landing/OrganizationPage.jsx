import { styled } from 'styled-components';
import Header from '../../components/organisms/Header';
import { Center, Input, Flex, Text, Button, Container } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
//apis
import {
    createOrganization,
    existsOrganizationByName,
    findOrganizationByName,
    joinToOrganization
} from "../../apis/supabaseOrganization";
import {getMyUserInform} from "../../apis/supabaseAuth";


const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 7.3rem);
  display: flex;
  justify-content: center;
`



const OrganizationPage = () => {

    //hooks
    const navigate = useNavigate();
    const [name, setName] = useState(""); //TODO: 이름 저장 state 해당 페이지보다 상위에서 props 로 관리
    const [organization, setOrganization] = useState("");
    const [isFound, setIsFound] = useState(false);

    //custom method
    const onClick = () => {
        console.log("click");

        existsOrganizationByName(organization).then(async (exists) => {
            const user = await getMyUserInform();
            let role = 'user';

            if (!exists) {
                await createOrganization(user['user_id'], organization);
                role = 'creator';
            }

            findOrganizationByName(organization).then(async (organization_inform) => {
                await joinToOrganization(user['user_id'], organization_inform['organization_id'], role);
                navigate("/space");
            });
        })
    }

    const handleSearch = (event) => {
        //TODO: 조직 검색 Input에 입력된 값 onChange로 받아와서 state에 저장
        const organization_input = event.target.value;
        console.log(organization_input);
        setOrganization(organization_input);
    }

    const handleCreate = (event) => {
        //TODO: 조직 생성 Input에 입력된 값 onChange로 받아와서 state에 저장
        const organization_input = event.target.value;
        console.log(organization_input);
        setOrganization(organization_input);
    }

    const handleIsFound = () => {
        //TODO: 조직이 존재하는지 확인하는 로직
        existsOrganizationByName(organization).then((exists) => {
            setIsFound(exists);
        });
    }

    return (
        <>
            <Header />
            <Wrapper >
                <Flex
                    mih={50}
                    gap="xl"
                    justify="center"
                    align="center"
                    direction="column"
                    wrap="wrap"
                >
                    <Container style={{ width: "18rem" }}>
                        <Center>
                            <Flex
                                direction="column"
                                align={"center"}
                            >
                                <Text size={"1.6em"} weight={"bolder"} >안녕하세요,</Text>
                                <Text size={"1.6em"} weight={"bolder"} >{name} 님!</Text>
                            </Flex>
                        </Center>
                    </Container>

                    {/* 조직 검색 */}
                    <Input.Wrapper
                        style={{ width: "100%" }}
                        id="input-demo"
                        withAsterisk
                        label="조직 검색"
                        size="md"
                        error={
                            isFound ?
                                <div style={{ color: "#00A300" }}>
                                    조직을 찾았습니다!
                                </div>
                                :
                                <div>
                                    일치하는 조직이 없습니다.
                                </div>
                        }
                    >
                        <Flex
                            justify={"space-between"}
                        >
                            <Input
                                style={{ width: "70%" }}
                                id='input-demo'
                                placeholder="조직을 검색해주세요"
                                size='lg'
                                radius='lg'
                                onChange={handleSearch}
                            />

                            <Button size='lg' radius="lg" variant="light"
                                color="indigo" onClick={handleIsFound}>검색</Button>
                        </Flex>

                    </Input.Wrapper>



                    {/* 조직 생성 */}
                    <Input.Wrapper
                        style={{ width: "100%" }}
                        id="input-demo"
                        withAsterisk
                        label="조직 생성"
                        size="md"
                        description="조직이 없다면, 조직을 생성해주세요"
                    >
                        <Input
                            id='input-demo'
                            placeholder="조직을 생성해주세요"
                            size='lg'
                            radius='lg'
                            onChange={handleCreate}
                        />
                    </Input.Wrapper>
                    <Button
                        style={{ width: "100%", height: "3.125rem" }}
                        onClick={onClick}
                        radius="lg"
                        variant="light"
                        color="indigo"
                        size="xl"
                        compact>
                        입장하기
                    </Button>
                </Flex >
            </Wrapper >
        </>
    );
};
export default OrganizationPage;
