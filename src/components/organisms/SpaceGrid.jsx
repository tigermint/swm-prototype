import { createStyles, SimpleGrid, Card, Image, Text, Container, AspectRatio } from '@mantine/core';
import data from '../../assets/mockdata';

const useStyles = createStyles((theme) => ({
    card: {
        boxShadow: theme.shadows.md,
        // transition: 'transform 150ms ease, box-shadow 150ms ease',

        // '&:hover': {
        //     transform: 'scale(1.01)',
        //     boxShadow: theme.shadows.md,
        // },
    },

    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontWeight: 600,
    },
}));

export default function SpaceGrid({ onClick }) {
    const { classes } = useStyles();

    const cards = data.map((article, index) => (
        <Card
            key={article.title}
            p="md"
            radius="md"
            component="a"
            href={index}
            className={classes.card}
            onClick={() => {
                onClick(index);
            }}>
            <AspectRatio ratio={1920 / 1080}>
                <Image src={article.image} />
            </AspectRatio>
            <Text color="dimmed" size="xs" transform="uppercase" weight={700} mt="md">
                {article.date}
            </Text>
            <Text className={classes.title} mt={5}>
                {article.title}
            </Text>
        </Card>
    ));

    return (
        <Container py="xl">
            <SimpleGrid cols={1} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
                {cards}
            </SimpleGrid>
        </Container>
    );
}
