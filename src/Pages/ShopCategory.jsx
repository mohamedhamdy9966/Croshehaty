import { useContext } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../components/Assests/dropdown-icon.png";
import { Item } from "../components/Items/Item";

export const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  // Get category name from props
  const getCategoryName = () => {
    if (props.category) {
      return props.category.charAt(0).toUpperCase() + props.category.slice(1);
    }
    return "Products";
  };

  // Filter tags for the category (example tags)
  const getFilterTags = () => {
    const tags = {
      women: ["Sweaters", "Cardigans", "Accessories", "Dresses", "Home Decor"],
      men: ["Sweaters", "Beanies", "Scarves", "Blankets"],
      kid: ["Toys", "Clothing", "Accessories", "Blankets"],
      accessory: ["Bags", "Hats", "Scarves", "Home Decor"],
    };

    return tags[props.category] || ["All", "Popular", "New Arrivals"];
  };

  // Check if item has discount
  const hasDiscount = (item) => {
    return item.old_price && item.old_price > item.new_price;
  };

  // Calculate discount percentage
  const calculateDiscount = (item) => {
    if (!hasDiscount(item)) return 0;
    return Math.round(
      ((item.old_price - item.new_price) / item.old_price) * 100
    );
  };

  return (
    <div className="shopcategory">
      <img className="shopcategory-banner" src={props.banner} alt="banner" />

      <div className="shopcategory_indexsort">
        <div className="shopcategory-info">
          <div className="shopcategory_category">
            {getCategoryName()} Collection
          </div>
          <p className="shopcategory-indexsort">
            <span>Showing 1-12</span> out of 36 Products
          </p>
        </div>

        <div className="shopcategory-sortfilter">
          <div className="shopcategory_sort">
            Sort by <img src={dropdown_icon} alt="dropdown_icon" />
          </div>
        </div>
      </div>

      <div className="filter-tags">
        {getFilterTags().map((tag, index) => (
          <div
            key={index}
            className={`filter-tag ${index === 0 ? "active" : ""}`}
          >
            {tag}
          </div>
        ))}
      </div>

      <div className="shopcategory_products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            const discount = calculateDiscount(item);

            return (
              <div className="product-card" key={i}>
                {hasDiscount(item) && (
                  <div className="product-badge">-{discount}% OFF</div>
                )}

                <img src={item.image} alt={item.name} />

                <div className="product-card-content">
                  <div>
                    <div className="product-name">{item.name}</div>
                    <div className="product-prices">
                      <span className="product-new-price">
                        ${item.new_price}
                      </span>
                      {hasDiscount(item) && (
                        <span className="product-old-price">
                          ${item.old_price}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="product-actions">
                    <button className="quick-view-btn">
                      <span>Quick View</span>
                    </button>
                    <button className="add-to-wishlist">
                      <span>♡</span>
                    </button>
                  </div>
                </div>

                {/* The original Item component is still rendered but hidden */}
                <div style={{ display: "none" }}>
                  <Item
                    key={i}
                    id={item.id}
                    name={item.name}
                    image={item.image}
                    new_price={item.new_price}
                    old_price={item.old_price}
                  />
                </div>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>

      <div className="shopcategory_loadmore">Explore More</div>
    </div>
  );
};

export default ShopCategory;
