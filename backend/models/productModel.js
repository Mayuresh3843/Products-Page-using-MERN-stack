import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema({
  original: String,
  thumbnail: String,
});

const ColorSchema = new mongoose.Schema({
  name: String,
  images: [ImageSchema],
});

const StorageSchema = new mongoose.Schema({
  size: String,
  price: Number,
});

const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  cprice: Number,
  rating: Number,
  description: String,
  exchange: Number,
  off: Number,
  colorname: String,
  plan: Number,
  colors: [ColorSchema],
  storages: [StorageSchema],
  highlights: [String],
  marketingImages: [String],
});

const Product = mongoose.model("Product", ProductSchema);
export default Product;
