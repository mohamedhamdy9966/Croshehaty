import "./newcollections.css";
import new_collection from "../Assests/newcollections";
import { Item } from "../Items/Item";

export const NewCollections = () => {
  const hasCollections = new_collection && new_collection.length > 0;

  return (
    <section className="new_collections" aria-label="New Collections">
      <h2>Handcrafted New Collections</h2>
      <hr />

      <div className="collections_header">
        <div className="collections_title">
          Discover our latest handmade crochet pieces
        </div>
        <a
          href="/shop"
          className="collections_view_all"
          aria-label="View all collections"
        >
          View All Collections
        </a>
      </div>

      {hasCollections ? (
        <div className="collections">
          {new_collection.map((item, i) => {
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
        <div
          className="collections_empty"
          aria-label="No collections available"
        >
          <div className="collections_empty_icon">🧶</div>
          <p>Our artisans are busy creating new pieces!</p>
          <p>Check back soon for our latest collections.</p>
        </div>
      )}
    </section>
  );
};
