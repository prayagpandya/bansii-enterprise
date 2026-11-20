'use client';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import React, { useRef, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import 'swiper/swiper-bundle.css';
import './style.css';

gsap.registerPlugin(ScrollTrigger);

import img1 from '../../../assets/Home/testimonials/01. TESTIMONIALS.webp';
import img2 from '../../../assets/Home/testimonials/02. TESTIMOALS.webp';
import img3 from '../../../assets/Home/testimonials/planning-development-authority.webp';
import img4 from '../../../assets/Home/testimonials/government-engineering-college.webp';
const testimonials = [
  {
    quote:
      'The hospital’s cleaning services are exceptional, consistently maintaining high standards of hygiene and infection control across all areas.',
    // author: 'John Doe',
    company: 'GMERS MEDICAL COLLAGE',
    image: img1,
  },
  {
    quote:
      'Cleaning operations approved by the Forest Department for compliance with environmental regulations.',
    // author: 'Jane Smith',
    company: 'office of the deputy conservator of forest aviary DAMAN',
    image: img2,
  },
  {
    quote: `During the Vice President's visit, on-site cleaning was found to be satisfactory, with cleanliness standards generally maintained across key areas.`,
    // author: 'Samuel Green',
    company: 'planning & development authority',
    image: img3,
  },
  {
    quote:
      'Cleaning services at the government site are well-maintained and meet the required hygiene and safety standards.',
    // author: 'Emily White',
    company: 'goverment engineering collage',
    image: img4,
  },
];

const TestimonialCarousel = () => {
  const carouselRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const slides = carouselRef.current?.querySelectorAll('.testimonial-slide');

      slides?.forEach((slide) => {
        gsap.fromTo(
          slide,
          { opacity: 0, x: 100 },
          {
            opacity: 1,
            x: 0,
            duration: 0.01,
            scrollTrigger: {
              trigger: slide,
              start: 'top 80%',
              end: 'top 60%',
              scrub: 1,
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }, carouselRef);

    const swiper = swiperRef.current?.swiper;
    const interval = setInterval(() => {
      if (swiper) {
        swiper.slideNext();
      }
    }, 30000);

    return () => {
      clearInterval(interval);
      ctx.revert();
    };
  }, []);

  return (
    <div className='testimonial-container-main'>
      <h1>Testimonials</h1>
      <div ref={carouselRef} className='testimonial-carousel'>
        <Swiper
          ref={swiperRef}
          spaceBetween={50}
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
          autoplay={false}
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
                    alt={testimonial.author ? `${testimonial.author}'s photo` : testimonial.company}
                    className='object-contain'
                  />
                  <p className='testimonial-name'>{testimonial.company}</p>
                </div>
                <p className='testimonial-quote'>{testimonial.quote}</p>
                {testimonial.author && (
                  <p className='testimonial-author'>- {testimonial.author}</p>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
