import React from 'react';

const PageHeading: React.FC<React.PropsWithChildren<{ eyebrow: string; title: string }>> = ({ eyebrow, title, children }) => (
  <div className="page-heading">
    <div><p className="eyebrow">{eyebrow}</p><h1 className="page-title">{title}<span>.</span></h1></div>
    {children}
  </div>
);

export default PageHeading;
