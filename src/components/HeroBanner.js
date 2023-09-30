import React from 'react';

const HeroBanner = ({ pageTitle, subTitle, backgroundImage }) => {
  const backgroundImageStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <div className="page-header page-header-big text-center" style={{backgroundImage: `url(${backgroundImage})`,}}>
      <div className="container">
        <h1 className="page-title text-white">
          {pageTitle} <span className="text-white">{subTitle}</span>
        </h1>
      </div>
    </div>
  );
};

export default HeroBanner;
