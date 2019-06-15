/**
Handles user token manupilations 
 **/
import qs from "query-string";

const name = "JWT";

const saveToken = token => (
    localStorage.setItem(name, token)
);

const getToken = () => (
    localStorage.getItem(name)
);

const removeToken = () => (
    localStorage.removeItem(name)
);

const getObjToken = () => {
    const token = localStorage.getItem(name)
    return qs.parse(token);
};

export default { saveToken, getToken, getObjToken, removeToken };


