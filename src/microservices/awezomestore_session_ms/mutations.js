'use strict';

const { HttpProvider } = require('../../providers');

const baseUrl = process.env.MS_SESSION_BASE_URL;

module.exports = {
  // access
  // createAccess: async (root, {data}) => {
  //   return await HttpProvider.post(`${baseUrl}/access/create`, data);
  // },
  // updateAccess: async (root, {data}) => {
  //   return await HttpProvider.put(`${baseUrl}/access/${id}/update`, data);
  // },
  // deleteAccess: async (root, {data}) => {
  //   return await HttpProvider.deleted(`${baseUrl}/access/${id}/delete`, data);
  // },

  // // country
  // createCountry: async (root, {data}) => {
  //   return await HttpProvider.post(`${baseUrl}/country/create`, data);
  // },
  // updateCountry: async (root, {data}) => {
  //   return await HttpProvider.put(`${baseUrl}/country/${id}/update`, data);
  // },
  // deleteCountry: async (root, {data}) => {
  //   return await HttpProvider.deleted(`${baseUrl}/country/${id}/delete`, data);
  // },

  // // currency
  // createCurrency: async (root, {data}) => {
  //   return await HttpProvider.post(`${baseUrl}/currency/create`, data);
  // },
  // updateCurrency: async (root, {data}) => {
  //   return await HttpProvider.put(`${baseUrl}/currency/${id}/update`, data);
  // },
  // deleteCurrency: async (root, {data}) => {
  //   return await HttpProvider.deleted(`${baseUrl}/currency/${id}/delete`, data);
  // },

  // // info
  // createInfo: async (root, {data}) => {
  //   return await HttpProvider.post(`${baseUrl}/info/create`, data);
  // },
  // updateInfo: async (root, {data}) => {
  //   return await HttpProvider.put(`${baseUrl}/info/${id}/update`, data);
  // },
  // deleteInfo: async (root, {data}) => {
  //   return await HttpProvider.deleted(`${baseUrl}/info/${id}/delete`, data);
  // },

  // // language
  // createLanguage: async (root, {data}) => {
  //   return await HttpProvider.post(`${baseUrl}/language/create`, data);
  // },
  // updateLanguage: async (root, {data}) => {
  //   return await HttpProvider.put(`${baseUrl}/language/${id}/update`, data);
  // },
  // deleteLanguage: async (root, {data}) => {
  //   return await HttpProvider.deleted(`${baseUrl}/language/${id}/delete`, data);
  // },

  // session
  signUp: async (root, {data}) => {
    return await HttpProvider.post(`${baseUrl}/session/signup`, data);
  },
  signIn: async (root, {data}) => {
    return await HttpProvider.post(`${baseUrl}/session/signin`, data);
  },

  // // token
  // createToken: async (root, {data}) => {
  //   return await HttpProvider.post(`${baseUrl}/token/create`, data);
  // },
  // updateToken: async (root, {data}) => {
  //   return await HttpProvider.put(`${baseUrl}/token/${id}/update`, data);
  // },
  // deleteToken: async (root, {data}) => {
  //   return await HttpProvider.deleted(`${baseUrl}/token/${id}/delete`, data);
  // },

  // // user
  // createUser: async (root, {data}) => {
  //   return await HttpProvider.post(`${baseUrl}/user/create`, data);
  // },
  // updateUser: async (root, {data}) => {
  //   return await HttpProvider.put(`${baseUrl}/user/${id}/update`, data);
  // },
  // deleteUser: async (root, {data}) => {
  //   return await HttpProvider.deleted(`${baseUrl}/user/${id}/delete`, data);
  // },
};
