import { useMemo, useState } from "react";
import { Button,View,Text } from "react-native";
import { styled } from "styled-components";

const Container = styled(View)`
    padding:5px;
    border-radius:10px;
    width:350px;
    margin-bottom:20px;
    border: 1px solid black;
    `
export default function UseMemoDemo() {
    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    const incrementOne=()=>{
        setCounterOne(counterOne+1);

    }

    const incrementTwo=()=>{
        setCounterTwo(counterTwo+1);
    }

    const ExpensiveIsEven=useMemo(()=>{
        let i=0;
        while(i<=100000000)i++;
        return counterOne%2===0;
    },[counterOne])

    return (
        <Container>
            <Button
                onPress={incrementOne}
                title="Counter One"
                color="#841584"
            />
            <Text>{counterOne}  {ExpensiveIsEven?(<Text>EVEN</Text>):(<Text>ODD</Text>)}</Text>
            <Button
                onPress={incrementTwo}
                title="Counter Two"
                color="brown"
            />
            <Text>{counterTwo}</Text>

        </Container>
    )
}