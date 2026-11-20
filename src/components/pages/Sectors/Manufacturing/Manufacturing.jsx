import React from 'react';

import Contact from '@/components/compnent/Contact/ContactPage';
import Footer from '@/components/compnent/Footer/Footer';
import imgLand from '@/assets/Sectors/AviationServices/01.webp';
import L01 from '@/assets/Sectors/Manufacturing/left/L01.webp';
import L02 from '@/assets/Sectors/Manufacturing/left/L02.webp';
import L03 from '@/assets/Sectors/Manufacturing/left/L03.webp';
import L04 from '@/assets/Sectors/Manufacturing/left/L04.webp';
import LeftCardNoLink from '@/components/compnent/dynamicCards/LeftCard/LeftCardNoLink';
import R01 from '@/assets/Sectors/Manufacturing/right/R01.webp';
import R02 from '@/assets/Sectors/Manufacturing/right/R02.webp';
import R03 from '@/assets/Sectors/Manufacturing/right/R03.webp';
import R04 from '@/assets/Sectors/Manufacturing/right/R04.webp';
import RightCardNoLink from '@/components/compnent/dynamicCards/rightcard/RightcardSector';
import ScoreCard from '@/components/compnent/scorecard/ScoreCard';
import SectorHero from '@/components/compnent/dynamiSectorhero/SectorHero';

const scoreCardData1 = [
  { label: 'Total Airports Served', value: '24+' },
  { label: 'Years of Experience', value: '9+' },
  { label: 'Sq.ft Area Managed', value: '8+ Lakhs' },
  { label: 'Manpower', value: '8000+' },
];
const scoreCardData2 = [
  { label: 'Employees', value: '2000+' },
  { label: 'Cities', value: '100+' },
  { label: 'Clients', value: '250+' },
  { label: 'Years', value: '25+' },
];

const Manufacturing = () => {
  return (
    <div className='overflow-x-hidden'>
      <SectorHero
        img={require('@/assets/Sectors/03Manufacturing.webp').default}
        title='Manufacturing and Industrial'
        description='Our customized services address the specific needs and hurdles of the manufacturing sector, ensuring smooth operations and peak performance.'
      />
      <RightCardNoLink
        title='Comprehensive facility management services for manufacturing industries'
        description='Bansi Enterprise’s Integrated Facility Management (IFM) ensures comprehensive solutions for non-core and near-core services, optimizing efficiency in manufacturing facilities. From advanced cleaning and energy management to robust security measures, waste disposal, and tailored solutions, Bansi Enterprise prioritizes safety, sustainability, and continuous improvement for manufacturing clients.'
        img={R01}
      />
      {/* <ScoreCard
        title="Manufacturing and Industrial in numbers"
        data={scoreCardData1}
        ClassCustom="mt-20"
      /> */}
      <LeftCardNoLink
        title='Integrated Facility Management (IFM)'
        description='Bansi Enterprise provides comprehensive solutions covering all aspects of non-core and near-core services, ensuring streamlined operations to enhance overall efficiency in manufacturing facilities.

        Comprehensive solutions covering all aspects of non-core and near-core services.
        Streamlined operations to enhance overall efficiency in manufacturing facilities.'
        img={L01}
      />
      <RightCardNoLink
        title='Cleaning and Sanitization Services'
        description='With the implementation of advanced cleaning techniques, including chemical-free practices, Bansi Enterprise adheres to strict hygiene standards to create a safe and healthy working environment for manufacturing facilities.

        Implementation of advanced cleaning techniques, including chemical-free cleaning practices.
        Adherence to strict hygiene standards to create a safe and healthy working environment.'
        img={R02}
      />
      <LeftCardNoLink
        title='Energy Management'
        description='Bansi Enterprise offers strategically designed energy management solutions to optimize energy usage, along with the implementation of sustainable practices for reduced environmental impact.

        Strategically designed energy management solutions to optimize energy usage.
        Implementation of sustainable practices for reduced environmental impact.'
        img={L02}
      />
      <RightCardNoLink
        title='Security Services'
        description='Ensuring the safety of manufacturing facilities, assets, and personnel, Bansi Enterprise provides robust security solutions with the integration of cutting-edge technology for enhanced surveillance and access control.

        Robust security solutions to safeguard manufacturing facilities, assets, and personnel.
        Integration of cutting-edge technology for enhanced surveillance and access control.'
        img={R03}
      />
      <LeftCardNoLink
        title='Industrial Waste Management'
        description='Bansi Enterprise’s comprehensive waste segregation and disposal services, coupled with the implementation of eco-friendly practices, promote sustainability within manufacturing facilities.

        Comprehensive waste segregation and disposal services.
        Implementation of eco-friendly practices to promote sustainability.'
        img={L03}
      />
      <RightCardNoLink
        title='Maintenance & Technical Support'
        description='Through proactive maintenance programs, Bansi Enterprise ensures the smooth functioning of equipment and machinery, conducting timely inspections and repairs to prevent downtime and maintain peak operational efficiency.

        Proactive maintenance programs to ensure the smooth functioning of equipment and machinery.
        Timely inspections and repairs to prevent downtime and maintain peak operational efficiency.'
        img={R04}
      />
      <LeftCardNoLink
        title='Compliance and Safety'
        description='Strict adherence to regulatory standards and safety protocols is a priority for Bansi Enterprise, conducting regular audits and assessments to maintain compliance and mitigate risks within manufacturing facilities.

        Strict adherence to regulatory standards and safety protocols.
        Regular audits and assessments to maintain compliance and mitigate risks.'
        img={L04}
      />

      {/* <Contact /> */}
      <ScoreCard title='About People Places and Planet' data={scoreCardData2} />
      <Footer />
    </div>
  );
};

export default Manufacturing;
