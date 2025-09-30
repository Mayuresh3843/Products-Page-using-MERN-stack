import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import axios from "axios";
import { Star } from "lucide-react";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedStorage, setSelectedStorage] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:5000/products/${id}`)
      .then((res) => {
        setProduct(res.data);

        // default color
        setSelectedColor(res.data.colors?.[0]?.name || "");

        // default storage (only if exists)
        if (res.data.storages && res.data.storages.length > 0) {
          setSelectedStorage(res.data.storages[0].size);
        }
      })
      .catch((err) => console.log(err));
  }, [id]);

  if (!product || !product.colors || product.colors.length === 0) {
    return (
      <div className="text-center text-black font-semibold mt-10">
        No product data found.
      </div>
    );
  }

  const currentColor = product.colors.find((c) => c.name === selectedColor);
  if (!currentColor)
    return <div className="text-center mt-10">Color images not found.</div>;

  // ✅ price logic
  const currentPrice =
    product.storages && selectedStorage
      ? product.storages.find((s) => s.size === selectedStorage)?.price
      : product.price;

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-4">
        {/* ---------------- LEFT SIDE ---------------- */}
        <div className="flex gap-4">
          {/* Color Selectors */}
          <div className="flex flex-col gap-3">
            {product.colors.map((c) => (
              <img
                key={c.name}
                src={c.images[0]?.original}
                alt={`${c.name} product`}
                onClick={() => setSelectedColor(c.name)}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border 
                  ${
                    selectedColor === c.name
                      ? "border-blue-600"
                      : "border-gray-200"
                  }`}
              />
            ))}
          </div>

          {/* Image Gallery */}
          <div className="flex-1">
            {currentColor.images && (
              <ReactImageGallery
                items={currentColor.images}
                showPlayButton={false}
                showFullscreenButton={false}
                additionalClass="rounded-lg shadow"
              />
            )}
          </div>
        </div>

        {/* ---------------- RIGHT SIDE ---------------- */}
        <div className="space-y-5">
          {/* Dynamic Title */}
          <h1 className="!text-3xl font-bold text-gray-800">
            {product.name}{" "}
            {selectedStorage && `(${selectedStorage})`} ({selectedColor})
          </h1>

          {/* Ratings */}
          <div className="flex items-center gap-2">
            <div className="flex text-yellow-500">
              {Array.from({ length: 4 }).map((_, i) => (
                <Star key={i} size={20} fill="#fbbf24" />
              ))}
              <Star size={20} className="text-gray-300" />
            </div>
            <span className="text-gray-600 text-sm">
              ({product.rating} ratings)
            </span>
          </div>

          {/* Price */}
          <div className="space-y-1">
            <div className="text-red-600 font-semibold text-xl">
              -{product.off}% <span className="text-black">₹{currentPrice}</span>
            </div>
            {/*<div className="text-gray-500 line-through">₹{product.cprice}</div>*/}
            <div className="text-sm text-gray-600 mt-4">Inclusive of all taxes</div>
          </div>

          {/* Delivery */}
          <p className="text-green-700 font-medium">
            In stock • Free delivery fri, 3 Oct
          </p>
          <p className="text-black font-medium ">
            or fastest delivery <span className="font-bold"> Tomorrow Wed, 1 Oct.</span>
            <br /> Order within <span className="text-green-700"> 14 hours 12min</span>
          </p>

          {/* ✅ Storage Options (only if available) */}
          {product.storages && product.storages.length > 0 && (
            <div className="flex gap-4">
              {product.storages.map((storage) => (
                <button
                  key={storage.size}
                  onClick={() => setSelectedStorage(storage.size)}
                  className={`flex-1 py-3 rounded-full font-semibold ${
                    selectedStorage === storage.size
                      ? "bg-black text-white"
                      : "!bg-white !text-black border"
                  }`}
                >
                  {storage.size}
                </button>
              ))}
            </div>
          )}

          {/* Exchange Offers */}
          <div className="border p-4 rounded-lg space-y-2">
            <p className="font-medium text-gray-800">With Exchange</p>
            <p className="text-lg text-gray-800">Up to ₹{product.exchange} off</p>
            <hr />
            <p className="font-medium text-gray-800">Without Exchange</p>
            <p className="text-lg font-semibold text-gray-800">
              ₹{currentPrice}
            </p>
          </div>

          {/* Protection Plan */}
          <div className="flex items-center gap-2">
            <input id="protect" type="checkbox" className="w-5 h-5" />
            <label htmlFor="protect" className="text-sm text-gray-700">
              Add Protection plan for ₹{product.plan}
            </label>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="flex-1 py-3 !bg-yellow-300 hover:!bg-yellow-400 text-black font-semibold rounded-full">
              Add to Cart
            </button>
            <button className="flex-1 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full">
              Buy Now
            </button>
          </div>

          {/* Services */}
          <div className="flex gap-6 text-sm text-gray-700 pt-4">
            <div>10 days Replacement</div>
            <div>Free Delivery</div>
            <div>Warranty Policy</div>
          </div>

          {/* About this item */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-gray-800">
              About this item
            </h2>
            <ul className="list-disc mt-5 text-gray-700 space-y-2 pl-6">
              {product.highlights?.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Marketing Images Section */}
      <div className="mt-10 flex flex-col max-w-7xl mx-auto px-4">
        {product.marketingImages &&
          product.marketingImages.map((img, idx) => (
            <img key={idx} src={img} alt="marketing image" />
          ))}
      </div>
    </div>
  );
}
