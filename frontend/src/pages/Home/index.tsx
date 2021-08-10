import ButtonIcon from 'components/ButtonIcon';
import Navbar from 'components/NavBar';
import { ReactComponent as MainImage } from 'core/assets/images/main-image.svg';
import './styles.css';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="home-card base-card">
          <div className="home-content-container">
            <h1>Conheça o melhor catálogo de produtos</h1>
            <p>
              Ajudaremos você a encontrar os melhores produtos disponíveis no
              mercado
            </p>
            <ButtonIcon />
          </div>
          <div className="home-image-container">
            <MainImage />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
