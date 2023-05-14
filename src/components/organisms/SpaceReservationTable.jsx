import { Flex, Text } from "@mantine/core";
import StickyHeaderTable from "../atoms/StickyHeaderTable";

const SapceReservationTable = ({ space, data }) => {
    return (
        <Flex style={{ width: "100%" }} direction={"column"} align={"center"}>
            <Text style={{ marginBottom: "0.5rem" }} weight={"bolder"}>{space}</Text>
            <StickyHeaderTable data={data} />
        </Flex>
    )
}
export default SapceReservationTable;