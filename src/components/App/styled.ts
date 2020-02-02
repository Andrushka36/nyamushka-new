import styled from 'styled-components';

import bg from './images/background.jpg';

export const PageWrapper = styled.div`
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0, transparent 50%, rgba(0, 0, 0, 0.5) 100%) no-repeat, url(${bg}) center;
    min-height: 100vh;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Page = styled.div`
    width: 100%;
    padding: 0 10px;

    @media (min-width: 768px) {
        max-width: 850px;
    }

    @media (min-width: 992px) {
        max-width: 1200px;
    }
`;