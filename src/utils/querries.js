/**
 * Handles local data management
 * ------------------------------
 * @author Jehf K D. (@jehfkemsy)
 */

import jwt from "jsonwebtoken";
const JWT = "JWT";

/**
 * Removes token from local storage then navigate to auth page
 * @param {Object} history - react router history object
 */
async function deAuthorize(history) {
  history.push("/auth");
  return await removeItem(JWT);
}

/**
 * returns user token or undefined
 * @param {Object} history - react router history object
 */
async function isAuthorized(history) {
  try {
    const token = await retrieveItem(JWT);

    await jwt.verify(token, "n");

    return token;
  } catch (e) {
    alert("WHOOPS! Looks like you shouldn't be here...Please Login");
    await deAuthorize(history);
    return;
  }
}

/**
 * append a value with assigned key to USER in local storage
 * @param {String} key - value key
 * @param {Any} value - value to be stored
 */
function storeItem(key, value) {
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

export default {
  storeItem,
  retrieveItem,
  removeItem,
  isAuthorized,
  deAuthorize
};
