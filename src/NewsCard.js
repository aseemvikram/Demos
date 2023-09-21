
import { View, Text, Image } from "react-native"
import { styled } from "styled-components";

const Container = styled(View)`
    padding:5px;
    border-radius:10px;
    width:350px;
    margin-bottom:20px;
    border: 1px solid black;
`
const InnerContainer = styled(View)`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
`
const Images = styled(Image)`
    width: 340px;
    height:200px;
    border-radius:10px;
`
const NameText = styled(Text)`
    font-size:20px;
    text-align:left;
    padding-left:5px;
    font-weight:bold;
`

const NewsCard = ({title,urlToImage}) => {
    return (
        <Container>
    
            <Images

                source={{
                    uri: urlToImage,
                }}
            />
            <InnerContainer> 
                <NameText>{title}</NameText>
            </InnerContainer>

           
        </Container>
        )
}
export { NewsCard };
