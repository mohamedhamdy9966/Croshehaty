import "./breadcrum.css";
import arrow_icon from "../Assests/right_arrow.png";

export const Breadcrum = (props) => {
  const { product } = props;

  return (
    <nav className="breadcrum" aria-label="Breadcrumb">
      <span className="breadcrumb-item" role="link" tabIndex="0">
        Home
      </span>
      <img src={arrow_icon} alt="Right arrow" aria-hidden="true" />

      <span className="breadcrumb-item" role="link" tabIndex="0">
        Shop
      </span>
      <img src={arrow_icon} alt="Right arrow" aria-hidden="true" />

      <span className="breadcrumb-item" role="link" tabIndex="0">
        {product.category}
      </span>
      <img src={arrow_icon} alt="Right arrow" aria-hidden="true" />

      <span className="current-page" aria-current="page">
        {product.name}
      </span>
    </nav>
  );
};

export default Breadcrum;