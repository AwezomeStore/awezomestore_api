'use strict';

const { HttpProvider } = require('../../providers');

const baseUrl = process.env.MS_ADMINISTRATION_BASE_URL;

module.exports = {
  // Category
  getAddress: async (root,{id}) => {
    return await HttpProvider.get(`${baseUrl}/Addresses/${id}`);
  },
};
