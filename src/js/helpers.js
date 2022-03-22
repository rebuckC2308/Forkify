import { TIMEOUT_SEC } from "./config";

/**
 * This timeout function will make the request fail
 * @param {number} s number of seconds
 * @returns a promise that will reject after s number of seconds
 */
const timeout = function (s) {
    return new Promise(function (_, reject) {
      setTimeout(function () {
        reject(new Error(`Request took too long! Timeout after ${s} second`));
      }, s * 1000);
    });
  };

  /**
   * This function will do the fetching nad converting to JSON all in one step. This is to abstract this functionality into one function that we can use all over the project
   * @param {string} url the url of the desired API
   * @returns the data that is fetched
   */
export const getJSON = async function (url) {
    try{
        const res = await Promise.race([fetch(url), timeout(TIMEOUT_SEC)]);
        //Convert the response to JSON
        const data = await res.json();
      
        //throw and error if the response fails
        if (!res.ok) throw new Error(`${data.message} (${res.status})`);
        return data;
    }catch(err){
        throw err
    }
}