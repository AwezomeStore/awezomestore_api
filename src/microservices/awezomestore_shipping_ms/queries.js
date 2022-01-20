'use strict';

const { HttpProvider } = require('../../providers');

const baseUrl = process.env.MS_SHIPPING_BASE_URL;

module.exports = {
  // Country
  //getCountry: async () => {
    //return await HttpProvider.get(`${baseUrl}/countries`);
  //},

  //getCountries: async () => {
    //return await HttpProvider.get(`${baseUrl}/countries`);
  //},

  getCash_Orders: async () => {
    return await HttpProvider.get(`${baseUrl}/cash_orders`);
  },

};
