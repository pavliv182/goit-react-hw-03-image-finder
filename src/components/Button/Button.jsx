import css from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ onClick }) => {
  return (
    <div className={css.buttonWrapper}>
      <button onClick={onClick} className={css.button} type="button">
        Load more
      </button>
    </div>
  );
};

export default Button;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
