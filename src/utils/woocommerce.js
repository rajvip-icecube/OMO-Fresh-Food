// utils/woocommerce.js
import axios from 'axios';

const consumerKey = 'ck_d6c2f9298627398216fa91a4ac8f74aafe90d787';
const consumerSecret = 'cs_3ba5a4d7ddaa6e5f990bfbb3f3d1ca87b63674b4';
const baseURL = 'https://www.omofreshfood.com/wp-json/wc/v3';

const wooCommerce = axios.create({
  baseURL,
  auth: {
    username: consumerKey,
    password: consumerSecret
  }
});

export const getProducts = async () => {
  try {
    const response = await wooCommerce.get('/products');
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};
export const getProductById = async (id) => {
  try {
    const response = await wooCommerce.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching product with ID ${id}:`, error);
    throw error;
  }
};
export const createOrder = async (orderData) => {
  try {
    const response = await wooCommerce.post('/orders', orderData);
    return response.data;
  } catch (error) {
    console.error('Error creating order:', error.response?.data || error.message);
    throw error;
  }
};
export const searchProducts = async (query) => {
  try {
    const response = await wooCommerce.get('/products', {
      params: {
        search: query
      }
    });
    return response.data;
  } catch (error) {
    console.error(`Error searching products with query "${query}":`, error);
    throw error;
  }
};
export const fetchOrders = async () => {
  try {
    const response = await wooCommerce.get(`/orders`);
    return response.data;
  } catch (error) {
    console.error('Error fetching orders:', error);
    return [];
  }
};
export const fetchOrderById = async (id) => {
  try {
    const response = await wooCommerce.get(`/orders/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching order ${id}:`, error);
    return null;
  }
};
