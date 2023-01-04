import React from 'react';

const PCustom = ({ children, ...props }) => {
  return (
    <>
      <p className="text-base mb-1" {...props}>{children}</p>
    </>
  )
}

export default PCustom;
