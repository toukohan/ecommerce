import { combineReducers } from 'redux';

import productsReducer from './products';
import cartReducer from './cart';
import userReducer from './user';
import ordersReducer from './orders';

const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer,
    user: userReducer,
    orders: ordersReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;