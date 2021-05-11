/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const ChildHome = ({
  children, title, subtitle, color,
}) => (
  
  <div className="post-wrapper">
    <span style={{ color }}>{title}</span>
    <span style={{ color }}>{subtitle}</span>
    <p>{children}</p>
  </div>
  
);

export default ChildHome;
