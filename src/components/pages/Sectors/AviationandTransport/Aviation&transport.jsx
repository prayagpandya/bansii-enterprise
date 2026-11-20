import React from 'react';

import Contact from '@/components/compnent/Contact/ContactPage';
import Footer from '@/components/compnent/Footer/Footer';
import imgLand from '@/assets/Sectors/AviationServices/01.webp';
import L01 from '@/assets/Sectors/AviationServices/lefts/L01.webp';
import L02 from '@/assets/Sectors/AviationServices/lefts/L02.webp';
import L03 from '@/assets/Sectors/AviationServices/lefts/L03.webp';
import L04 from '@/assets/Sectors/AviationServices/lefts/L04.webp';
import L05 from '@/assets/Sectors/AviationServices/lefts/L05.webp';
import L06 from '@/assets/Sectors/AviationServices/lefts/L06.webp';
import L07 from '@/assets/Sectors/AviationServices/lefts/L07.webp';
import L08 from '@/assets/Sectors/AviationServices/lefts/L08.webp';
import LeftCardNoLink from '@/components/compnent/dynamicCards/LeftCard/LeftCardNoLink';
import R01 from '@/assets/Sectors/AviationServices/rights/R01.webp';
import R02 from '@/assets/Sectors/AviationServices/rights/R02.webp';
import R03 from '@/assets/Sectors/AviationServices/rights/R03.webp';
import R04 from '@/assets/Sectors/AviationServices/rights/R04.webp';
import R05 from '@/assets/Sectors/AviationServices/rights/R05.webp';
import R06 from '@/assets/Sectors/AviationServices/rights/R06.webp';
import R07 from '@/assets/Sectors/AviationServices/rights/R07.webp';
import R08 from '@/assets/Sectors/AviationServices/rights/R08.webp';
import R09 from '@/assets/Sectors/AviationServices/rights/R09.webp';
import R10 from '@/assets/Sectors/AviationServices/rights/R10.webp';
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

