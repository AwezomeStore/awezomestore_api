'use strict';

const { HttpProvider } = require('../../providers');

const baseUrl = process.env.MS_SUPPORT_BASE_URL;

module.exports = {
    // Create Message 
    createMessage: async (root, {message}) => {
      await HttpProvider.post(`${baseUrl}/messages/new`, message);
      return message.textmessage
    },
};