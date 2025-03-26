const savedUser = JSON.parse(sessionStorage.getItem('user'));

const initialState = {
    user: savedUser || null
};

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case "login":
            return { ...state, user: action.payload };
        case "logout":
            return { ...state, user: null };
        default:
            return state;
    }
}