import React from 'react';

import { Wrapper, Title, ImageContainer } from './styled';

import cat from './images/sad-cat.jpg';

const Error = () => (
    <Wrapper>
        <Title>Похоже, твой кот сегодня без обеда. :(</Title>
        <ImageContainer>
            <img src={cat} alt="Грустный кот"/>
        </ImageContainer>
    </Wrapper>
);

export default Error;