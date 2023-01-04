import React from 'react';

const H1Custom = ({ children, ...props }) => {
  return (
    <>
      <h1 className="text-4xl font-bold" {...props}>{children}</h1>
    </>
  )
}

export default H1Custom;
