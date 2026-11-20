import React from 'react';

import Contact from '@/components/compnent/Contact/ContactPage';
import Footer from '@/components/compnent/Footer/Footer';
import imgLand from '@/assets/Sectors/AviationServices/01.webp';
import L01 from '@/assets/Sectors/HealthCareAndLifeServices/left/L01.webp';
import L02 from '@/assets/Sectors/HealthCareAndLifeServices/left/L02.webp';
import L03 from '@/assets/Sectors/HealthCareAndLifeServices/left/L03.webp';
import L04 from '@/assets/Sectors/HealthCareAndLifeServices/left/L04.webp';
import L05 from '@/assets/Sectors/HealthCareAndLifeServices/left/L05.webp';
import LeftCardNoLink from '@/components/compnent/dynamicCards/LeftCard/LeftCardNoLink';
import R01 from '@/assets/Sectors/HealthCareAndLifeServices/right/R01.webp';
import R02 from '@/assets/Sectors/HealthCareAndLifeServices/right/R02.webp';
import R03 from '@/assets/Sectors/HealthCareAndLifeServices/right/R03.webp';
import R04 from '@/assets/Sectors/HealthCareAndLifeServices/right/R04.webp';
import R05 from '@/assets/Sectors/HealthCareAndLifeServices/right/R05.webp';
import R06 from '@/assets/Sectors/HealthCareAndLifeServices/right/R06.webp';
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

const HealthCareAndLifeServices = () => {
  return (
    <div className='overflow-x-hidden'>
      <SectorHero
        img={require('@/assets/Sectors/02Health.webp').default}
        title='Healthcare and Life Services'
        description='As a frontrunner in facility management, Bansi Enterprise extends tailored services to healthcare and life services companies, ensuring optimal operational efficiency and creating conducive environments for healing and well-being.'
      />
      <RightCardNoLink
        title='Elevating facility management for Healthcare and Life Services companies'
        description='Our services include rigorous cleaning protocols, waste management, and infection control to maintain the highest hygiene standards. We prioritize a patient-centric environment with well-maintained spaces, comply with regulatory standards, implement security measures, optimize operations, promote sustainability, and integrate technology for efficient facility management in the healthcare sector.'
        img={R01}
      />
      {/* <ScoreCard
        title="Our Expertise"
        data={scoreCardData1}
        ClassCustom="mt-20"
      /> */}
      <LeftCardNoLink
        title='ICU and Isolation Ward Maintenance'
        description='Maintaining a clean and functioning ICU and isolation ward is crucial for both patient well-being and staff safety. These environments require special attention due to the heightened risk of infection and the presence of vulnerable patients. We undertake Cleaning and Disinfection services and undertake regular staff training to cater to these specialized services.'
        img={L01}
      />
      <RightCardNoLink
        title='Disinfection of Medical Equipment'
        description='At Bansi Enterprise India, we understand the critical role medical equipment plays in patient care. We are committed to providing healthcare facilities with the knowledge and resources necessary to ensure proper disinfection practices, ultimately safeguarding patients and staff from the risk of healthcare-associated infections (HAIs).'
        img={R02}
      />
      <LeftCardNoLink
        title='Personalized Patient Support and Nursing Assistance'
        description='We understand that every patient’s journey to recovery is unique. That’s why we offer a comprehensive range of personalized patient support and nursing assistance services designed to meet your individual needs and preferences.'
        img={L02}
      />
      <RightCardNoLink
        title='Regulatory Compliance'
        description='Bansi Enterprise ensures that healthcare and wellness facilities meet all necessary standards and regulations, providing peace of mind to both facility managers and patients alike.


        Ensuring healthcare and wellness facilities meet necessary standards and regulations.We comply with ICP-Infection control protocols and Service Delivery Framework as per Accreditations (NABH/Kayakalp)'
        img={R03}
      />
      <LeftCardNoLink
        title='Security and Safety Measures'
        description='Our trained security personnel contribute to a secure environment, ensuring the well-being of patients, staff, and visitors.

        Advanced security measures for physical assets and sensitive patient information.
        Trained security personnel contributing to a secure environment.
        Ensuring the well-being of patients, staff, and visitors.'
        img={L03}
      />
      <RightCardNoLink
        title='Efficient Operations Management'
        description='Bansi Enterprise optimizes operations through streamlined processes, ensuring that medical professionals can focus on patient care while we handle facility-related tasks, logistics, and support services.

        Operational efficiency through streamlined processes.
        Handling facility-related tasks, logistics, and support services.'
        img={R04}
      />
      <LeftCardNoLink
        title='Sustainable Practices'
        description='From energy-efficient solutions to waste reduction strategies, we contribute to creating environmentally responsible and resource-efficient healthcare environments.

        Integration of sustainable practices into healthcare facility management.
        Implementation of energy-efficient solutions and waste reduction strategies.
        Contribution to environmentally responsible and resource-efficient healthcare environments.'
        img={L04}
      />
      <RightCardNoLink
        title='Technology Integration'
        description='Bansi Enterprise leverages innovations like IoT and digital monitoring to enhance facility management. This ensures proactive maintenance, efficient resource allocation, and an overall technologically advanced healthcare environment.

        Leveraging innovations like IoT and digital monitoring.
        Enhancing facility management through proactive maintenance and efficient resource allocation.
        Ensuring a technologically advanced healthcare environment.'
        img={R05}
      />
      <LeftCardNoLink
        title='Bio-Medical Waste Disposal'
        description='we understand the critical importance of safe and compliant bio-medical waste disposal for protecting public health, the environment, and healthcare workers. We offer a comprehensive range of solutions to help healthcare facilities manage their bio-medical waste effectively.'
        img={L05}
      />
      <RightCardNoLink
        title='Staffing Solutions'
        description='Staffing solutions play a vital role in addressing staffing shortages and ensuring healthcare and life science organizations have the qualified personnel they need to deliver quality care and advance research initiatives. We provide Doctors, Nurses and bio-medical technicians to cater to the increasing demands of healthcare institutions.'
        img={R06}
      />
      {/* <Contact /> */}
      <ScoreCard title='About People Places and Planet' data={scoreCardData2} />
      <Footer />
    </div>
  );
};

export default HealthCareAndLifeServices;
