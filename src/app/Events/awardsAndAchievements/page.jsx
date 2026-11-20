import React from 'react';

import Accreditions from '@/components/compnent/awardsCard/Accreditions/Accreditions';
import AwardsCard from '@/components/compnent/awardsCard/AwardCard/AwardsCard';
import ContactHero from '@/components/compnent/Contact/sector private/ContactHero';
import Footer from '@/components/compnent/Footer/Footer';

import iso9001Img from '../../../assets/Awards/Awards/01.webp';
import iso14001Img from '../../../assets/Awards/Awards/02.webp';
import iso45001Img from '../../../assets/Awards/Awards/03.webp';
import sa8000Img from '../../../assets/Awards/Awards/04.webp';
import iso26000Img from '../../../assets/Awards/Awards/05.webp';
import iso37001Img from '../../../assets/Awards/Awards/iso-37001-2025.webp';
import iso10667Img from '../../../assets/Awards/Awards/iso-10667-2-2020.webp';
import img2 from './01.webp'; // Adjust this path as needed

const awardsData = [
  {
    img: iso9001Img,
    Title: 'QUALITY MANAGEMENT AWARDS',
    Disc: 'A small description of the award',
  },
  {
    img: iso9001Img,
    Title: 'Wealth Creator Award 2015',
    Disc: 'A small description of the award',
  },
];
const awardsData2 = [
  {
    img: iso9001Img,
    Title: 'Wealth Creator Award 2015',
    Disc: 'A small description of the award',
  },
  {
    img: iso9001Img,
    Title: 'Wealth Creator Award 2015',
    Disc: 'A small description of the award',
  },
  {
    img: iso9001Img,
    Title: 'Wealth Creator Award 2015',
    Disc: 'A small description of the award',
  },
  {
    img: iso9001Img,
    Title: 'Wealth Creator Award 2015',
    Disc: 'A small description of the award',
  },
];
const accreditions = [
  {
    img: iso9001Img,
    Title: 'ISO 9001:2015 (QUALITY MANAGEMENT SYSTEM)',
    Disc: 'Bansi Enterprise believes in keep clean everywhere and it maintain total quality management',
  },
  {
    img: iso45001Img,
    Title: 'ISO 45001:2018 (OCCUPATIONAL HEALTH & SAFETY MANAGEMENT SYSTEM)',
    Disc: 'Bansi Enterprise occupies best safety majors for their employees , it includes all safety policies .',
  },
  {
    img: iso37001Img,
    Title: 'ISO 37001:2025 (Anti-Bribery Management Systems)',
    Disc: 'Bansi Enterprise maintains strict anti-bribery management systems.',
  },
  {
    img: iso14001Img,
    Title: 'ISO 14001:2015 (ENVIRONMENT MANAGEMENT SYSTEM)',
    Disc: 'Bansi Enterprise Protects the environment &  adopt clean technologies which reduce the pollution',
  },
  {
    img: iso26000Img,
    Title: 'ISO 26000:2010 (SOCIAL RESPONSIBILITY MANAGEMENT SYSTEM)',
    Disc: 'Bansi Enterprise is committed to social responsibility and sustainable development.',
  },
  {
    img: sa8000Img,
    Title: 'SA 8000:2014 (SOCIAL ACCOUNTABILITY)',
    Disc: 'Bansi Enterprise adheres to high standards of social accountability.',
  },
  {
    img: iso10667Img,
    Title: 'ISO 10667-2:2020 (Assessment Service Delivery - Part 2)',
    Disc: 'Bansi Enterprise ensures quality in assessment service delivery.',
  },
];
const Page = () => {
  return (
    <div>
      <ContactHero img={img2} title={'Awards'} />
      <div>
        {/* <AwardsCard awards={awardsData} /> */}

        <Accreditions accreditions={accreditions} />
        {/* <h1 className="tracking-widest text-blue-600 text-2xl md:text-4xl md:text-center mt-8 uppercase font-bold">
          Affiliations
        </h1> */}
        {/* <AwardsCard awards={awardsData2} /> */}
        <Footer />
      </div>
    </div>
  );
};

export default Page;
