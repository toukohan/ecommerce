import { Product } from '../components/ProductCard';

export const ProductsActionTypes = {
    SET_PRODUCTS: 'SET_PRODUCTS',
};

interface ProductsAction {
    type: string;
    payload?: any;
}

export const setProducts = (products: Product[]) => ({
    type: ProductsActionTypes.SET_PRODUCTS,
    payload: products,
});

const initialState = {
    products: [],
};

const productsReducer = (state = initialState, action: ProductsAction) => {
    switch (action.type) {
        case ProductsActionTypes.SET_PRODUCTS:
            return {
                products: action.payload,
            };
        default:
            return state;
    }
}

export default productsReducer;