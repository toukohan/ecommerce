import { CartItem } from "../context/CartProvider";

export const CartActionTypes = {
    TOGGLE_CART_HIDDEN: 'TOGGLE_CART_HIDDEN',
    ADD_TO_CART: 'ADD_TO_CART',
    REMOVE_ITEM: 'REMOVE_ITEM',
    CLEAR_CART: 'CLEAR_CART',
    INCREASE: 'INCREASE',
    DECREASE: 'DECREASE',
}

interface CartState {
    hidden: boolean;
    cartItems: CartItem[];
}

interface CartAction {
    type: string;
    payload?: any;
}

const initialState: CartState = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = initialState, action: CartAction) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
        return {
            ...state,
            hidden: !state.hidden
        };
        case CartActionTypes.ADD_TO_CART:
        return {
            ...state,
            cartItems: [...state.cartItems, action.payload]
        };
        case CartActionTypes.REMOVE_ITEM:
        return {
            ...state,
            cartItems: state.cartItems.filter((cartItem: CartItem) => cartItem.id !== action.payload)
        };
        case CartActionTypes.INCREASE:
        return {
            ...state,
            cartItems: state.cartItems.map((cartItem: CartItem) => {
                if (cartItem.id === action.payload.id) {
                    return {
                        ...action.payload
                    }
                }
                return cartItem;
            })
        };
        case CartActionTypes.DECREASE:
        return {
            ...state,
            cartItems: state.cartItems.map((cartItem: CartItem) => {
                if (cartItem.id === action.payload.id) {
                    return {
                        ...cartItem,
                        quantity: cartItem.quantity - 1
                    }
                }
                return cartItem;
            })
        };
        case CartActionTypes.CLEAR_CART:
        return {
            ...state,
            cartItems: []
        };
        default:
            return state;
           // throw new Error(`Unhandled action type: ${action.type}`);
    }
}

export default cartReducer;

