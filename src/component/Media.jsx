import React from 'react';

const Media = () => {
  const images = [
    { name: "img1", image: './m8.jpeg' },
    { name: "img2", image: './m2.jpg' },
    { name: "img3", image: './m3.png' },
    { name: "img4", image: './m4.png' },
    { name: "img5", image: './m5.png' },
    { name: "img6", image: './m6.png' },
    { name: "img7", image: './m7.jpg' },
     { name: "img1", image: './m1.jpg' },
  ];

  return (
  <div className='p-10'>
    <div className='flex p-8 gap-2'>
      <span className='text-3xl'>❤️</span>
      <h1 className='text-3xl font-medium sevillana-regular text-orange-500'>Our Media</h1>
    </div>
    <p className='text-5xl font-medium prata-regular ml-25'>Stories of Change and Impact</p>
    <div className='p-5'>
        <div className="p-20 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((img, index) => (
        <div key={index}>
          <img src={img.image} alt={img.name} className="w-full h-auto object-cover rounded-2xl hover:scale-105" />
        </div>
      ))}
    </div>
    </div>
  </div>
  );
};

export default Media;
