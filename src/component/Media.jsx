// import React from "react";

// const Media = () => {
//   const images = [
//     { name: "img1", image: "./m8.jpeg" },
//     { name: "img2", image: "./m2.jpg" },
//     { name: "img3", image: "./m3.png" },
//     { name: "img4", image: "./m4.png" },
//     { name: "img5", image: "./m5.png" },
//     { name: "img6", image: "./m6.png" },
//     { name: "img7", image: "./m7.jpg" },
//     { name: "img1", image: "./m1.jpg" },
//   ];

//   return (
//     <div className="md:p-10">
//       <div className="flex p-8 gap-2">
//         <span className="text-3xl">❤️</span>
//         <h1 className="text-3xl font-medium sevillana-regular text-orange-500">
//           Our Media
//         </h1>
//       </div>
//       <p className="text-2xl md:text-5xl font-medium prata-regular   md:ml-25">
//         Stories of Change and Impact
//       </p>
//       <div className="p-5">
//         <div className="md:p-20 grid grid-cols-1 shadow-lg sm:grid-cols-3 lg:grid-cols-4 gap-4">
//           {images.map((img, index) => (
//             <div key={index}>
//               <img
//                 src={img.image}
//                 alt={img.name}
//                 className="w-full h-auto object-cover rounded-2xl hover:scale-105 shadow-md"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Media;

import React from "react";

const Media = () => {
  const images = [
    { name: "img1", image: "./m8.jpeg" },
    { name: "img2", image: "./m2.jpg" },
    { name: "img3", image: "./m3.png" },
    { name: "img4", image: "./m4.png" },
    { name: "img5", image: "./m5.heic" },
    { name: "img6", image: "./m6.png" },
    { name: "img7", image: "./m7.jpg" },
    { name: "img1", image: "./m1.jpg" },
    { name: "img9", image: "./m9.heic" },
    { name: "img10", image: "./m10.heic" },
    { name: "img11", image: "./m11.heic" },
    { name: "img12", image: "./m12.heic" },
    { name: "img13", image: "./m13.heic" },
    { name: "img14", image: "./m14.heic" },
    { name: "img15", image: "./m15.heic" },
    { name: "img16", image: "./m16.jpg" },
  ];

  return (
    <div className="relative md:p-10">
      {/* Background Image with opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-12 -z-10 "
        style={{ backgroundImage: "url('./img5.jpg')" }}
      ></div>

      {/* Main Content */}
      <div className="flex p-8 gap-2">
        <span className="text-3xl">❤️</span>
        <h1 className="text-3xl font-medium sevillana-regular text-orange-500">
          Our Media
        </h1>
      </div>
      <p className="text-2xl md:text-5xl font-medium prata-regular md:ml-20 text-center md:text-left">
        Stories of Change and Impact
      </p>
       {/* <p className="text-2xl md:text-5xl font-medium prata-regular text-center md:text-left">
        Stories of Change and Impact
      </p> */}
      <div className="p-5">
        <div className="md:p-20 grid grid-cols-1  sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((img, index) => (
            <div key={index}>
              <img
                src={img.image}
                alt={img.name}
                className="w-full h-auto object-cover rounded-2xl hover:scale-105 shadow-md"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Media;
