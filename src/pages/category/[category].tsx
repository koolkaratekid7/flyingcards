import { useRouter } from 'next/router';
import { IProduct } from '../../../typings';
import Banner from '../../components/Banner';
import Header from '../../components/Header';
import ProductFeed from '../../components/ProductFeed';
import React from 'react';
import { useProductContext } from '../../components/context/ProductContext';

const CategoryPage = () => {
  const router = useRouter();
  const { category } = router.query;
  const { products, loading, error } = useProductContext();

  // Filter the list of products based on the category
  const filteredProducts = products.filter(
    product => product.category === category
  );

  return (
    <div className="bg-gray-100">
      <Header />
      <main className="max-w-screen-2xl mx-auto">
        <Banner />
        <h1 className="text-3xl font-bold mt-4 mb-6">{category}</h1>
        {/* Pass the filtered list of products to the ProductFeed component */}
        <ProductFeed products={filteredProducts} />
      </main>
    </div>
  );
};

export default CategoryPage;