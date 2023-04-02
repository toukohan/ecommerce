import { User } from '../context/UserProvider';

const UserActionTypes = {
    SET_USER: 'SET_USER',
    UPDATE_USER: 'UPDATE_USER',
};

interface UserAction {
    type: string;
    payload?: any;
}

export const setUser = (user: User) => ({
    type: UserActionTypes.SET_USER,
    payload: user,
});

export const updateUser = (user: User) => ({
    type: UserActionTypes.UPDATE_USER,
    payload: user,
});

const initialState = {
    currentUser: null,
}

const userReducer = (state = initialState, action: UserAction) => {
    switch (action.type) {
        case UserActionTypes.SET_USER:
        return action.payload;
        case UserActionTypes.UPDATE_USER:
        return {
            ...state,
            ...action.payload,
        };
        default:
            return state;
            //throw new Error(`Unhandled action type: ${action.type}`);
    }
}

export default userReducer;