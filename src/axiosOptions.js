/**
 * Created by Joseph Tan on 23/10/2018.
 */

let axios = require("axios");


let axiosInstance = axios.create({
    baseURL: "/data/"
});

module.exports = {
    axiosInstance: axiosInstance
};
