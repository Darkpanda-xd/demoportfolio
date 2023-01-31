import React, { useContext } from 'react';
import {
  Swiper,
  SwiperSlide,
} from 'swiper/react';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css';
import './Portfolio.css';
import { themeContext } from '../../../public/Context';

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
  <div>
    <div className="portfolio" id='Portfolio'>
      {/* Heading */}
      <span style={{color: darkMode? 'white' : ''}}>Recent Projects</span>
      <span>Portfolio</span>
      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img
            src="../../img/sidebar.png"
            alt="sidebar"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="../../img/ecommerce.png"
            alt="img"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="../../img/musicapp.png"
            alt="sidebar"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="../../img/hoc.png"
            alt="sidebar"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
)};

export default Portfolio;
