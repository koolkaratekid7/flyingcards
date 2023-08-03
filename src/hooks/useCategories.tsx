import { useSelector } from 'react-redux';
import { RootState } from '../app/store';

export const useCategories = () => {
  const products = useSelector((state: RootState) => state.product.products);
  const categories = products.map(product => product.category);
  return [...new Set(categories)];
};