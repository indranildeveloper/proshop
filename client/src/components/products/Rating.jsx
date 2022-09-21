import PropTypes from "prop-types";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

const Rating = ({ value, text, color }) => {
  return (
    <div className="rating my-2 d-flex align-items-center justify-content-between">
      <div className="stars">
        <span>
          {value >= 1 ? (
            <FaStar color={color} />
          ) : value >= 0.5 ? (
            <FaStarHalfAlt color={color} />
          ) : (
            <FaRegStar color={color} />
          )}
        </span>
        <span>
          {value >= 2 ? (
            <FaStar color={color} />
          ) : value >= 1.5 ? (
            <FaStarHalfAlt color={color} />
          ) : (
            <FaRegStar color={color} />
          )}
        </span>
        <span>
          {value >= 3 ? (
            <FaStar color={color} />
          ) : value >= 2.5 ? (
            <FaStarHalfAlt color={color} />
          ) : (
            <FaRegStar color={color} />
          )}
        </span>
        <span>
          {value >= 4 ? (
            <FaStar color={color} />
          ) : value >= 3.5 ? (
            <FaStarHalfAlt color={color} />
          ) : (
            <FaRegStar color={color} />
          )}
        </span>
        <span>
          {value >= 5 ? (
            <FaStar color={color} />
          ) : value >= 4.5 ? (
            <FaStarHalfAlt color={color} />
          ) : (
            <FaRegStar color={color} />
          )}
        </span>
      </div>
      <span className="">{text && text}</span>
    </div>
  );
};

Rating.defaultProps = {
  color: "#f8e825",
};

Rating.propTypes = {
  value: PropTypes.number,
  text: PropTypes.string,
  color: PropTypes.string,
};

export default Rating;
