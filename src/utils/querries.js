/**
 * Handles local data management and user token
 */

const JWT = 'JWT';

/**
 * append a value with assigned key to USER in local storage
 * @param {String} key - value key
 * @param {Any} value - value to be stored
 */
async function storeItem(key, value) {
    await isAuthorized()
    localStorage.setItem(key, value);
}

/**
 * returns a value with assigned key from local storage
 * @param {String} key - retriving value key
 */
function retrieveItem(key) {
    return localStorage.getItem(key);
}

/**
 * remove an item from local storage and return undefine
 * @param {String} key - key of value to be deleted
 */
function removeItem(key) {
    return localStorage.removeItem(key);
}

/**
 * Removes token from local storage then navigate to auth page
 * @param {Object} history - react router history object
 */
async function deAuthorize(history) {
    await history.push('/auth');
    removeItem(JWT);
    return;
}

/**
 * returns user token or undefined
 * @param {Object} history - react router history object
 */
function isAuthorized(history) {
    try {
        const token = retrieveItem(JWT);
        // history.push("/")
        return token;
    } catch (e) {
        alert("WHOOPS! Looks like you shouldn't be here...Please Login");
        return deAuthorize(history);
    }
}
export default {
    storeItem,
    retrieveItem,
    removeItem,
    isAuthorized,
    deAuthorize,
};