import { useState } from 'react';
import { createStyles, Table, ScrollArea, rem, Button, Center } from '@mantine/core';

const useStyles = createStyles((theme) => ({
    header: {
        position: 'sticky',
        top: 0,
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
        transition: 'box-shadow 150ms ease',

        '&::after': {
            content: '""',
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            borderBottom: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[2]
                }`,
        },
    },

    scrolled: {
        boxShadow: theme.shadows.sm,
    },
}));


export default function TableScrollArea({ data }) {
    const { classes, cx } = useStyles();
    const [scrolled, setScrolled] = useState(false);

    const rows = data.map((row) => (
        <tr key={row.reservation_name}>
            <td>{row.time}</td>
            <td>
                <Center>
                    {row.reservation_name}
                </Center>
            </td>
            <td>
                <Center>
                    {row.people_num}
                </Center>
            </td>
            <td>
                {<Button onClick={() => { }} variant="light" color="red" radius="sm" size="sm" compact>취소</Button>}
            </td>
        </tr>
    ));
    return (
        <ScrollArea style={{ width: "100%", padding: "1rem", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", borderRadius: "1rem" }} type={"never"} h={200} onScrollPositionChange={({ y }) => setScrolled(y !== 0)}>
            <Table miw={"1rem"} fontSize={'sm'} highlightOnHover>
                <thead style={{ zIndex: "1" }} className={cx(classes.header, { [classes.scrolled]: scrolled })}>
                    <tr >
                        <th>예약시간</th>
                        <th>예약자명</th>
                        <th>인원</th>
                        <th>취소하기</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </Table>
        </ScrollArea>
    );
}