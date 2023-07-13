import React from 'react';
import {services} from '../../Data';
import shapeOne from '../../assets/shape-2.png';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper';

import './services.css';

const Services = () => {
  return (
    <section className='services section' id='services'>
        
      <h2 className='section__title text-cs'>What I do</h2>
      <p className='section__subtitle'>
          My <span>Services</span>
      </p>

      <img src= {shapeOne} alt='shape' className='shape shape__1'/>

        <Swiper 
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          540: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
          768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
        },}} 
        modules= {[Pagination]} className='services__container container mySwiper'>
          {services.map(({name,title,description},index)=>{
            return (
              <SwiperSlide className='services__item card card-one' key={index}>
                <span className='services__subtitle text-cs'>{name}</span>
                <h3 className='services__title'>{title}</h3>
                <p className='services__description'>{description}</p>

              </SwiperSlide>
            )
          })}
        </Swiper>
    </section>
  )
}

export default Services
