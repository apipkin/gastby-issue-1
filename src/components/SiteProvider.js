import React from 'react';
import PropTypes from 'prop-types';
import { MDXProvider } from '@mdx-js/react';
import * as Library from '../../Library';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
  children: null
};

const Examples = {
  ButtonGroup: (props) => { return <div className="group" {...props} />}
};


const components = {
  Examples,
  ...Library,
};

const PrismProvider = ({ children }) => {
  return (
    <MDXProvider components={components}>{children}</MDXProvider>
  );
};

PrismProvider.propTypes = propTypes;
PrismProvider.defaultProps = defaultProps;

export default PrismProvider;
