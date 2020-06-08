import React from "react";
import PropTypes from "prop-types";

const Image = ({ alt, url, width }) => (
  <img style={{ width }} src={url} alt={alt} />
);

Image.propTypes = {
  width: PropTypes.any,
  alt: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

Image.defaultProps = {
  width: "100%",
};

export default Image;
