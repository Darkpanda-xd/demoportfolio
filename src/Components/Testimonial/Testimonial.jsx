import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Testimonial.css';
import { Pagination } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css';

const profile1 = ('../../img/profile1.jpg');
const profile2 = ('../../img/profile2.jpg');
const profile3 = ('../../img/profile3.jpg');
const profile4 = ('../../img/profile4.jpg');
const profile5 = ('../../img/profile5.jpg');

const Testimonial = () => {
  const clients = [
    {
      id: 1,
      name: 'John Doe',
      avatar: profile1,
      review: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem',
    },
    {
      id: 2,
      name: 'John Doe',
      avatar: profile2,
      review: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem',
    },
    {
      id: 3,
      name: 'John Doe',

      avatar: profile3,
      review: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem',
    },
    {
      id: 4,
      name: 'John Doe',
      avatar: profile4,
      review: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem',
    },
    {
      id: 5,
      name: 'John Doe',
      avatar: profile5,
      review: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem',
    },
  ];
  return (
    <div className="t-wrapper" id='Testimonial'>
      <div className="t-heading">
        <span>Clients always get</span>
        <span>Exceptional Work</span>
        <span>from me</span>
        <div className="blur t-blur1" style={{ background: 'var(--purple)' }} />

        <div className="blur t-blur2" style={{ background: 'var(--purple)' }} />
      </div>
      {/* swiper slider */}
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}

      >
        {
            clients.map((client) => (
              <SwiperSlide key={client.id}>
                <div className="testimonial">
                  <img src={client.avatar} alt={client.name} />
                  <span>{client.review}</span>
                </div>
              </SwiperSlide>
            ))
          }
      </Swiper>
    </div>
  );
};

export default Testimonial;
