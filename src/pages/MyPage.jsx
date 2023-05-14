import { useEffect, useState } from "react";
import { Container, Group, Text, Center, ScrollArea } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
// import MiniCalendar from "../components/atoms/Calendar";
import { styled } from 'styled-components';

//component
import MainLayout from "../components/MainLayout";
import tableMockData from "../../src/assets/tableMockData";
import StickyHeaderTable from "../components/atoms/StickyHeaderTable";
import SpaceReservationTable from "../components/organisms/SpaceReservationTable";

//styled-components
const Wrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 8.2rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`

const MyPage = () => {
    const [value, setValue] = useState([Date, Date]);

    // const handleDateChange = (newValue) => {
    //     setValue(newValue);
    // };

    // //TODO: 렌더링 시 공간 예약 데이터 가져오기
    // useEffect(() => {
    //     console.log("MyPage");
    // }, []);

    //TODO: 공간 당 테이블 데이터들을 렌더링해서 가져옴
    return (
        <MainLayout>
            <Wrapper>
                <Center style={{ display: "flex", flexDirection: "column" }}>
                    <Text size={"1.1rem"} weight={"bolder"} >날짜를 선택해주세요</Text>
                    <Group style={{ width: "20rem", marginTop: "1rem", padding: "1rem 4rem", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", borderRadius: "1rem" }} position="center" spacing={"xl"}>
                        <DatePicker type="default" value={value} onChange={setValue} />
                    </Group>
                </Center>
                <Center style={{ width: "20rem", marginBottom: "5rem" }}>
                    <SpaceReservationTable space={"씨앗방2"} data={tableMockData} />
                </Center>
            </Wrapper>
        </MainLayout>
    );
}

export default MyPage;