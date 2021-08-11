import { ReactComponent as ArrowIcon } from 'core/assets/images/arrow.svg';
import './styles.css';

const ButtonIcon = () => {
  return (
    <div className="btn-container">
      <button className="btn btn-primary">
        <h6>Inicie agora a sua busca</h6>
      </button>
      <div className="btn-icon-container">
        <ArrowIcon />
      </div>
    </div>
  );
};

export default ButtonIcon;
