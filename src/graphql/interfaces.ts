export interface Product {
    id: number,
    title: string,
    filling: string,
    description: string,
    features: Array<string>,
    weight: number,
    enabled: boolean,
}

export interface ProductsData {
    allProducts: Product[];
}