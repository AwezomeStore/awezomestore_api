'use strict';

const { HttpProvider } = require('../../providers');

const baseUrl = process.env.MS_PAYMENT_BASE_URL;

module.exports = {
  // Payment 
  createPayment: async (root, {payment}) => {
    return await HttpProvider.post(`${baseUrl}/save`, payment);
  },
  
};