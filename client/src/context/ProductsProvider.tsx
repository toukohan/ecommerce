import { createContext, ReactNode, useState } from 'react';

export interface Product{
    id: number;
    name: string;
    price: number;
    image_url: string;
    category: string;
}

export type ProductsData = Product[];

export interface ProductsContextProps {
    products: ProductsData | null;
    setProducts: (products: (ProductsData|null)) => void;
}

export interface ProductsProviderProps {
    children: ReactNode;
}

export const ProductsContext = createContext<ProductsContextProps | null>(null);

const ProductsProvider = ({ children }: ProductsProviderProps) => {

    const [products, setProducts] = useState<ProductsData | null>(null);

    return (
        <ProductsContext.Provider value={{products, setProducts}}>
            {children}
        </ProductsContext.Provider>
    );
};

export default ProductsProvider;