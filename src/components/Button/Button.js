import PropTypes from 'prop-types';
import style from './Button.module.css';

const Button = ({ onLoadMore }) => {
  return (
    <button type="button" className={style.Button} onClick={onLoadMore}>
      Load more
    </button>
  );
};

Button.propTypes = {
  onLoadMore: PropTypes.func,
};

export default Button;
