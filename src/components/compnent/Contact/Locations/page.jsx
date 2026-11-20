import React from 'react';

const Locations = ({ MapLink, OfficeName, Address, Email, Phone }) => {
  return (
    <section className='bg-gray-100'>
      <div className='max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-14 lg:px-8'>
        <div className=''>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='rounded-lg overflow-hidden md:col-span-2'>
              <iframe
                src={MapLink}
                width='100%'
                height='300'
                style={{ border: 0 }}
                allowFullScreen
                loading='lazy'
              ></iframe>
            </div>
            <div>
              <div className='bg-white p-6 h-full flex flex-col items-center justify-center rounded-md shadow-xl shadow-gray-300 border border-black gap-4'>
                <div className='bg-transparent '>
                  <p className='text-xl hover:text-[#0b2f6a] hover:font-bold bg-transparent ease-linear duration-300'>
                    {OfficeName}
                  </p>
                </div>
                <div className='bg-transparent w-2/3 ml-6 flex flex-col gap-2'>
                  <p className='text-gray-600   bg-transparent'>{Address}</p>
                  <p className='text-gray-600   bg-transparent'>{Phone}</p>
                  <p className='text-gray-600   bg-transparent'>{Email}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;
