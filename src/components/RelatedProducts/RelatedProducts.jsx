import './relatedproducts.css'
import data_product from '../Assests/data'

export const RelatedProducts = () => {
  const calculateDiscount = (oldPrice, newPrice) => {
    if (!oldPrice || oldPrice <= newPrice) return null;
    const discount = Math.round(((oldPrice - newPrice) / oldPrice) * 100);
    return discount;
  };

  return (
    <div className='relatedproducts'>
      <div className="relatedproducts-header">
        <h4>Related Products</h4>
        <hr />
        <p className="relatedproducts-subtitle">
          Handcrafted with love and attention to detail. Each piece tells a story of tradition and craftsmanship.
        </p>
      </div>
      
      <div className="relatedproducts_item">
        {data_product.map((item, i) => {
          const discount = calculateDiscount(item.old_price, item.new_price);
          
          return (
            <div className="relatedproducts-item-container" key={i}>
              {discount && (
                <div className="item-discount-badge">
                  -{discount}%
                </div>
              )}
              
              <img src={item.image} alt={item.name} />
              
              <div className="item-details-overlay">
                <div>
                  <div className="item-name">{item.name}</div>
                  <div className="item-prices">
                    <span className="item-new-price">${item.new_price}</span>
                    {item.old_price && item.old_price > item.new_price && (
                      <span className="item-old-price">${item.old_price}</span>
                    )}
                  </div>
                </div>
                
                {/* Hidden on hover details */}
                <div className="item-hover-info">
                  <p className="item-description">Handmade crochet piece</p>
                  <a href={`/product/${item.id}`} className="view-details-btn">
                    View Details
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Optional navigation dots for larger screens */}
      <div className="relatedproducts-nav">
        {data_product.slice(0, 4).map((_, i) => (
          <div 
            key={`dot-${i}`} 
            className={`nav-dot ${i === 0 ? 'active' : ''}`}
            onClick={() => {
              // In a real implementation, this would scroll to the corresponding product group
              document.querySelector('.relatedproducts_item').scrollLeft = i * 300;
            }}
          />
        ))}
      </div>
    </div>
  );
}