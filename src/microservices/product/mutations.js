'use strict';

const { HttpProvider } = require('../../providers');

const baseUrl = process.env.MS_PRODUCT_BASE_URL;

module.exports = {
  // User
  createUser: async (root, {data}) => {
    return await HttpProvider.post(`${baseUrl}/user`, data);
  },
  updateUser: async (root, {data}) => {
    return await HttpProvider.put(`${baseUrl}/user`, data);
  },
  deleteUser: async (root, {data}) => {
    return await HttpProvider.deleted(`${baseUrl}/user`, data);
  },

  // Product
  createProduct: async (root, {data}) => {
    return await HttpProvider.post(`${baseUrl}/product`, data);
  },
  updateProduct: async (root, {data}) => {
    return await HttpProvider.put(`${baseUrl}/product`, data);
  },
  deleteProduct: async (root, {data}) => {
    return await HttpProvider.deleted(`${baseUrl}/product`, data);
  },

  // ShoppingCart
  createShoppingCart: async (root, {data}) => {
    return await HttpProvider.post(`${baseUrl}/shopping-cart`, data);
  },
  updateShoppingCart: async (root, {data}) => {
    return await HttpProvider.put(`${baseUrl}/shopping-cart`, data);
  },
  deleteShoppingCart: async (root, {data}) => {
    return await HttpProvider.deleted(`${baseUrl}/shopping-cart`, data);
  },

  // Category
  createCategory: async (root, {data}) => {
    return await HttpProvider.post(`${baseUrl}/category`, data);
  },
  updateCategory: async (root, {data}) => {
    return await HttpProvider.put(`${baseUrl}/category`, data);
  },
  deleteCategory: async (root, {data}) => {
    return await HttpProvider.deleted(`${baseUrl}/category`, data);
  },

  // Subcategory
  createSubcategory: async (root, {data}) => {
    return await HttpProvider.post(`${baseUrl}/subcategory`, data);
  },
  updateSubcategory: async (root, {data}) => {
    return await HttpProvider.put(`${baseUrl}/subcategory`, data);
  },
  deleteSubcategory: async (root, {data}) => {
    return await HttpProvider.deleted(`${baseUrl}/subcategory`, data);
  },

  // Comment
  createComment: async (root, {data}) => {
    return await HttpProvider.post(`${baseUrl}/comment`, data);
  },
  updateComment: async (root, {data}) => {
    return await HttpProvider.put(`${baseUrl}/comment`, data);
  },
  deleteComment: async (root, {data}) => {
    return await HttpProvider.deleted(`${baseUrl}/comment`, data);
  },

  // Price
  createPrice: async (root, {data}) => {
    return await HttpProvider.post(`${baseUrl}/price`, data);
  },
  updatePrice: async (root, {data}) => {
    return await HttpProvider.put(`${baseUrl}/price`, data);
  },
  deletePrice: async (root, {data}) => {
    return await HttpProvider.deleted(`${baseUrl}/price`, data);
  },

  // Score
  createScore: async (root, {data}) => {
    return await HttpProvider.post(`${baseUrl}/score`, data);
  },
  updateScore: async (root, {data}) => {
    return await HttpProvider.put(`${baseUrl}/score`, data);
  },
  deleteScore: async (root, {data}) => {
    return await HttpProvider.deleted(`${baseUrl}/score`, data);
  },
};
