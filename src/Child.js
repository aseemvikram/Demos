import { memo } from "react";
import { View, Text } from "react-native";
import { styled } from "styled-components";

const Container = styled(View)`
    padding:5px;
    border-radius:10px;
    width:350px;
    margin-bottom:20px;
    border: 1px solid black;
    `
const Child = ({ fun, counterTwo }) => {
    fun();
    return (
        <Container>

            <Text>  In Child component: {counterTwo} </Text>

        </Container>
    )
}
export default memo(Child);