/**
Handles user token manupilations 
 **/
import qs from 'query-string';

const saveToken = token => localStorage.setItem('JWT', token);

const getToken = () => (
    qs.parse(localStorage.getItem('JWT'))
);

const removeToken = () => localStorage.removeItem('JWT');


export default { saveToken, getToken, removeToken };