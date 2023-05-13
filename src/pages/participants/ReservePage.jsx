import MainLayout from "../../components/MainLayout"
import SpaceGrid from "../../components/organisms/SpaceGrid"
import {styled} from 'styled-components';
import {Input, Flex, Button, Center, Text} from '@mantine/core';
import { TimeInput } from '@mantine/dates';
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getAuth} from "../../apis/supabaseAuth";
import {protoFindSpaceBySpaceId} from "../../apis/supabaseProto";

//styled-components
const Wrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 8.2rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`
const ReservePage = () => {
    const [spaces, setSpaces] = useState([]);
    const params = useParams();

    // url path 기준으로 회의실 정보 가져오기
    useEffect(() => {
        protoFindSpaceBySpaceId(params['id']).then((space) => {
            console.log(space);
            setSpaces([space]);
        });
    }, [])

    // xml 다 짜고 App.js 돌려놓기!
    return (
        <MainLayout>
            <Wrapper>
                <Flex
                    style={{ width: "20rem", marginTop: "2rem" }}
                    mih={50}
                    gap="xl"
                    justify="center"
                    align="center"
                    direction="column"
                    wrap="wrap">

                    {/* SpaceGrid 자리 */}
                    <SpaceGrid onClick = {() => {}} spaces={spaces}  />

                    {/* 이용 시작 시간 */}
                    <TimeInput
                        style={{width: "100%"}}
                        label="이용 시작 시간"
                        radius="md"
                        size="md"
                        withAsterisk
                        // onChange={(event) => { setSpace({ ...space, start_time: event.target.value }) }}
                    />
                    {/* 이용 종료 시간 */}
                    <TimeInput
                        style={{width: "100%"}}
                        label="이용 종료 시간"
                        radius="md"
                        size="md"
                        withAsterisk
                        //onChange={(event) => { setSpace({ ...space, end_time: event.target.value }) }}
                    />

                    
                    {/* 승열오빠 예약 그리드 들어올 자리 */}
                    {/* 여 ~ 기 */}


                    {/* 예약자명 */} 
                    <Input.Wrapper
                        style={{width: "100%"}}
                        id="input-reserve-name"
                        withAsterisk
                        label="예약자명"
                        size="md">
                        <Flex
                            justify={"space-between"} >
                            <Input
                                style={{width: "100%"}}
                                id='input-reserve-name'
                                placeholder="이름을 입력해주세요"
                                size='lg'
                                radius='lg' />
                        </Flex>
                    </Input.Wrapper>

                    {/* 이메일 */}
                    <Input.Wrapper
                        style={{width: "100%"}}
                        id="input-reserved-email"
                        withAsterisk
                        label="이메일"
                        size="md">
                        <Input
                            id='input-reserved-email'
                            placeholder="이메일을 입력해주세요"
                            size='lg'
                            radius='lg' />
                    </Input.Wrapper>

                    {/* 인원 수 */}
                    <Input.Wrapper
                        style={{width: "100%"}}
                        id="input-reserved-email"
                        withAsterisk
                        label="인원 수"
                        size="md">
                        <Input
                            id='input-reserved-email'
                            placeholder="이용하는 인원 수를 입력해주세요"
                            size='lg'
                            radius='lg'/>
                    </Input.Wrapper>


                    {/* 안내 멘트 */}
                    <Center
                        style={{marginTop: "2em", marginBottom: "-1.8em"}}>
                        <Text size={"0.8em"} weight={"bolder"}>예약 내역은 </Text>
                        <Text c="indigo" size={"0.8em"} weight={"bolder"}>예약자명</Text>
                        <Text size={"0.8em"} weight={"bolder"}>과 </Text>
                        <Text c="indigo" size={"0.8em"} weight={"bolder"}>이메일</Text>
                        <Text size={"0.8em"} weight={"bolder"}>로 조회하니</Text>
                    </Center>
                    <Center
                        style={{marginBottom: "-1em"}}>
                        <Text size={"0.8em"} weight={"bolder"}>다시 한 번 확인해주세요!</Text>
                    </Center>


                    {/* 예약하기 btn */}
                    <Button
                        style={{width: "100%", height: "3.125rem"}}
                        // onClick={onClick}
                        radius="lg" 
                        variant="light"
                        color="indigo"
                        size="xl"
                        compact>
                        예약하기
                    </Button>
                </Flex>
            </Wrapper>
        </MainLayout>
    );
}
export default ReservePage;