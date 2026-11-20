import Image from 'next/image';
import React from 'react';

import ContactHero from '@/components/compnent/Contact/sector private/ContactHero';
import CrouselCustom from '@/components/compnent/crousel/Crousel';
import Footer from '@/components/compnent/Footer/Footer';
import img from '@/assets/About/b1.webp';
import img2 from '@/assets/About/b2.webp';
import ScoreCard from '@/components/compnent/scorecard/ScoreCard';

import Board from './Board of Directors/Board';
import Executives from './Board of Directors/Executives';
import FindJob from './FindJobs/FindJobs';
import Mission from './Mission/Mission';
import img1 from './01.webp';

const data = [
  { label: 'Employees', value: '2000+' },
  { label: 'Cities', value: '100+' },
  { label: 'Clients', value: '250+' },
  { label: 'Years', value: '25+' },
];
const About = () => {
  return (
    <div>
      <ContactHero
        img={img1}
        title={'About Us'}
        classnameContainer={'bg-cover  bg-bottom'}
      />
      <div className='h-full pb-[84px] mt-20 '>
        <h1 className=' text-center text-2xl lg:text-4xl mt-5 text-[#0E2E71] font-bold uppercase'>
          THE INSPIRATIONAL JOURNEY OF OUR FOUNDER & CHAIRMAN
        </h1>
        <div className='grid h-[80%] grid-cols-1 lg:grid-cols-3 gap-4 md:grid-rows-1 md:px-32 mt-6 px-4'>
          <div className='space-y-4 col-span-1 flex flex-col items-center justify-center '>
            <p className='text-2xl md:text-3xl pr-8 text-[#0E2E71] font-bold bg-transparent'>
              Mr. Pravinkumar Vaja
            </p>
            <div className='bg-transparent text-lg md:text-xl md:w-4/5 lg:w-full xl:w-4/5 text-gray-600'>
              <p className='bg-transparent'>
                Founder & Chairman
              </p>
              <p className='bg-transparent'>Bansi Enterprise </p>
            </div>
          </div>
          <div className='col-span-1 flex flex-col justify-center md:items-center'>
            <div className='bg-white px-3 py-4 shadow-xl w-full md:w-2/3 lg:w-full rounded-lg shadow-gray-300'>
              <Image src={img2} width={500} height={500} alt='Mr. Pravinkumar Vaja' />
            </div>
          </div>
          <div className='col-span-1 px-4 flex flex-col items-center justify-center lg:text-[14px] xl:text-lg text-base md:w-full lg:w-full xl:w-4/5 lg:text-justify md:text-justify md:ml-0 text-gray-600 md:mt-6 lg:mt-0 lg:ml-16'>
            <p>
              A great Decision Maker as an social entrepreneur faithful towards keep clean everywhere . Mr. Pravinkumar Vaja give out as the Chairman and Managing Director of Bansi Enterprise His journey commenced in ,1999
            </p>
          </div>
        </div>

        <h1 className=' text-center text-2xl lg:text-4xl mt-16 text-[#0E2E71] font-bold'>
          THE INSPIRATIONAL JOURNEY OF OUR MANAGING DIRECTOR
        </h1>
        <div className='grid h-[80%] grid-cols-1 lg:grid-cols-3 gap-4 md:grid-rows-1 md:px-32 mt-6 px-4'>
          <div className='space-y-4 col-span-1 flex flex-col items-center justify-center '>
            <p className='text-2xl md:text-3xl pr-8 text-[#0E2E71] font-bold bg-transparent'>
              Mrs. Bansi Vaja
            </p>
            <div className='bg-transparent text-lg md:text-xl md:w-4/5 lg:w-full xl:w-4/5 text-gray-600'>
              <p className='bg-transparent'>
                Managing Director
              </p>
              <p className='bg-transparent'>Bansi Enterprise </p>
            </div>
          </div>
          <div className='col-span-1 flex flex-col justify-center md:items-center'>
            <div className='bg-white px-3 py-4 shadow-xl w-full md:w-2/3 lg:w-full rounded-lg shadow-gray-300'>
              <Image src={img} width={500} height={500} alt='Mrs. Bansi Vaja' />
            </div>
          </div>
          <div className='col-span-1 px-4 flex flex-col items-center justify-center lg:text-[14px] xl:text-lg text-base md:w-full lg:w-full xl:w-4/5 lg:text-justify md:text-justify md:ml-0 text-gray-600 md:mt-6 lg:mt-0 lg:ml-16'>
            <p>
              Since 1999, Mrs. Bansi Vaja has been a driving force behind the continued growth and success of Bansi Enterprise. With over 25 years of industry experience, she has led the organization with dedication, integrity, and a strong commitment to excellence.
            </p>
          </div>
        </div>
        <div className='md:px-32 h-full mt-10 xl:mt-20 px-8'>
          <p className='text-[14px] xl:text-lg py-3 text-justify text-gray-600'>
            Her leadership is centered on delivering quality services, fostering long-term client relationships, and maintaining the highest standards of professionalism. Through her strategic vision and customer-focused approach, she has played a vital role in strengthening the company&apos;s reputation as a trusted and reliable business partner.
          </p>
          <p className='text-[14px] xl:text-lg py-3 text-justify text-gray-600'>
            Mrs. Vaja believes in continuous improvement, innovation, and ethical business practices. Her commitment to operational excellence and sustainable growth continues to inspire the team and position Bansi Enterprise for future success.
          </p>
        </div>

        <CrouselCustom />
        <Mission />
        {/* <Board />
        <Executives /> */}
        <ScoreCard data={data} />
        <Footer />
        {/* <FindJob /> */}
      </div>
    </div>
  );
};

export default About;
