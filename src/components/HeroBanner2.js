import React from 'react';

const HeroBanner2 = ({ pageTitle, subTitle, backgroundImage }) => {


  return (


    <div className="page-header text-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="container">
        <h1 className="page-title">{subTitle} <span>{pageTitle}</span>
        </h1>
      </div>
    </div>
  );
};

export default HeroBanner2;