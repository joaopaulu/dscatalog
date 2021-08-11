import ProductPrice from 'components/ProductPrice';
import ProuctImg from 'core/assets/images/product.png';
import './style.css';

const ProductCard = () => {
  return (
    <div className="base-card product-card">
      <div className="card-top-container">
        <img src={ProuctImg} alt="Product" />
      </div>
      <div className="card-bottom-container">
        <h6>Nome do produto</h6>
        <ProductPrice />
      </div>
    </div>
  );
};

export default ProductCard;
