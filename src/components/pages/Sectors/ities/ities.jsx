import React from 'react';

import Contact from '@/components/compnent/Contact/ContactPage';
import Footer from '@/components/compnent/Footer/Footer';
import imgLand from '@/assets/Sectors/AviationServices/01.webp';
import L01 from '@/assets/Sectors/Ities/left/L01.webp';
import L02 from '@/assets/Sectors/Ities/left/L02.webp';
import L03 from '@/assets/Sectors/Ities/left/L03.webp';
import L04 from '@/assets/Sectors/Ities/left/L04.webp';
import L05 from '@/assets/Sectors/Ities/left/L05.webp';
import LeftCardNoLink from '@/components/compnent/dynamicCards/LeftCard/LeftCardNoLink';
import R01 from '@/assets/Sectors/Ities/right/R01.webp';
import R02 from '@/assets/Sectors/Ities/right/R02.webp';
import R03 from '@/assets/Sectors/Ities/right/R03.webp';
import R04 from '@/assets/Sectors/Ities/right/R04.webp';
import R05 from '@/assets/Sectors/Ities/right/R05.webp';
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

const Ities = () => {
  return (
    <div className='overflow-x-hidden'>
      <SectorHero
        img={require('@/assets/Sectors/05Ities.webp').default}
        title='Ities and Industrial'
        description='Our customized services address the specific needs and hurdles of the Ities sector, ensuring smooth operations and peak performance.'
      />
      <RightCardNoLink
        title='Elevating workspaces with tailored solutions'
        description='We offer customized solutions for workspace planning, security, and maintenance to enhance operational efficiency and minimize downtime. Our client-centric approach ensures tailored solutions for IT center clients, covering state-of-the-art security, housekeeping, technical support, energy and waste management, workspace planning, emergency preparedness, and green initiatives. The company prioritizes regular communication and feedback mechanisms, contributing to a dynamic and continuously improving work environment.'
        img={R01}
      />
      {/* <ScoreCard
        title="Ities and Industrial in numbers"
        data={scoreCardData1}
        ClassCustom="mt-20"
      /> */}
      <LeftCardNoLink
        title='Integrated Facility Management (IFM)'
        description='Comprehensive management of various facilities, including workspace planning, security, and maintenance, is at the core of Bansi Enterprise’s Integrated Facility Management (IFM) services, offering customized solutions to enhance operational efficiency and reduce downtime.

Comprehensive management of various facilities, including workspace planning, security, and maintenance.
Customized solutions to enhance operational efficiency and reduce downtime. We do Carpet AMC, DUCT CLEANING, BMS & Server / Utilities, Toilets & Cafeteria.'
        img={L01}
      />
      <RightCardNoLink
        title='Security Services'
        description='With state-of-the-art security measures safeguarding IT infrastructure and data, Bansi Enterprise ensures a secure working environment through meticulous access control, surveillance, and strategic deployment of security personnel.

State-of-the-art security measures to safeguard IT infrastructure and data.
Access control, surveillance, and security personnel deployment for a secure working environment.'
        img={R02}
      />
      <LeftCardNoLink
        title='
Housekeeping and Maintenance'
        description='Bansi Enterprise’s commitment to a hygienic and organized workplace is reflected in regular cleaning services, complemented by proactive maintenance efforts to ensure optimal conditions for all systems, equipment, and facilities.

Regular cleaning services to maintain a hygienic and organized workplace.
Proactive maintenance to ensure all systems, equipment, and facilities are in optimal condition.'
        img={L02}
      />
      <RightCardNoLink
        title='Technical Support'
        description='Providing prompt technical assistance for resolving IT-related issues, Bansi Enterprise ensures the availability and functionality of essential IT infrastructure, contributing to the seamless operation of business processes.

Prompt technical assistance for resolving IT-related issues.
Ensuring the availability and functionality of essential IT infrastructure.'
        img={R03}
      />
      <LeftCardNoLink
        title='Energy Management'
        description='Bansi Enterprise implements energy-efficient practices to reduce costs and environmental impact, closely monitoring and optimizing energy consumption in alignment with industry standards for sustainability.

Implementation of energy-efficient practices to reduce costs and environmental impact.
Monitoring and optimizing energy consumption in alignment with industry standards.'
        img={L03}
      />
      <RightCardNoLink
        title='Waste Management'
        description='With a focus on environmental responsibility, Bansi Enterprise implements sustainable waste disposal practices, including recycling initiatives and waste reduction strategies.

Sustainable waste disposal practices to contribute to environmental responsibility.
Recycling initiatives and waste reduction strategies.'
        img={R04}
      />
      <LeftCardNoLink
        title='Workspace Planning and Optimization'
        description='Efficient space utilization to accommodate growth and changing needs is a hallmark of Bansi Enterprise’s services, coupled with ergonomic workspace design aimed at enhancing employee comfort and productivity.

Efficient space utilization to accommodate growth and changing needs.
Ergonomic workspace design to enhance employee comfort and productivity.'
        img={L04}
      />
      <RightCardNoLink
        title='Emergency Preparedness'
        description='Bansi Enterprise ensures comprehensive plans for handling emergencies, including fire safety and evacuation procedures, with regular drills and training sessions to guarantee a quick and effective response in critical situations.

Comprehensive plans for handling emergencies, including fire safety and evacuation procedures.
Regular drills and training sessions to ensure a quick and effective response.'
        img={R05}
      />
      <LeftCardNoLink
        title='Green Initiatives'
        description='Bansi Enterprise actively contributes to reducing the carbon footprint through the implementation of eco-friendly practices and the introduction of sustainable technologies and materials.

Implementation of eco-friendly practices to reduce the carbon footprint.
Introduction of sustainable technologies and materials.'
        img={L05}
      />
      {/* <Contact /> */}
      <ScoreCard title='About People Places and Planet' data={scoreCardData2} />
      <Footer />
    </div>
  );
};

export default Ities;
