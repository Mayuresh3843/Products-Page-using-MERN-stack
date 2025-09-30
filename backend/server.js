const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Connect MongoDB
mongoose.connect("mongodb+srv://salvankar38:Mayuresh123@cluster0.uweswjo.mongodb.net/productsDB?retryWrites=true&w=majority&appName=Cluster0", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Schema
const ImageSchema = new mongoose.Schema({
  original: String,
  thumbnail: String,
});

const ColorSchema = new mongoose.Schema({
  name: String,
  images: [ImageSchema],
});

// NEW: Storage schema
const StorageSchema = new mongoose.Schema({
  size: String,  // e.g. "128 GB", "256 GB"
  price: Number, // price for that storage
});

const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,       // base/default price (can match first storage option)
  cprice: Number,      // cut price
  rating: Number,
  description: String,
  exchange: Number,
  off: Number,
  colorname: String,
  plan: Number,
  colors: [ColorSchema],     // list of color variants
  storages: [StorageSchema], // ✅ NEW: list of storage options
  highlights: [String],      // bullet points about the product
  marketingImages: [String], // marketing images
});

const Product = mongoose.model("Product", ProductSchema);


// API route to get all products
app.get("/products", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// API route to get a single product by ID
app.get("/products/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// API to add new product (for testing)
app.post("/products", async (req, res) => {
  const newProduct = new Product(req.body);
  await newProduct.save();
  res.json(newProduct);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
