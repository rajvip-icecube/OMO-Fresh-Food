import { useState, useEffect } from 'react';

const useSortProducts = (products) => {
  const [sortedProducts, setSortedProducts] = useState(products);
  const [sortOrder, setSortOrder] = useState('menu_order');

  useEffect(() => {
    sortProducts(sortOrder);
  }, [products, sortOrder]);

  const sortProducts = (order) => {
    let sorted = [...products];
    switch (order) {
      case 'popularity':
        sorted.sort((a, b) => b.popularity - a.popularity);
        break;
      case 'rating':
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      case 'date':
        sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      case 'price':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        sorted.sort((a, b) => b.price - a.price);
        break;
      default:
        sorted = products;
    }
    setSortedProducts(sorted);
    setSortOrder(order);
  };

  return {
    sortedProducts,
    sortOrder,
    sortProducts,
  };
};

export default useSortProducts;
