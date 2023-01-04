import React from 'react';

const H2Custom = ({ children, ...props }) => {
  return (
    <>
      <h2 className="text-3xl font-semibold my-4" {...props}>{children}</h2>
    </>
  )
}

export default H2Custom;
