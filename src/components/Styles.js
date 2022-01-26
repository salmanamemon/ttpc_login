import styled from 'styled-components';

//background
import background from './../assets/bg.jpg';

export const colors = {
    primary: "#fff",
    theme: "#BE1850",
    light1: "#F3f4f6",
    light2: "#ESE7EB",
    dark1: "#1F2937",
    dark2: "#4B5563",
    dark3: "#9CA3AF",
    red: "#DC2626"
}

//Styled Components
export const StyledContainer = styled.div`
    margin:0;
    min-height: 100vh;
    display:flex;
    justify-content: center;
    align-items:center;
    background: linear-gradient(0deg, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${background});
    background-size:cover;
    background-attachment: fixed;
`;

// Home
export const StyledTitle = styled.h2`
    font-size: ${(props) => props.size}px;
    text-align: center;
    color: ${(props)=> props.color ? props.color : colors.primary};
    padding: 5px;
    margin-bottom: 20px;
`;
export const StyledSubTitle = styled.p`
    font-size: ${(props) => props.size}px;
    text-align: center;
    color: ${(props)=> props.color ? props.color : colors.primary};
    padding: 5px;
    margin-bottom: 25px;
`;

