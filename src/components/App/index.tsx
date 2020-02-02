import React, { Fragment } from 'react';

import Header from '../Header';
import Products from '../Products';
import GlobalStyles from '../../global';
import { PageWrapper, Page } from './styled';

const App = () => (
    <Fragment>
        <GlobalStyles />
        <PageWrapper>
            <Page>
                <Header />
                <Products />
            </Page>
        </PageWrapper>
    </Fragment>
);

export default App;