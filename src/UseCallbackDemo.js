import { useCallback, useState } from "react";
import { Button, View, Text } from "react-native";
import { styled } from "styled-components";
import Child from "./Child";

const Container = styled(View)`
    padding:5px;
    border-radius:10px;
    margin-bottom:20px;
    `
export default function UseCallbackDemo() {
    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    const incrementOne = () => {
        setCounterOne(counterOne + 1);
    }

    const incrementTwo = () => {
        setCounterTwo(counterTwo + 1);
    }
    
    const fun = useCallback(()=> {
        console.warn("Called")
        return counterTwo;
    },counterTwo);

    return (
        <Container>
            <Button
                onPress={incrementOne}
                title="Counter One"
                color="#841584"
            />
            <Text>{counterOne}</Text>
            <Button
                onPress={incrementTwo}
                title="Counter Two for Child Component"
                color="brown"
            />
            <Text>{counterTwo}</Text>
            <Child fun={fun} counterTwo={counterTwo} />
        </Container>
    )
}