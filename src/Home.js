import { View, Button } from "react-native";
import { styled } from "styled-components";

const Container = styled(View)`
    padding:5px;
    border-radius:10px;
    width:350px;
    margin-bottom:20px;
    border: 1px solid black;
    align-items:center;
    `
const Home = ({navigation}) => {

    return (
        <Container>
            <Button
                onPress={()=>navigation.navigate('News')}
                title="News Api Demo"
                color="brown"
            />
            <Button
                onPress={()=>navigation.navigate('UseCallback')}
                title="Use CallBack Demo"
                color="brown"
            />
            <Button
                onPress={()=>navigation.navigate('UseMemo')}
                title="Use Memo Demo"
                color="brown"
            />

        </Container>
    )
}
export default (Home);