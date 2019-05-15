/**
Handles user token manupilations 
 **/
import qs from 'query-string';

const name = 'JWT';

saveToken = token => (
    localStorage.setItem(name, token)
);

getToken = () => (
    localStorage.getItem(name)
);

removeToken = () => (
    localStorage.removeItem(name)
);

getObjToken = () => {
    const token = localStorage.getItem(name)
    return qs.parse(token);
}

export default { saveToken, getToken, getObjToken, removeToken };


