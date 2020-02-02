import styled from 'styled-components';

export const Wrapper = styled.div`
    margin-top: 30px;
`;

export const Title = styled.div`
    font-size: 20px;
    font-family: 'Exo 2', sans-serif;
    font-weight: 100;
    color: #fff;
    text-align: center;
`;

export const ImageContainer = styled.div`
    width: 150px;
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;

    @media (min-width: 768px) {
        width: 300px;
    }
`;