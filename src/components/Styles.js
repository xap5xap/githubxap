import styled from 'styled-components/native';

export const TouchableHighlight = styled.TouchableHighlight`
  padding: 6px 12px;
  margin-bottom: 0;
  margin-top: 10;
  border-style: solid;
  border-color: transparent;
  border-width: 1px;
  border-radius: 4px;
  background-color: #9c27b0;
  opacity:${props => props.disabled ? 0.5 : 1};
`;

export const Button = styled.Button`
  background-color: #9c27b0;
`;

export const TextTouchableHighlight = styled.Text`
 font-size: 22;
        color: #FFF;
        align-self: center;        
`;

export const ActivityIndicator = styled.ActivityIndicator`
 marginTop: 20
 `;

export const TextInput = styled.TextInput.attrs({
  underlineColorAndroid: "#9c27b0"
}) `
margin-top: 10px;
padding: 4px;
width: 100%;
`;

export const TitleItemList = styled.Text`
 margin: 2px 0;
    font-size: 17;
    font-weight: normal;
`;

export const TitleItemDescription1 = styled.Text`
 margin: 2px 0;
    font-size: 14;
    font-weight: normal;
`;

export const TitleItemDescription2 = styled.Text`
    font-size: 13;
    color: #8e9093;
    margin: 0 0 2px;
`;



export const ErrorText = styled.Text`
color: red;
        padding: 10px;
        align-self:center;

`;