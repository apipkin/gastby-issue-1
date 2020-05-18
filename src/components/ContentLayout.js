import React from 'react';
import PropTypes from 'prop-types';

import PageLayout from './PageLayout';
import SiteProvider from './SiteProvider';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
};

const ContentLayout = ({children, ...props}) => {
  const sectionStyles = {
    boxShadow: 'inset 0 0 10px orange',
    padding: 10,
  };

  return (
    <PageLayout>
      <SiteProvider>
        <section style={sectionStyles}>{children}</section>
      </SiteProvider>
    </PageLayout>
  );
};

ContentLayout.propTypes = propTypes;
ContentLayout.defaultProps = defaultProps;

export default ContentLayout;

