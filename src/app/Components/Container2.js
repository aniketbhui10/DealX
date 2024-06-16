import React, { useState, useEffect } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import { slides } from "@/app/carouselData.json";

const Container2 = ({ data }) => {
  data = slides;
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide((slide) => (slide === data.length - 1 ? 0 : slide + 1));
  };

  const prevSlide = () => {
    setSlide((slide) => (slide === 0 ? data.length - 1 : slide - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);

   
    return () => clearInterval(interval);
  }, []); 

  return (
    <>
      <div className='Carousel flex justify-center items-center relative h-3/5 w-4/5 mx-36 duration-700 ease-in-out overflow-hidden'>
        <BsArrowLeftCircleFill
          onClick={prevSlide}
          className='arrow arrow-left absolute w-8 h-8 text-black left-4 hover:cursor-pointer filter drop-shadow-lg'
        />

        {data.map((item, index) => (
          <img
            src={item.src}
            alt={item.alt}
            key={index}
            className={`slide rounded-l shadow-inner object-contain transition-opacity duration-700 ${
              slide === index ? 'opacity-100' : 'opacity-0 absolute'
            }`}
            style={{ maxHeight: '500px', maxWidth: '600px' }}
          />
        ))}

        <BsArrowRightCircleFill
          onClick={nextSlide}
          className='arrow arrow-right absolute w-8 h-8 text-black right-4 hover:cursor-pointer filter drop-shadow-lg'
        />

        <span className='indicators flex absolute bottom-4'>
          {data.map((_, index) => (
            <button
              key={index}
              onClick={() => setSlide(index)}
              className={
                slide === index
                  ? 'indi bg-white h-2 w-2 border border-none outline-none rounded-full mx-1 shadow-lg hover:cursor-pointer'
                  : 'indi indi-inactive h-2 w-2 border border-none outline-none rounded-full mx-1 shadow-lg hover:cursor-pointer bg-gray-400'
              }
            ></button>
          ))}
        </span>
      </div>
    </>
  );
};

export default Container2;
