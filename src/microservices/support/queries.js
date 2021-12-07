'use strict';

const { HttpProvider } = require('../../providers');

const baseUrl = process.env.MS_SUPPORT_BASE_URL;

module.exports = {
    // Get All Messages
    getMessages: async () => {
      return await HttpProvider.get(`${baseUrl}/messages/`);
    }, 
    getMessagetofrom: async (root,{to,from}) => {
        return await HttpProvider.get(`${baseUrl}/messages/?touser=${to}&fromuser=${from}`);
      }, 
  };
  