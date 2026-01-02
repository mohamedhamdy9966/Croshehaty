import "./descriptionbox.css";

export const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox_navigator">
        <div
          className="descriptionbox_nav_box active"
          role="tab"
          aria-selected="true"
          tabIndex="0"
        >
          <span className="tab-icon">📝</span>
          Description
        </div>
        <div
          className="descriptionbox_nav_box fade"
          role="tab"
          aria-selected="false"
          tabIndex="0"
        >
          <span className="tab-icon">⭐</span>
          Reviews (50)
        </div>
      </div>

      <div className="descriptionbox_description">
        <p>
          Discover the art of handmade comfort with our premium crochet
          collection. Each piece is lovingly crafted with care, using the finest
          natural fibers to ensure both durability and softness against your
          skin.
        </p>
        <p>
          Our crochet clothing combines traditional techniques with modern
          designs, creating timeless pieces that celebrate craftsmanship and
          sustainable fashion. Every stitch tells a story of passion and
          attention to detail.
        </p>
        <p>
          Experience the perfect blend of comfort and style with garments that
          breathe with you, adapt to your movements, and become cherished
          additions to your wardrobe for years to come.
        </p>
        <p>
          ✨ Handmade with love • Natural materials • Ethically produced • Made
          to last
        </p>
      </div>
    </div>
  );
};
