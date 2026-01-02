import { useContext, useState } from "react";
import "./productdisplay.css";
import star_icon from "../Assests/star_icon.webp";
import star_dull_icon from "../Assests/Star-dull.png";
import { ShopContext } from "../../Context/ShopContext";

export const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  const [selectedSize, setSelectedSize] = useState("stripe");
  const [selectedImage, setSelectedImage] = useState(0);

  // Calculate discount percentage
  const discount = product.old_price
    ? Math.round(
        ((product.old_price - product.new_price) / product.old_price) * 100
      )
    : null;

  const handleAddToCart = () => {
    addToCart(product.id);
    // Optional: Show confirmation toast or animation
    console.log(`Added ${product.name} to cart with size: ${selectedSize}`);
  };

  const imageArray = [
    product.image,
    product.image, // In real app, these would be different images
    product.image,
    product.image,
  ];

  return (
    <div className="productdisplay" role="main" aria-label="Product Details">
      <div className="productdisplay_left">
        <div className="productdisplay_img_list">
          {imageArray.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${product.name} view ${index + 1}`}
              className={selectedImage === index ? "active" : ""}
              onClick={() => setSelectedImage(index)}
              loading="lazy"
            />
          ))}
        </div>
        <div className="productdisplay_main_img_container">
          {/* Discount badge */}
          {discount && discount > 0 && (
            <div
              className="productdisplay_badge"
              aria-label={`${discount}% off`}
            >
              {discount}% OFF
            </div>
          )}

          <img
            className="productdisplay_main_img"
            src={imageArray[selectedImage]}
            alt={`${product.name} - Main view`}
          />
        </div>
      </div>

      <div className="productdisplay_right">
        <h1>{product.name}</h1>

        <div className="productdisplay_right_star">
          <img src={star_icon} alt="Star rating" aria-hidden="true" />
          <img src={star_icon} alt="Star rating" aria-hidden="true" />
          <img src={star_icon} alt="Star rating" aria-hidden="true" />
          <img src={star_icon} alt="Star rating" aria-hidden="true" />
          <img src={star_dull_icon} alt="Star rating" aria-hidden="true" />
          <p aria-label="Rating: 4 out of 5 stars">(101 reviews)</p>
        </div>

        <div className="productdisplay_right_price">
          {product.old_price && (
            <div
              className="productdisplay_right_old_price"
              aria-label={`Original price: $${product.old_price}`}
            >
              {product.old_price}
            </div>
          )}
          <div
            className="productdisplay_right_new_price"
            aria-label={`Current price: $${product.new_price}`}
          >
            {product.new_price}
          </div>
        </div>

        <div className="productdisplay_right_description">
          Handcrafted with care using premium natural fibers. Each piece is made
          with attention to detail and sustainable practices. Perfect for adding
          handmade warmth to your wardrobe.
        </div>

        <div className="productdisplay_right_size">
          <h3>Select Style</h3>
          <div className="productdisplay_right_sizes">
            <div
              className={selectedSize === "stripe" ? "active" : ""}
              onClick={() => setSelectedSize("stripe")}
              role="button"
              tabIndex="0"
              aria-label="Select stripe pattern"
              aria-pressed={selectedSize === "stripe"}
            >
              Classic Stripe
            </div>
            <div
              className={selectedSize === "pack" ? "active" : ""}
              onClick={() => setSelectedSize("pack")}
              role="button"
              tabIndex="0"
              aria-label="Select pack of multiple items"
              aria-pressed={selectedSize === "pack"}
            >
              Complete Set
            </div>
          </div>
        </div>

        <button
          onClick={handleAddToCart}
          aria-label={`Add ${product.name} to cart`}
        >
          🧶 Add To Cart
        </button>

        <div className="productdisplay_right_category">
          <p>
            <span>Category:</span>
            <span>
              Crochet Clothing, {product.category || "Handmade Goods"}
            </span>
          </p>
          <p>
            <span>Materials:</span>
            <span>100% Natural Cotton, Eco-friendly Yarn</span>
          </p>
          <p>
            <span>Care:</span>
            <span>Hand Wash Cold, Lay Flat to Dry</span>
          </p>
        </div>
      </div>
    </div>
  );
};
