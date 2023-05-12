import { Button, Center, Grid } from "@mantine/core";
import { styled } from "styled-components";

const Wrapper = styled.div`
    width: 100%;
`;

//dummy data
const timeData = [
    "00:00", "00:30", "01:00", "01:30", "02:00", "02:30",
    "3:00", "3:30", "4:00", "4:30", "5:00", "5:30",
    "6:00", "6:30", "7:00", "7:30", "8:00", "8:30",
    "9:00", "9:30", "10:00", "10:30", "11:00", "11:30",
    "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
    "15:00", "15:30", "16:00", "16:30", "17:00", "17:30",
    "18:00", "18:30", "19:00", "19:30", "20:00", "20:30",
    "21:00", "21:30", "22:00", "22:30", "23:00", "23:30",
]

const TimeSection = () => {
    return (
        <Wrapper>
            <div>
                <Grid>
                    {
                        // timeData.map((time) => {
                        //     return (
                        //         <Grid.Col span={3}>
                        //             <Center>
                        //                 <Button variant="outline" radius="md">
                        //                     {time}
                        //                 </Button>
                        //             </Center>
                        //         </Grid.Col>
                        //     )
                        // })
                    }

                </Grid>
            </div>
        </Wrapper>
    );
}
export default TimeSection;