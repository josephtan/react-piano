/**
 * Created by Joseph Tan on 23/10/2018.
 */

let axios = require("axios");

let basePath =".";
let axiosInstance = axios.create({
    baseURL: basePath + "/data/"
});

module.exports = {
    axiosInstance: axiosInstance
};
