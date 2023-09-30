import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { images } from '../assets/images/Images'


const MainSlider = () => {

    const paragraphStyle = {
        backgroundImage: images.slide1
      };

  const sliderSettings = {
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
  };

  const slides = [
    {
      backgroundImage: `${images.slide1}`, // Use template literals to specify the background image
      subtitle: 'Don’t Miss',
      title: 'Wedding Collection',
      text: 'Online Only',
      link: '/shop.html',
      buttonText: 'Discover NOW',
    },
    {
      backgroundImage: `${images.slide2}`, // Use template literals to specify the background image
      subtitle: 'Rock Yourself with',
      title: 'Latest in Trend',
      text: 'Get Yourself Styled',
      link: '/shop.html',
      buttonText: 'Shop NOW',
    },
  ];


  return (


    <div className="intro-slider-container mb-0">
      <Slider {...sliderSettings}>
        {slides.map((slide, index) => (
            <div className="intro-slide" key={index} style={{backgroundImage: `url(${slide.backgroundImage})`}}>
            <div className="container intro-content text-center">
              <h3 className="intro-subtitle text-white" style={{ marginTop : '20%' }}>{slide.subtitle}</h3>
              <h1 className="intro-title text-white">{slide.title}</h1>
              <div className="intro-text text-white">{slide.text}</div>
              <a href={slide.link} className="btn btn-primary">
                {slide.buttonText}
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MainSlider;
