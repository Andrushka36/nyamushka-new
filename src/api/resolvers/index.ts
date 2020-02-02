const products = require('../mocks/products.ts');

module.exports = {
    Query: {
        allProducts: () => new Promise(resolve => setTimeout(
            () => resolve(Object.values(products)), 500)),
    },
};