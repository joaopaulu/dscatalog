import Navbar from 'components/NavBar';
import Catalog from 'pages/Catalog';
import './app.css';
import './core/assets/styles/custom.scss';

const App = () => {
  return (
    <>
      <Navbar />
      <Catalog />
    </>
  );
};

export default App;
