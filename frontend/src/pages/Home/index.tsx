import ButtonIcon from 'components/ButtonIcon';
import { ReactComponent as MainImage } from 'core/assets/images/main-image.svg';
import { Link } from 'react-router-dom';
import './styles.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-card base-card">
        <div className="home-content-container">
          <h1>Conheça o melhor catálogo de produtos</h1>
          <p>
            Ajudaremos você a encontrar os melhores produtos disponíveis no
            mercado
          </p>
          <Link to="/products">
            <ButtonIcon />
          </Link>
        </div>
        <div className="home-image-container">
          <MainImage />
        </div>
      </div>
    </div>
  );
};

export default Home;
