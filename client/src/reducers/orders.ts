const OrdersActionTypes = {
    FETCH_ORDERS: 'FETCH_ORDERS',
    FETCH_ORDERS_SUCCESS: 'FETCH_ORDERS_SUCCESS',
    FETCH_ORDERS_ERROR: 'FETCH_ORDERS_ERROR',
};

interface Order {
    id: string;
    createdAt: string;
    items: {
        id: string;
        name: string;
        price: number;
        quantity: number;
    }[];
}

interface OrdersState {
    loading: boolean;
    orders: Order[];
    error: null | string;
}
interface OrdersAction {
    type: string;
    payload?: any;
}

const initialState = {
    loading: false,
    orders: [],
    error: null,
};

const OrdersReducer = (state = initialState, action: OrdersAction): OrdersState => {
    switch (action.type) {
        case OrdersActionTypes.FETCH_ORDERS:
            return {
                ...state,
                loading: true,
            };
        case OrdersActionTypes.FETCH_ORDERS_SUCCESS:
            return {
                ...state,
                loading: false,
                orders: action.payload,
            };
        case OrdersActionTypes.FETCH_ORDERS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
            // throw new Error(`Unhandled action type: ${action.type}`);
    }
}

export default OrdersReducer;