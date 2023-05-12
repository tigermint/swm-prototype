import { Input, Button, Flex } from '@mantine/core';
import { TimeInput } from '@mantine/dates';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';

//components
import MainLayout from '../../components/MainLayout';
import WeekPicker from '../../components/organisms/WeekPicker';
import { useEffect, useState } from 'react';

//styled-components
const Wrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 8.2rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

const SpaceCreatePage = () => {
  const [space, setSpace] = useState({
    name: "",
    start_time: "",
    end_time: "",
    capacity: "",
    available_day: [false, false, false, false, false, false, false],
  });


  const navigate = useNavigate();

  const handleSpaceData = () => {
    //TODO: space data를 받아서 supabase에 저장하는 로직
    console.log(space);
    navigate("/space");
  }

  useEffect(() => {
    console.log(space);
  }, [space])

  return (
    <MainLayout>
      <Wrapper>
        <Flex
          style={{ width: "20rem", marginTop: "2rem" }}
          mih={50}
          direction={"column"}
          gap={"2.5rem"}
        >
          <Input.Wrapper
            withAsterisk
            label="공간 이름"
            size="md"
          >
            <Input
              placeholder="공간 이름을 입력해주세요"
              size='md'
              radius='md'
              onChange={(event) => { setSpace({ ...space, name: event.target.value }) }}
            />
          </Input.Wrapper>

          <TimeInput
            label="예약 가능 시작 시간 * (00:00~)"
            radius="md"
            size="md"
            withAsterisk
            onChange={(event) => { setSpace({ ...space, start_time: event.target.value }) }}
          />
          <TimeInput
            label="예약 가능 종료 시간 * (~24:00)"
            radius="md"
            size="md"
            withAsterisk
            onChange={(event) => { setSpace({ ...space, end_time: event.target.value }) }}
          />
          <Input.Wrapper
            withAsterisk
            label="최대 수용 가능 인원"
            size="md"
          >
            <Input
              id='input-demo'
              placeholder="최대 수용 가능 인원을 입력해주세요"
              size='md'
              radius='md'
              onChange={(event) => { setSpace({ ...space, capacity: event.target.value }) }}
            />
          </Input.Wrapper>
          <Input.Wrapper
            withAsterisk
            label="이용 가능 요일"
            size="md"
          >
            <WeekPicker week={space.available_day} />
          </Input.Wrapper>
        </Flex>
        <Button style={{ width: "20rem", marginBottom: "4rem" }} size='lg' radius="md" variant="light"
          color="indigo" onClick={handleSpaceData}>공간 생성하기</Button>
      </Wrapper>
    </MainLayout >
  );
};
export default SpaceCreatePage;
