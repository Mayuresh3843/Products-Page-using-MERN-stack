import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-white">
      {products.map((product) => (
        <Link
          key={product._id}
          to={`/products/${product._id}`}
          className="border p-4 rounded  bg-white border-white block shadow-xl hover:scale-105 "
        >
          <div className="aspect-[4/5] w-full overflow-hidden rounded  ">
            <img
              src={product.colors?.[0]?.images?.[0]?.original}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>

          <h2 className="text-lg font-bold mt-2 text-black">{product.name}</h2>
          <p className="text-black">{product.description}</p>
          <p className="font-bold mt-5 text-black">₹{product.price}</p>
          <button
            className=" text-white px-4 py-2 mt-2 rounded"
            
          >
            Add to cart
          </button>
        </Link>
      ))}
    </div>
  );
}

export default Products;
