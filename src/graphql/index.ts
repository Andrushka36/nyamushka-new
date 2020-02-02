import { gql } from 'apollo-boost';

export { Product, ProductsData } from './interfaces';

export const GET_PRODUCTS = gql`
    {
        allProducts {
            id
            title
            filling
            features
            description
            weight
            enabled
        }
    }
`;