const AviationAndTransport = () => {
  return (
    <div className='overflow-x-hidden'>
      <SectorHero
        img={require('@/assets/Sectors/01aviation.webp').default}
        title='Aviation and Transport'
        description='Boost your aviation operations with our tailored services. Our dedicated team ensures top-notch cleanliness, safety, and efficiency for your facility.'
      />
      <RightCardNoLink
        title='Landside'
        description='At Bansi Enterprise India, we understand the critical role airports play in connecting people and businesses across the globe. To ensure a smooth and positive travel experience for passengers, a well-maintained landside environment is essential. Bansi Enterprise India offers a comprehensive range of landside maintenance services tailored to meet the specific needs of each airport.'
        img={R01}
      />
      {/* <p className="text-[22px] px-4 text-[#0b2f6a] font-medium">
        our services
      </p> */}
      <LeftCardNoLink
        title='Horticulture'
        description='We believe in enhancing passenger experience in airports through our horticulture services. Through our services, we improve airport aesthetics and ambience contributing to a more relaxed travel experience.'
        img={L01}
      />
      <RightCardNoLink
        title='Grounds Maintenance'
        description='It is a crucial function that ensures safety and a smooth operation for both aircraft and passengers. Bansi Enterprise is involved in maintaining the runway, taxiways, and surrounding areas to the strictest safety standards.'
        img={R02}
      />
      <LeftCardNoLink
        title='Turf Maintenance'
        description='Turf maintenance at airports is a crucial practice that goes hand-in-hand with airport safety and efficiency. We employ specialized techniques to maintaining healthy turf, thereby creating a safe operating environment for aircraft and ensure smooth operations.'
        img={L02}
      />
      <RightCardNoLink
        title='Footpath Cleaning'
        description='Clean walkways free of debris, spills, and uneven surfaces minimize the risk of slips, trips, and falls for passengers and airport staff. Bansi Enterprise maintains clean walkways contributing to a more pleasant and welcoming environment for passengers. Our staff maintains a spotless environment and creates a positive first impression for passengers and visitors. We provide clean walkways free of obstructions allowing for a smoother flow of passenger traffic, and reducing congestion and delays.'
        img={R03}
      />

      {/* <ScoreCard
        title="Aviation and Transport in numbers"
        data={scoreCardData1}
      /> */}

      <LeftCardNoLink
        title='Airside'
        description='Aircraft safety and on-time departures are paramount in the aviation industry. Our comprehensive suite of airside maintenance services plays a vital role in ensuring a safe and efficient operating environment for airlines and ground handling crews at airports.'
        img={L03}
      />
      <RightCardNoLink
        title='Runway Cleaning & Maintenance'
        description='Runway cleaning and maintenance at airports are vital for maintaining the highest levels of safety in air travel. By employing effective cleaning techniques and regular maintenance procedures, We ensure smooth and safe landings and take-offs for all aircraft.'
        img={R04}
      />
      <LeftCardNoLink
        title='Wildlife hazard Management'
        description='Wildlife hazard management at airports is a crucial program that aims to minimize the risk of collisions between aircraft and wildlife, also known as bird strikes. Bansi Enterprise implements a comprehensive wildlife hazard management program, to significantly reduce the risk of bird strikes and create a safer environment for both aircraft and wildlife.'
        img={L04}
      />
      <RightCardNoLink
        title='Traffic Wardens'
        description='They ensure smooth traffic flow and enforce parking regulations as needed.'
        img={R05}
      />
      <LeftCardNoLink
        title='Bus Service'
        description='Buses operate within the airport grounds, connecting passengers between different terminals and concourses providing convenient travelling experience.'
        img={L05}
      />
      {/* <ScoreCard
        title="Aviation and Transport in numbers"
        data={scoreCardData1}
      /> */}
      <RightCardNoLink
        title='Terminal'
        description='To ensure a smooth and positive travel experience for passengers, a well-maintained landside environment is essential. Bansi Enterprise India offers a comprehensive range of landside maintenance services tailored to meet the specific needs of each airport.'
        img={R06}
      />
      <LeftCardNoLink
        title='Terminal Cleaning & Housekeeping'
        description='We maintain public areas, restrooms, gate areas, office and staff areas at airports providing deep cleaning, disinfection and waste management to create a hygienic, comfortable, and welcoming environment for passengers.'
        img={L06}
      />
      <RightCardNoLink
        title='Trolley Managment'
        description='Making trolleys readily available for passengers, stacking trolleys not in use for effective space utilization, trolley monitoring etc techniques are deployed by us to, ensure a hassle-free experience for passengers and a more streamlined operation for the entire airport.'
        img={R07}
      />
      <LeftCardNoLink
        title='Baggage Marking & Handling'
        description='By combining clear marking procedures, and advanced baggage handling systems, we ensure your luggage arrives safely and securely at your destination.'
        img={L07}
      />
      <RightCardNoLink
        title='Baggage Belt Management'
        description='The unremarkable conveyor belt system at an airport is vital in ensuring your luggage reaches its destination safely and efficiently. By employing advanced technologies and prioritizing efficient management, we help airports create a seamless baggage handling experience for a stress-free journey.'
        img={R08}
      />
      <LeftCardNoLink
        title='Waste Management'
        description='Airports generate a significant amount of waste due to the constant flow of passengers, concessions, and operational activities. By implementing a comprehensive strategy that prioritizes reduction, reuse, recycling, and responsible disposal, we help airports create a sustainable future for air travel.'
        img={L08}
      />
      <RightCardNoLink
        title='HVAC'
        description='Due to the vast size of airport terminals and the constant flow of people, efficient HVAC management is essential. Through our specialised and technical expertise, we undertake efficient HVAC operations that provide a comfortable environment for passengers and staff while minimizing energy consumption and environmental impact.'
        img={R09}
      />
      {/* <Contact /> */}
      <ScoreCard title='About People Places and Planet' data={scoreCardData2} />
      <Footer />
    </div>
  );
};

export default AviationAndTransport;
