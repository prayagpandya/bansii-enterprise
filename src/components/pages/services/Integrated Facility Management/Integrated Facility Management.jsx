import React from 'react';

import Contact from '@/components/compnent/Contact/ContactPage';
import Footer from '@/components/compnent/Footer/Footer';
import GridCards from '@/components/compnent/GridCards/GridCards';
import ScoreCard from '@/components/compnent/scorecard/ScoreCard';
import SectorHero from '@/components/compnent/dynamiSectorhero/SectorHero';

import homeImg from '@/assets/Services/integreted management system/home.webp';
import s01 from '@/assets/Services/integreted management system/01.webp';
import s02 from '@/assets/Services/integreted management system/02.webp';
import s04 from '@/assets/Services/integreted management system/04.webp';
import s06 from '@/assets/Services/integreted management system/06.webp';
import s07 from '@/assets/Services/integreted management system/07.webp';
import s08 from '@/assets/Services/integreted management system/08.webp';
import s09 from '@/assets/Services/integreted management system/09.webp';
import s10 from '@/assets/Services/integreted management system/10.webp';
import s11 from '@/assets/Services/integreted management system/11.webp';

import ServiceData from './cardData.json';

const images = {
  '01.webp': s01,
  '02.webp': s02,
  '04.webp': s04,
  '06.webp': s06,
  '07.webp': s07,
  '08.webp': s08,
  '09.webp': s09,
  '10.webp': s10,
  '11.webp': s11,
};

const cardData = ServiceData.Services.map((service) => ({
  ...service,
  image: images[service.image.split('/').pop()],
}));

const IntegratedFacilityManagement = () => {
  const scoreCardData1 = [
    { label: 'Employees', value: '2000+' },
    { label: 'Cities', value: '100+' },
    { label: 'Clients', value: '250+' },
    { label: 'Years', value: '25+' },
  ];

  return (
    <>
      <SectorHero
        title='Integrated Facility Management'
        img={homeImg}
        description='At Bansi Enterprise, we offer comprehensive integrated facility management solutions to streamline operations and optimize performance for businesses of all sizes.'
      />
      <div>
        <GridCards cardData={cardData} />
      </div>
      {/* <Contact /> */}
      <ScoreCard title='About People Places and Planet' data={scoreCardData1} />
      <Footer />
    </>
  );
};

export default IntegratedFacilityManagement;
