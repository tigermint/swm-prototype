import MainLayout from "../../components/MainLayout"
import {styled} from 'styled-components';
import {Center, Input, Flex, Text, Button} from '@mantine/core';
import {useState} from "react";
import {
    protoCreateOrganization,
    protoExistsReservationByNameAndEmail, protoFindAllReservationByNameAndEmail,
    protoFindOrganizationByName
} from "../../apis/supabaseProto";

//styled-components
const Wrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 8.2rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const ReservationCheckPage = () => {

    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [isNotFound, setIsNotFound] = useState(false);

    const onClick = async () => {
        console.log("click");

        protoExistsReservationByNameAndEmail(userName, userEmail).then((exists) => {
            if (!exists) {
                console.error("예약내역이 없습니다");
                setIsNotFound(true);
            } else {
               protoFindAllReservationByNameAndEmail(userName, userEmail).then((reservations) => {
                   console.log(reservations);
                   console.log("예약내역 페이지로 이동하는 로직을 넣을 것!");
               })
            }
        });
    }

    const handleUserName = (event) => {
        const userName_input = event.target.value;
        console.log("예약자: " + userName_input);
        setUserName(userName_input);
    }

    const handleUserEmail = (event) => {
        const userEmail_input = event.target.value;
        console.log("이메일: " + userEmail_input);
        setUserEmail(userEmail_input);
    }

    // xml
    return (
        <MainLayout>
            <Wrapper>
                <Flex
                    mih={50}
                    gap="xl"
                    justify="center"
                    align="center"
                    direction="column"
                    wrap="wrap"
                >
                    <Center
                        style={{marginBottom: "2rem"}}
                    >
                        <Text size={"1.6em"} weight={"bolder"}>예약 확인을 위해 입력해주세요! </Text>
                    </Center>

                    {/* 이름 logic */} 
                    <Input.Wrapper
                        style={{width: "100%"}}
                        id="input-reserved-name"
                        withAsterisk
                        label="예약자명"
                        size="md"
                    >
                        <Flex
                            justify={"space-between"}
                        >
                            <Input
                                style={{width: "100%"}}
                                id='input-demo'
                                placeholder="이름을 입력해주세요"
                                size='lg'
                                radius='lg'
                                onChange={handleUserName}
                            />
                        </Flex>
                    </Input.Wrapper>


                    {/* 이메일 */}
                    <Input.Wrapper
                        style={{width: "100%"}}
                        id="input-reserved-email"
                        withAsterisk
                        label="이메일"
                        size="md"
                        // description="조직이 없다면, 조직을 생성해주세요"
                        error={
                            !isNotFound ?
                                <div style={{color: "#00A300"}}>
                                </div>
                                :
                                <div>
                                    예약내역이 없습니다.
                                </div>
                        }
                    >
                        <Input
                            id='input-reserved-email'
                            placeholder="이메일을 입력해주세요"
                            size='lg'
                            radius='lg'
                            onChange={handleUserEmail}
                        />
                    </Input.Wrapper>

                    <Button
                        style={{width: "100%", height: "3.125rem"}}
                        onClick={onClick}
                        radius="lg"
                        variant="light"
                        color="indigo"
                        size="xl"
                        compact>
                        완료
                    </Button>
                </Flex>
            </Wrapper>
        </MainLayout>

    )
}
export default ReservationCheckPage;