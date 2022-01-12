import PropTypes from 'prop-types';

const Button = ({ children, ...rest }) => {
    return (
        <button
            className="bg-yellow-300 w-full border-black border-2 text-black font-bold py-2 mb-5"
            {...rest}>
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.string.isRequired
};

export default Button;
