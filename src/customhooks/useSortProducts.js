import { useState, useEffect } from 'react';

const useSortProducts = (products, initialSortCriteria = 'menu_order') => {
  const [sortCriteria, setSortCriteria] = useState(initialSortCriteria);
  const [sortedProducts, setSortedProducts] = useState([...products]);

  useEffect(() => {
    let sorted = [...products];
    switch (sortCriteria) {
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
        sorted = [...products];
    }
    setSortedProducts(sorted);
  }, [sortCriteria, products]);

  return { sortedProducts, sortCriteria, setSortCriteria };
};

export default useSortProducts;
