import "./popular.css";
import data_product from "../Assests/data";
import { Item } from "../Items/Item";

export const Popular = () => {
  const hasProducts = data_product && data_product.length > 0;

  return (
    <section className="popular" aria-label="Popular Accessories">
      <h1>Most Loved Crochet Pieces</h1>
      <hr />

      <div className="popular_header">
        <div className="popular_title">
          Handpicked by our community of craft lovers
        </div>
        <a
          href="/shop/all"
          className="popular_view_all"
          aria-label="View all popular items"
        >
          Explore All
        </a>
      </div>

      {hasProducts ? (
        <div className="popular_item">
          {data_product.map((item, i) => {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          })}
        </div>
      ) : (
        <div className="popular_empty" aria-label="No popular items available">
          <div className="popular_empty_icon">🧶</div>
          <p>Our popular items are being restocked!</p>
          <p>Check back soon to see what everyone is loving.</p>
        </div>
      )}
    </section>
  );
};
