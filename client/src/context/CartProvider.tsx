import { createContext, ReactNode, useState } from 'react';
import { Product } from './ProductsProvider';

export interface CartItem extends Product {
    quantity: number;
}
// todo type?
export interface CartContextProps {
    cart: CartItem[];
    setCart: (cart: any) => void;
    cartOpen: boolean;
    setCartOpen: (cartOpen: boolean) => void;
}

export interface CartProviderProps {
    children: ReactNode;
}

export const CartContext = createContext<CartContextProps>({
    cart: [],
    setCart: () => {},
    cartOpen: false,
    setCartOpen: () => {},
});

const CartProvider = ({ children }: CartProviderProps) => {
    
        const [cart, setCart] = useState<CartItem[]>([]);
        const [cartOpen, setCartOpen] = useState(false);
    
        return (
            <CartContext.Provider value={{cart, setCart, cartOpen, setCartOpen}}>
                {children}
            </CartContext.Provider>
        );
    };

export default CartProvider;

