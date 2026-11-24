'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import './style.css';

import img1 from '../../../assets/Home/testimonials/01. TESTIMONIALS.webp';
import img2 from '../../../assets/Home/testimonials/02. TESTIMOALS.webp';
import img3 from '../../../assets/Home/testimonials/planning-development-authority.webp';
import img4 from '../../../assets/Home/testimonials/government-engineering-college.webp';

const testimonials = [
  {
    quote:
      'The hospital’s cleaning services are exceptional, consistently maintaining high standards of hygiene and infection control across all areas.',
    company: 'GMERS MEDICAL COLLEGE',
    image: img1,
  },
  {
    quote:
      'Cleaning operations approved by the Forest Department for compliance with environmental regulations.',
    company: 'office of the deputy conservator of forest aviary',
    image: img2,
  },
  {
    quote: `During the Vice President's visit, on-site cleaning was found to be satisfactory, with cleanliness standards generally maintained across key areas.`,
    company: 'planning & development authority',
    image: img3,
  },
  {
    quote:
      'Cleaning services at the government site are well-maintained and meet the required hygiene and safety standards.',
    company: 'government engineering college',
    image: img4,
  },
];

const TestimonialCarousel = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className='testimonial-container-main'>
      <h1>Testimonials</h1>
      <div className='testimonial-carousel'>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={32}
          slidesPerView={1}
          speed={800}
          grabCursor={true}
          onSwiper={setSwiperInstance}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 2,
            },
          }}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className='testimonial-slide'>
              <div className='testimonial-content'>
                <div className='testimonial-img-container'>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div className='testimonial-head'>
                  <Image
                    src={testimonial.image}
                    width={100}
                    height={100}
                    alt={testimonial.company}
                    loading='lazy'
                    decoding='async'
                    className='object-contain'
                  />
                  <p className='testimonial-name'>{testimonial.company}</p>
                </div>
                <p className='testimonial-quote'>{testimonial.quote}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          className='mt-8 flex items-center justify-center gap-2.5'
          role='tablist'
          aria-label='Testimonials navigation'
        >
          {testimonials.map((testimonial, index) => {
            const isActive = activeIndex === index;
            return (
              <button
                key={testimonial.company || index}
                type='button'
                role='tab'
                aria-selected={isActive}
                aria-label={`Show testimonial ${index + 1}: ${testimonial.company}`}
                onClick={() => swiperInstance?.slideToLoop(index)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'w-8 bg-gradient-to-r from-[#0E2E71] to-[#0d9cd4]'
                    : 'w-2.5 bg-slate-300 hover:bg-[#0d9cd4]/60'
                }`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
