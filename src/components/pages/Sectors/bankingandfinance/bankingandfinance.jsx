import React from 'react';

import Contact from '@/components/compnent/Contact/ContactPage';
import Footer from '@/components/compnent/Footer/Footer';
import imgLand from '@/assets/Sectors/AviationServices/01.webp';
import L01 from '@/assets/Sectors/Banking/left/L01.webp';
import L02 from '@/assets/Sectors/Banking/left/L02.webp';
import L03 from '@/assets/Sectors/Banking/left/L03.webp';
import L04 from '@/assets/Sectors/Banking/left/L04.webp';
import L05 from '@/assets/Sectors/Banking/left/L05.webp';
import L06 from '@/assets/Sectors/Banking/left/L06.webp';
import L07 from '@/assets/Sectors/Banking/left/L07.webp';
import LeftCardNoLink from '@/components/compnent/dynamicCards/LeftCard/LeftCardNoLink';
import R01 from '@/assets/Sectors/Banking/right/R01.webp';
import R02 from '@/assets/Sectors/Banking/right/R02.webp';
import R03 from '@/assets/Sectors/Banking/right/R03.webp';
import R04 from '@/assets/Sectors/Banking/right/R04.webp';
import R05 from '@/assets/Sectors/Banking/right/R05.webp';
import R06 from '@/assets/Sectors/Banking/right/R06.webp';
import R07 from '@/assets/Sectors/Banking/right/R07.webp';
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

const Banking = () => {
  return (
    <div className='overflow-x-hidden'>
      <SectorHero
        img={require('@/assets/Sectors/07Banking.webp').default}
        title='Banking and Industrial'
        description='Our customized services address the specific needs and hurdles of the Banking sector, ensuring smooth operations and peak performance.'
      />
      <RightCardNoLink
        title='Creating environments that Inspire, Energize, and Elevate'
        description='Our services extend to Landscaping and Gardening to create aesthetically pleasing surroundings, Pest Control to safeguard against unwelcome intruders, and Attendant and Pantry Services for the smooth running of day-to-day activities. Additionally, we take charge of Facade Cleaning, maintaining the pristine appearance of the building’s exterior, and Front Desk Management, ensuring a welcoming and organized entry point.'
        img={R01}
      />
      {/* <ScoreCard
        title="Banking and Industrial in numbers"
        data={scoreCardData1}
        ClassCustom="mt-20"
      /> */}
      <LeftCardNoLink
        title='Mechanized Housekeeping'
        description='At Bansi Enterprise, we’re proud to offer our banking clients a top-notch housekeeping service tailored to their needs. Through our partnership, we ensure that cleanliness and orderliness are consistently maintained within banking facilities. Our dedication to providing high-quality service underscores our commitment to enhancing the environment for both staff and customers alike.'
        img={L01}
      />
      <RightCardNoLink
        title='E-Waste/Garbage Management'
        description='At Bansi Enterprise, we’re proud to offer our banking clients a top-notch housekeeping service tailored to their needs. Through our partnership, we ensure that cleanliness and orderliness are consistently maintained within banking facilities. Our dedication to providing high-quality service underscores our commitment to enhancing the environment for both staff and customers alike.'
        img={R02}
      />
      <LeftCardNoLink
        title='Electro-Mechanical Maintenance'
        description='Our skilled technicians utilize advanced techniques and tools to ensure the smooth operation of mechanical and electrical systems, minimizing downtime and optimizing performance. Whether it’s preventive maintenance, troubleshooting, or emergency repairs, our team is dedicated to ensuring the efficiency and safety of all electro-mechanical systems.'
        img={L02}
      />
      <RightCardNoLink
        title='Plumbing'
        description='From routine maintenance to emergency repairs, our team of experienced plumbers delivers prompt and efficient solutions. We prioritize quality workmanship, using the latest techniques and tools to address any plumbing issues promptly and effectively. Whether it’s fixing leaks, installing new fixtures, or conducting inspections, Bansi Enterprise’s plumbing service is dedicated to keeping our clients’ facilities running smoothly.'
        img={R03}
      />
      <LeftCardNoLink
        title='Sanitation'
        description='Our comprehensive approach includes thorough cleaning, disinfection, and waste management to ensure optimal sanitation standards. From regular cleaning schedules to specialized treatments, we tailor our services to meet the unique needs of each facility. With a focus on health and safety, Bansi Enterprise’s sanitation service provides peace of mind to our clients and promotes a healthier environment for all.'
        img={L03}
      />
      <RightCardNoLink
        title='Pest Control'
        description='We employ expert techniques and environmentally friendly methods to identify, control, and eliminate pests in commercial and residential spaces. Our trained technicians conduct thorough inspections and implement customized treatment plans to address specific pest infestations.
'
        img={R04}
      />
      <LeftCardNoLink
        title='Horticulture/landscaping'
        description='Bansi Enterprise’s horticulture and landscaping service is dedicated to creating and maintaining vibrant outdoor spaces that enhance the aesthetic appeal and functionality of our clients’ properties. Our team of skilled horticulturists and landscapers designs bespoke landscapes tailored to each client’s preferences and needs. From initial planning and installation to ongoing maintenance, we ensure that gardens, lawns, and green spaces thrive throughout the seasons.'
        img={L04}
      />
      <RightCardNoLink
        title='Water Purifier Maintenance'
        description='Our trained technicians conduct regular inspections, filter replacements, and cleaning procedures to maintain optimal functionality and water quality. We prioritize preventive maintenance to identify and address any potential issues before they escalate, ensuring uninterrupted access to clean and safe drinking water.'
        img={R05}
      />
      <LeftCardNoLink
        title='Carpentry Maintenance'
        description='Our skilled carpenters are proficient in repairing, restoring, and maintaining various wooden structures, furniture, and fixtures. From routine inspections to specialized treatments, we ensure that all carpentry elements remain sturdy, functional, and aesthetically pleasing.'
        img={L05}
      />
      <RightCardNoLink
        title='Firefighting'
        description='Our team of trained professionals conducts thorough inspections, installs and maintains firefighting equipment, and develops comprehensive fire safety plans tailored to each facility’s unique needs. With a proactive approach to fire prevention and mitigation, we help minimize the impact of fire emergencies and protect lives and property.'
        img={R06}
      />
      <LeftCardNoLink
        title='Lift Attendant'
        description='Our courteous and well-trained attendants ensure smooth and safe operation of the lifts, assisting passengers with entering and exiting, and providing guidance as needed. With a focus on customer service and safety, our lift attendants enhance the overall experience for building occupants while helping to prevent accidents and disruptions.'
        img={L06}
      />
      <RightCardNoLink
        title='Staffing Solutions'
        description='In the fast-paced world of banking and finance, having the right talent on board is crucial for success. Bansi Enterprise plays a key role in connecting financial institutions with qualified professionals to fill various positions. We provide skilled, semi skilled professionals to fulfil the ever-increasing demands of the banking industry.'
        img={R07}
      />
      <LeftCardNoLink
        title='Guest House Management'
        description='Guest house management: Under guest house management we provide Security Services to ensure the safety of guests and the property. Housekeeping: We provide housekeeping services to maintain the cleanliness and hygiene of guest rooms and common areas. Maintenance and Repairs: We also handle general maintenance and repairs within the guest house, ensuring everything is in good working order.'
        img={L07}
      />

      {/* <Contact /> */}
      <ScoreCard title='About People Places and Planet' data={scoreCardData2} />
      <Footer />
    </div>
  );
};

export default Banking;
