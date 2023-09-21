import { NewsCard } from "./NewsCard";
import { styled } from "styled-components";
import { View ,FlatList,ScrollView} from "react-native";
import { useEffect, useState } from "react";

export default function NewsApi() {
const[data,setData]=useState({});

    async function logMovies() {
        const response = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=5967bf0da5ee46b69e771ffeacb9e373");
        const news = await response.json();
        setData(news)
    }
    useEffect(()=>{logMovies()}
    ,[])
    const Container = styled(View)`
    align-text:center;
    justify-content:center;
    align-items:center;
    margin-vertical:20px;
`
    return (
        
        <Container>
            <FlatList
            data={data.articles}
            renderItem={({item}) => <NewsCard urlToImage={item.urlToImage} title={item.title}/>}
            
            keyExtractor={item => item.title} />
           
        </Container>
    );
} 