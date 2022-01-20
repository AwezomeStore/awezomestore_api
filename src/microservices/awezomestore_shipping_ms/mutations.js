'use strict';

const { HttpProvider } = require('../../providers');

const baseUrl = process.env.MS_SHIPPING_BASE_URL;

module.exports = {
  // Country
  createCountry: async (root, {data}) => {
    return await HttpProvider.post(`${baseUrl}/countries/`, data);
  },
  updateCountry: async (root, {data}) => {
    return await HttpProvider.put(`${baseUrl}/countries/`, data);
  },
};
