import PropTypes from "prop-types";

function Card({ children, reverse }) {
  //This is called Conditional class styling
  //   return <div className={`card ${reverse && "reverse"}`}>{children}</div>;

  return (
    <div
      className="card"
      //This is called Inline Conditional styling
      //   style={{
      //     backgroundColor: reverse ? "rgb(0,0,0,0.4)" : "#fff",
      //     color: reverse ? "#fff" : "#000",
      //   }}
    >
      {children}
    </div>
  );
}

Card.defaultProps = {
  reverse: false,
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};

export default Card;
