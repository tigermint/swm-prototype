import { Button, Flex } from "@mantine/core";
import { useEffect, useState } from "react";

const weekData = [
    "월", "화", "수", "목", "금", "토", "일"
]

const WeekPicker = ({ week }) => {
    const [state, setState] = useState(week);

    useEffect(() => {
        console.log(state);
    }, [state])

    const weekButtons = weekData.map((day, index) => {
        return (
            <Button id={index} onClick={() => {
                setState((prev) => {
                    const newState = [...prev];
                    newState[index] = !newState[index];
                    return newState;
                })
            }} size='md' radius="sm" variant={"light"} color={state[index] ? "indigo" : "gray"} compact> {day}</Button >
        )
    })

    return (
        <Flex style={{ marginTop: "0.2rem" }} justify={"space-between"} >
            {weekButtons}
        </Flex >
    )

}
export default WeekPicker;
