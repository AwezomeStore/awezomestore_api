'use strict';

const { HttpProvider } = require('../../providers');

const baseUrl = process.env.MS_SESSION_BASE_URL;

module.exports = {
  // Access
  getAccess: async () => {
    return await HttpProvider.get(`${baseUrl}/access/${id}/get`);
  },
  // getAllAccess: async () => {
  //   return await HttpProvider.get(`${baseUrl}/access/getAll`);
  // },

  // // Country
  // getAllCountries: async () => {
  //   return await HttpProvider.get(`${baseUrl}/country/getAll`);
  // },

  // // Currency
  // getAllCurrencies: async () => {
  //   return await HttpProvider.get(`${baseUrl}/currency/getAll`);
  // },

  // // Info
  // getAllInfos: async () => {
  //   return await HttpProvider.get(`${baseUrl}/info/getAll`);
  // },

  // // Language
  // getAllLanguages: async () => {
  //   return await HttpProvider.get(`${baseUrl}/language/getAll`);
  // },

  // // Token
  // getAllTokens: async () => {
  //   return await HttpProvider.get(`${baseUrl}/token/getAll`);
  // },

  // User
  // getUser: async () => {
  //   return await HttpProvider.get(`${baseUrl}/user/${id}/get`);
  // },
  // getAllUsers: async () => {
  //   return await HttpProvider.get(`${baseUrl}/user/getAll`);
  // },
};
