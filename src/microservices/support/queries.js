'use strict';

const { HttpProvider } = require('../../providers');

const baseUrl = process.env.MS_SUPPORT_BASE_URL;

module.exports = {
    // Get All Messages
    getMessages: async () => {
      return await HttpProvider.get(`${baseUrl}/messages/`);
    },
  };
  