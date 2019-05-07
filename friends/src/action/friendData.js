import axios from 'axios';

import axiosWithAuth from '../utils/axiosAuth';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START });
    return axios
      .post('http://localhost:5000/api/login', creds)
      .then(res => {
        localStorage.setItem('token', res.data.payload);
        dispatch({ 
            type: LOGIN_SUCCESS, 
            payload: res.data.payload 
        });
      })
      .catch(err => 
        console.log(err)
        );
  };


export const FETCH = 'FETCH';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';


export const getFriends = () => {
    return dispatch => {
        dispatch({ type: FETCH});
        axiosWithAuth().get('http://localhost:5000/api/friends')
                .then(res => {
                    dispatch({
                        type: SUCCESS,
                        payload: res.data.results
                    });
                })
                .catch(err => {
                    dispatch({
                        type: FAILURE,
                        payload: err
                    })
                })
    }
}
