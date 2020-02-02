import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import Preloader from '../Preloader';
import Error from '../Error';
import Product from './Product';
import { Wrapper } from './styled';
// eslint-disable-next-line no-unused-vars
import { GET_PRODUCTS, ProductsData, Product as ProductType } from '../../graphql';

const Products = () => {
    const { loading, error, data } = useQuery<ProductsData>(GET_PRODUCTS);

    if (loading) return <Preloader />;
    if (error) return <Error />;
  
    return (
        <Wrapper>
            {data && data.allProducts.map((params: ProductType) => (
                <Product key={params.id} {...params}/>
            ))}
        </Wrapper>
    );
};

export default Products;