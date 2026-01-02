import "./item.css";
import { Link } from "react-router-dom";

export const Item = (props) => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  // Calculate discount percentage if old_price exists
  const discount = props.old_price
    ? Math.round(((props.old_price - props.new_price) / props.old_price) * 100)
    : null;

  return (
    <div
      className="item"
      role="article"
      aria-label={`${props.name} - Crochet Item`}
    >
      {/* Sale badge */}
      {discount && discount > 0 && (
        <div className="item_badge" aria-label={`${discount}% off`}>
          {discount}% OFF
        </div>
      )}

      <Link to={`/product/${props.id}`} onClick={handleClick}>
        <div className="item_image_container">
          <img
            src={props.image}
            alt={`${props.name} - Handmade crochet item`}
            loading="lazy"
          />
          <div className="item_image_overlay"></div>
        </div>

        <p className="item_name">{props.name}</p>

        <div className="item_prices" aria-label="Price information">
          <div
            className="item_price_new"
            aria-label={`Current price: $${props.new_price}`}
          >
            {props.new_price}
          </div>
          {props.old_price && props.old_price > props.new_price && (
            <div
              className="item_price_old"
              aria-label={`Original price: $${props.old_price}`}
            >
              {props.old_price}
            </div>
          )}
        </div>
      </Link>

      <div
        className="item_quick_view"
        role="button"
        tabIndex="0"
        aria-label="Quick view"
      >
        Quick View
      </div>
    </div>
  );
};
