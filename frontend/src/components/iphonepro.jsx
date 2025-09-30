import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import axios from "axios";
import { Star } from "lucide-react";
import ScrollToTop from "./ScrollToTop";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:5000/products/${id}`)
    .then(res => {
      setProduct(res.data);
      setSelectedColor(res.data.colors?.[0]?.name || "");
    }
    )
    .catch(err => console.log(err)
  );
  }, [id]);

  if (!product || !product.colors || product.colors.length === 0) {
    return <div className="text-center mt-10">No product data found.</div>;
  }

  const currentColor = product.colors.find(c => c.name === selectedColor);
  if (!currentColor) return <div className="text-center mt-10">Color images not found.</div>;

  return (
    <div className="bg-gray-50 min-h-screen py-10">\
    <ScrollToTop />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-4">

        {/* ---------------- LEFT SIDE ---------------- */}
        <div className="flex gap-4">
          {/* Color Selectors as thumbnails */}
          <div className="flex flex-col gap-3">
            {product.colors.map(c => (
              <img
                key={c.name}
                src={c.images[0]?.original}
                alt={`${c.name} product`}
                onClick={() => setSelectedColor(c.name)}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border 
                  ${selectedColor === c.name ? "border-blue-600" : "border-gray-200"}`}
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
          <h1 className="!text-3xl font-bold text-gray-800">{product.name}</h1>

          {/* Ratings */}
          <div className="flex items-center gap-2">
            <div className="flex text-yellow-500">
              {Array.from({ length: 4 }).map((_, i) => (
                <Star key={i} size={20} fill="#fbbf24" />
              ))}
              <Star size={20} className="text-gray-300" />
            </div>
            <span className="text-gray-600 text-sm">(1,400 ratings)</span>
          </div>

          {/* Price */}
          <div className="space-y-1">
            <div className="text-red-600 font-semibold text-xl">-13% <span className="text-black"> ₹{product.price}</span></div>
            <div className="text-gray-500 line-through">₹134900</div>
            <div className="text-sm text-gray-600">Inclusive of all taxes</div>
          </div>

          {/* Delivery */}
          <p className="text-green-700 font-medium">In stock • Free delivery Mon, 15 Sept</p>

          {/* Exchange Offers */}
          <div className="border p-4 rounded-lg space-y-2">
            <p className="font-medium text-gray-800">With Exchange</p>
            <p className="text-lg text-gray-800">Up to ₹45,450.00 off</p>
            <hr />
            <p className="font-medium text-gray-800">Without Exchange</p>
            <p className="text-lg font-semibold text-gray-800">₹{product.price}</p>
          </div>

          {/* Protection Plan */}
          <div className="flex items-center gap-2">
            <input id="protect" type="checkbox" className="w-5 h-5" />
            <label htmlFor="protect" className="text-sm text-gray-700">
              Add Protection plan for ₹8,499
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
            <h2 className="text-2xl font-bold text-gray-800">About this item</h2>
            <ul className="list-disc mt-5 text-gray-700 space-y-2 pl-6">
              {product.highlights?.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Marketing Images Section */}
      <div className="mt-10 flex flex-col  max-w-7xl mx-auto px-4">
        <img src="https://m.media-amazon.com/images/G/31/img25/Wireless/Madhav/Feb/Apple/River/16pro/iPhone_16_Pro_Marketing_Page_Avail_Amazon_Desktop_1500px__en-IN_01._CB547242745_.jpg" alt="" />
              <img src="https://m.media-amazon.com/images/G/31/img25/Wireless/Madhav/Feb/Apple/River/16pro/iPhone_16_Pro_Marketing_Page_Avail_Amazon_Desktop_1500px__en-IN_02._CB547242745_.jpg" alt="" />
      <img src="https://m.media-amazon.com/images/G/31/img25/Wireless/Madhav/Feb/Apple/River/16pro/iPhone_16_Pro_Marketing_Page_Avail_Amazon_Desktop_1500px__en-IN_03._CB547242745_.jpg" alt="" />
      <img src="https://m.media-amazon.com/images/G/31/img25/Wireless/Madhav/Feb/Apple/River/16pro/iPhone_16_Pro_Marketing_Page_Avail_Amazon_Desktop_1500px__en-IN_04._CB547242745_.jpg" alt="" />
      <img src="https://m.media-amazon.com/images/G/31/img25/Wireless/Madhav/Feb/Apple/River/16pro/iPhone_16_Pro_Marketing_Page_Avail_Amazon_Desktop_1500px__en-IN_05._CB547242745_.jpg" alt="" />
      <img src="https://m.media-amazon.com/images/G/31/img25/Wireless/Madhav/Feb/Apple/River/16pro/iPhone_16_Pro_Marketing_Page_Avail_Amazon_Desktop_1500px__en-IN_06._CB547242745_.jpg" alt="" />
      <img src="https://m.media-amazon.com/images/G/31/img25/Wireless/Madhav/Feb/Apple/River/16pro/iPhone_16_Pro_Marketing_Page_Avail_Amazon_Desktop_1500px__en-IN_07._CB547242745_.jpg" alt="" />
      </div>
    </div>
  );
}
