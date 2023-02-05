import { Dimensions } from "react-native";
import styled from "styled-components/native";

const { width } = Dimensions.get("window")

export const CardsContainer = styled.View`
display: flex;
flex-wrap: wrap;
width: ${width}px;
marginTop: 30px;
flexDirection: row;
justify-content: center;
`;

export const Image = styled.Image`
borderRadius: 100px;
width: 120px;
height: 120px;
marginTop: 30px;

`;

export const Title = styled.Text`
width: 90%;
color: #868181;
font-size: 15px;
marginTop: 30px;
textAlign: center;
textTransform: uppercase;

`;