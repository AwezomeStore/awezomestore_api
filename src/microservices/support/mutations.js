'use strict';

const { HttpProvider } = require('../../providers');

const baseUrl = process.env.MS_SUPPORT_BASE_URL;

module.exports = {
    // Create Message 
    createMessage: async (root, {message}) => {
      return await HttpProvider.post(`${baseUrl}/messages/new`, message); 
    }, 
    
};