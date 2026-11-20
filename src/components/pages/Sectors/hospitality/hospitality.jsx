import React from 'react';

import Contact from '@/components/compnent/Contact/ContactPage';
import Footer from '@/components/compnent/Footer/Footer';
import imgLand from '@/assets/Sectors/AviationServices/01.webp';
import L01 from '@/assets/Sectors/Hospitality/left/L01.webp';
import L02 from '@/assets/Sectors/Hospitality/left/L02.webp';
import L03 from '@/assets/Sectors/Hospitality/left/L03.webp';
import L04 from '@/assets/Sectors/Hospitality/left/L04.webp';
import L05 from '@/assets/Sectors/Hospitality/left/L05.webp';
import L06 from '@/assets/Sectors/Hospitality/left/L06.webp';
import L07 from '@/assets/Sectors/Hospitality/left/L07.webp';
import LeftCardNoLink from '@/components/compnent/dynamicCards/LeftCard/LeftCardNoLink';
import R01 from '@/assets/Sectors/Hospitality/right/R01.webp';
import R02 from '@/assets/Sectors/Hospitality/right/R02.webp';
import R03 from '@/assets/Sectors/Hospitality/right/R03.webp';
import R04 from '@/assets/Sectors/Hospitality/right/R04.webp';
import R05 from '@/assets/Sectors/Hospitality/right/R05.webp';
import R06 from '@/assets/Sectors/Hospitality/right/R06.webp';
import R07 from '@/assets/Sectors/Hospitality/right/R07.webp';
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

const Hospitality = () => {
  return (
    <div className='overflow-x-hidden'>
      <SectorHero
        img={require('@/assets/Sectors/06Hospitality.webp').default}
        title='Hospitality and Industrial'
        description='Our customized services address the specific needs and hurdles of the Hospitality sector, ensuring smooth operations and peak performance.'
      />
      <RightCardNoLink
        title='Optimize your facility performance with our dedicated solutions'
        description='Bansi Enterprise’s comprehensive facility management solutions collectively aim to create a secure, comfortable, and aesthetically pleasing environment for guests while optimizing operational efficiency for hospitality establishments.'
        img={R01}
      />
      {/* <ScoreCard
        title="Hospitality and Industrial in numbers"
        data={scoreCardData1}
        ClassCustom="mt-20"
      /> */}
      <LeftCardNoLink
        title='Housekeeping Services'
        description='Detailed cleaning of guest rooms, public areas, and facilities.
Linen and laundry management for a fresh and inviting atmosphere.
Regular maintenance of furnishings and fixtures.'
        img={L01}
      />
      <RightCardNoLink
        title='HVAC Maintenance'
        description='Regular inspection and maintenance of heating, ventilation, and air conditioning systems.
Ensuring optimal room temperatures and air quality for guest comfort.
Prompt response to any HVAC issues to maintain a pleasant environment.'
        img={R02}
      />
      <LeftCardNoLink
        title='Waste Management'
        description='Efficient collection, segregation, and disposal of waste to maintain cleanliness.
Implementation of sustainable waste reduction practices.
Recycling initiatives for environmentally responsible waste management.'
        img={L02}
      />
      <RightCardNoLink
        title='Landscaping Services'
        description='Groundskeeping to enhance the aesthetic appeal of outdoor spaces.
Seasonal planting and maintenance of gardens.
Pest control measures to protect the exterior environment.'
        img={R03}
      />
      <LeftCardNoLink
        title='Laundry Solutions'
        description='We strive to create a welcoming and comfortable environment for your guests. Crisp linens, fluffy towels, and impeccably laundered amenities are all essential elements in achieving that goal. That’s why we offer a comprehensive range of hospitality laundry solutions designed to meet the unique needs of your establishment.'
        img={L03}
      />
      <RightCardNoLink
        title='Pantry and F&B Services'
        description='In the fast-paced world of Food and Beverage (F&B), a well-functioning pantry and efficient service are the cornerstones of success. At Bansi Enterprise we understand the importance of streamlining back-of-house operations to ensure a seamless dining experience for your guests.'
        img={R04}
      />
      <LeftCardNoLink
        title='Kitchen Stewarding Solutions'
        description='A spotless kitchen is not just about aesthetics; it’s the foundation of a safe and efficient foodservice environment. At Bansi Enterprise we understand the critical role kitchen stewarding plays in your operation. We offer a comprehensive range of solutions designed to streamline your back-of-house tasks and ensure the highest hygiene standards.'
        img={L04}
      />
      <RightCardNoLink
        title='Energy Management'
        description='Monitoring and optimization of energy consumption.
Implementation of energy-efficient technologies and practices.
Cost-effective solutions to reduce energy expenses.'
        img={R05}
      />
      <LeftCardNoLink
        title='Technical Maintenance'
        description='Regular inspection and maintenance of technical equipment.
Timely repairs and upgrades to prevent operational disruptions.
Compliance with safety standards for all technical systems.'
        img={L05}
      />
      <RightCardNoLink
        title='Emergency Response Planning'
        description='Development and implementation of emergency preparedness plans.
Staff training for efficient response to emergencies.
Regular drills to ensure readiness for various scenarios.'
        img={R06}
      />
      <LeftCardNoLink
        title='Front Desk Support'
        description='Customer service support for guests.
Assistance with check-ins, reservations, and inquiries.
Ensuring a positive and welcoming experience for guests.'
        img={L06}
      />
      <RightCardNoLink
        title='Pest Control'
        description='Implementation of pest prevention measures.
Regular inspections to identify and address potential pest issues.
Use of eco-friendly pest control solutions to maintain a safe environment.'
        img={R07}
      />
      <LeftCardNoLink
        title='
Store Room Services'
        description='A well-organized storeroom is essential for any business. It ensures you have the necessary supplies readily available, minimizes clutter, and ultimately saves you time and money. We offer a comprehensive range of storeroom services designed to optimize your storage space and streamline your operations.'
        img={L07}
      />

      {/* <Contact /> */}
      <ScoreCard title='About People Places and Planet' data={scoreCardData2} />
      <Footer />
    </div>
  );
};

export default Hospitality;
