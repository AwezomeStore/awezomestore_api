'use strict';

const { HttpProvider } = require('../../providers');

const baseUrl = process.env.MS_PAYMENT_BASE_URL;

module.exports = {
  // Category
  allPayments: async () => {
    return await HttpProvider.get(`${baseUrl}/all`);
  },
};
