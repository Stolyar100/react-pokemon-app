import React from 'react';
import PropTypes from 'prop-types';
import './Layout.css';

export default function Layout({ children }) {
  return <div className="layout">{children}</div>;
}

Layout.propTypes = {
  children: PropTypes.element,
};

Layout.defaultProps = {
  children: PropTypes.element,
};
