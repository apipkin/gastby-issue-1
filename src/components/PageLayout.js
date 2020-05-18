import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
};
const defaultProps = {
  children: null,
};

const PageLayout = ({ children, ...props }) => {
 
  const layoutStyles = { border: '1px dotted purple' };
  const contentStyles = {
    boxShadow: 'inset 0 0 10px green',
    padding: 10,
  };
  const articleStyles= {
    boxShadow: 'inset 0 0 10px yellow',
    padding: 10,
  };

  return (
    <div style={layoutStyles}>
      <div style={contentStyles}>
        <article style={articleStyles}>{children}</article>
      </div>
    </div>
  )
};

PageLayout.propTypes = propTypes;
PageLayout.defaultProps = defaultProps;

export default PageLayout;
