import MainLayout from "../../components/MainLayout"
import {styled} from 'styled-components';
import {Center, Input, Flex, Text, Button} from '@mantine/core';

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
                         /* error={
                            isFound ?
                                <div style={{color: "#00A300"}}>
                                </div>
                                :
                                <div>
                                    일치하는 이름이 없습니다.
                                </div>
                        } */
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
                                // onChange={handleSearch}
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
                    >
                        <Input
                            id='input-reserved-email'
                            placeholder="이메일을 입력해주세요"
                            size='lg'
                            radius='lg'
                            // onChange={handleCreate}
                        />
                    </Input.Wrapper>

                    <Button
                        style={{width: "100%", height: "3.125rem"}}
                        // onClick={onClick}
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