import styled, { css } from 'styled-components';

interface isEnabledProp {
    readonly enabled: boolean;
}

interface StateProps extends isEnabledProp {
    readonly selected: boolean;
    readonly hover: boolean;
}

export const Wrapper = styled.section`
    margin: 25px auto 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

export const Main = styled.section<isEnabledProp>`
    ${props => props.enabled ? css`
        cursor: pointer;
        color: #666;
    ` : css`
        color: #b3b3b3;
    `}
`;

export const ProductWrapper = styled.article`
    flex-basis: 320px;
    font-family: 'Trebuchet MS', sans-serif;
    margin-bottom: 50px;

    @media (min-width: 992px) {
        margin-bottom: 0;
    }
`;

export const Header = styled.header`
    display: flex;
    height: 45px;
    margin-bottom: -1px;
`;

export const HeaderCorner = styled.div<StateProps>`
    width: 45px;
    height: 45px;
    background: linear-gradient(-45deg, #f2f2f2, #f2f2f2 29px, ${props => props.enabled ? '#1698d9' : '#b3b3b3'} 0, ${props => props.enabled ? '#1698d9' : '#b3b3b3'} 33px, transparent 0); 
    ${props => props.hover && 'background: linear-gradient(-45deg, #f2f2f2, #f2f2f2 29px, #2ea8e6 0, #2ea8e6 33px, transparent 0);'}
    ${props => props.selected && 'background: linear-gradient(-45deg, #f2f2f2, #f2f2f2 29px, #d91667 0, #d91667 33px, transparent 0);'}
    ${props => props.hover && props.selected && 'background: linear-gradient(-45deg, #f2f2f2, #f2f2f2 29px, #e62e7a 0, #e62e7a 33px, transparent 0);'}
`;

export const HeaderTitle = styled.div<StateProps>`
    flex: 1;
    background-color: #f2f2f2;
    border-top: 5px solid;
    border-top-right-radius: 5px;
    border-right: 5px solid;
    padding: 15px 0 0 5px;
    font-size: 16px;
    margin-left: -1px;
    border-color: ${props => props.enabled ? '#1698d9;' : '#b3b3b3;'}
    ${props => props.hover && 'border-color: #2ea8e6;'}
    ${props => props.selected && 'border-color: #d91667;'}
    ${props => props.hover && props.selected && css`
        color: #e62e7a;
        border-color: #e62e7a;
    `}
`;

export const Body = styled.div<StateProps>`
    height: 436px;
    background-color: #f2f2f2;
    border-style: solid;
    border-color: ${props => props.enabled ? '#1698d9' : '#b3b3b3'};
    border-width: 0 5px 5px 5px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    padding-top: 10px;
    padding-left: 45px;
    overflow: hidden;
    position: relative;
    ${props => props.hover && 'border-color: #2ea8e6;'}
    ${props => props.selected && 'border-color: #d91667;'}
    ${props => props.hover && props.selected && 'border-color: #e62e7a;'}
`;

export const Title = styled.h2<isEnabledProp>`
    font-size: 48px;
    color: ${props => props.enabled ? '#000' : '#b3b3b3'};
`;

export const Filling = styled.h3<isEnabledProp>`
    font-size: 24px;
    color: ${props => props.enabled ? '#000' : '#b3b3b3'};
`;

export const FeaturesList = styled.ul`
    margin: 15px 0 35px;
    font-size: 14px;
`;

export const Image = styled.img<isEnabledProp>`
    position: absolute;
    left: -15px;
    bottom: -45px;
    z-index: 100;
    ${props => (!props.enabled) && 'opacity: 0.5;'}
`;

export const Weight = styled.div<StateProps>`
    position: absolute;
    z-index: 200;
    bottom: 10px;
    right: 10px;
    width: 81px;
    height: 81px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 50%;
    color: #fff;
    font-size: 42px;
    line-height: 22px;
    padding-top: 10px;
    background-color: ${props => props.enabled ? '#1698d9' : '#b3b3b3'};
    ${props => props.hover && 'background-color: #2ea8e6;'}
    ${props => props.selected && 'background-color: #d91667;'}
    ${props => props.hover && props.selected && 'background-color: #e62e7a;'}
`;

export const WeightUnit = styled.span`
    margin-top: 5px;
    font-size: 21px;
`;

export const Footer = styled.footer<isEnabledProp>`
    margin-top: 15px;
    font-size: 13px;
    height: 15px;
    text-align: center;
    text-shadow: 0 1px 0 #000;
    color: ${props => props.enabled ? '#fff' : '#ff6'};
`;

export const Buy = styled.button`
    cursor: pointer;
    color: #1698d9;
    border: none;
    border-bottom: 1px dashed #1698d9;
    background: none;

    &:focus, &:hover, &:active {
        color: #2ea8e6;
    }
`;