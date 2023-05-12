import { createStyles, SimpleGrid, Card, Text, Container, Button, Flex } from '@mantine/core';
import data from '../../assets/mockdata';
import React from 'react';

const useStyles = createStyles((theme) => ({
    card: {
        boxShadow: theme.shadows.md,
        // transition: 'transform 150ms ease, box-shadow 150ms ease',

        // '&:hover': {
        //     transform: 'scale(1.01)',
        //     boxShadow: theme.shadows.md,
        // },
    },

    name: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontWeight: 600,
        fontSize: 21,
        marginBottom: theme.spacing.md,
    },
    day: {
        color: theme.colors.gray[6],
        fontWeight: 600,
    },
    time: {
        color: theme.colors.gray[6],
        fontWeight: 600,
    },
    capacity: {
        color: theme.colors.gray[6],
        fontWeight: 600,
    },

}));

export default function SpaceGrid({ onClick }) {
    const { classes } = useStyles();

    const cards = data.map((space, index) => (
        <Card
            key={space.name}
            p="md"
            radius="md"
            component="a"
            className={classes.card}
        >
            <Flex justify={'space-between'}>
                <Text
                    className={classes.name}
                >
                    {space.name}
                </Text>
                <Button onClick={() => { }} variant="light" color="indigo" radius="md" size="md" compact>링크 복사</Button>
            </Flex>
            <Text className={classes.day}>
                이용 가능 요일: {space.day}
            </Text>
            <Text className={classes.time}>
                이용 가능 시간: {space.startTime} ~ {space.endTime}
            </Text>
            <Text className={classes.capacity}>
                최대 수용 인원: {space.capacity} 명
            </Text>
        </Card >
    ));

    return (
        <Container py="xl">
            <SimpleGrid cols={1}>
                {cards}
            </SimpleGrid>
        </Container >
    );
}

