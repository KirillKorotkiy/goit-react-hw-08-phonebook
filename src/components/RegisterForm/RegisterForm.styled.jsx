import styled from 'styled-components';

export const Container = styled.div`
    width: 600px;
    background-color:#FFF;
    padding:20px;
    box-shadow: 0 0 10px #662e1c;
    border-radius: 20px;
`;


export const  Input = styled.input`
    width: 100%;
    height: 40px;
    outline: none;
    border: none;
    border-bottom: 1px solid #662e1c;
    margin-bottom: 20px;
    font-size: 20px;
    ::placeholder {
        padding-left: 15px;
    }
`
export const Title = styled.h3`
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 20px;

`
export const Button = styled.button`
    width: 100%;
    height: 40px;
    background-color: #c9a66b;
    border-radius: 5px;
    border: none;
    color: #ffffff;
    font-size: 22px;
    font-weight: 700;
    cursor: pointer;
    
`