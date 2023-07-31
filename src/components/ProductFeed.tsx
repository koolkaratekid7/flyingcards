import { IProduct } from "../../typings";
import Product from "./Product";

type Props = {
  products: IProduct[];
};

const ProductFeed = ({ products }: Props) => {
  return (
    <div className="flex flex-wrap justify-center -mt-10 md:-mt-52 lg:-mt-75 xl:-mt-80 mx-auto">
      {products.slice(0, 4).map((product) => (
        <Product key={product.id.toString()} product={product} />
      ))}

      {products.slice(4, 5).map((product) => (
        <Product key={product.id} product={product} />
      ))}

      {products.slice(5, products.length).map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductFeed;