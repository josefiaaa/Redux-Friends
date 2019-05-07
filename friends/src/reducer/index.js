import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    FETCH,
    SUCCESS,
    FAILURE
  } from '../actions';

const initialState = {
    friends: [],
    error: '',
    isFetching: false,
    loggedIn: false,
    // saveFriends: false,
    // deleteFriend: false
}


 const reducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_START:
            return {
                ...state,
                error: '',
                fetchingData: false,
                loggedIn: true
             };
        case LOGIN_SUCCESS:
            return {
                ...state,
                error: '',
                loggedIn: false
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                error: 'User Name or Password is Incorrect! Try Again!'
            }
        case FETCH:
            return {
                ...state,
                error: '',
                isFetching: true
            }
        case SUCCESS: 
            return {
                ...state,
                error: '',
                isFetching: false,
                friends: action.payload
            }
        case FAILURE: 
            return {
                ...state,
                error: action.payload.data.error,
                isFetching: false
            }
        default:
            return state;
    }   
}

export default reducer;