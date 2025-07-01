import React from "react";
// import volunteerImage from "./8ad8a0ad-df06-442a-b8ac-87ea02147435.png";

const VolunteerPage = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-6 py-10 md:m-5"
    //   style={{ backgroundImage: `url('./img5.jpg')` }}
    >
      <div className="bg-white bg-opacity-80 rounded-3xl shadow-lg  max-w-7xl w-full flex flex-col md:flex-row overflow-hidden">
        {/* Left Section - Image */}
        <div className="md:w-1/2 p-4 flex justify-center items-center">
          <div className="relative w-full max-w-md">
            {/* Orange Border Over Image */}
            <div className="absolute inset-0 border-[3px] border-orange-500 rounded-2xl pointer-events-none m-[10px] z-10"></div>

            {/* Image */}
            <img
              src="./bg-1.jpg"
              alt="Volunteers"
              className="rounded-2xl w-full h-auto object-cover relative z-0"
            />
          </div>
        </div>

        {/* Right Section - Content */}
        <div className="md:w-1/2 p-8">
          <p className="text-3xl text-orange-600 font-medium mb-2 sevillana-regular">❤️ Join us</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 prata-regular">
            Why We Need You Become a Volunteer
          </h2>
          <p className="text-gray-600 mb-6">
            We help companies develop powerful corporate social responsibility,
            grantmaking, and employee engagement strategies.
          </p>

          {/* Box 1 - Highlight */}
          <div className="border border-gray-300 rounded-xl p-4 mb-4 bg-white shadow-sm">
            <p className="text-orange-600 font-semibold mb-2">
              Recognition and Fulfillment
            </p>
            <p className="text-gray-600 text-sm">
              Aonsectetur adipiscing elit Aenean scelerisque augue vitae consequat. Jusque
              eget congue velit in cursus leo sodales the turpis euismod quis sapien euismod
              quis sapien. The E-learning is suitable for students, professionals, and anyone
              interested.
            </p>
          </div>

          {/* Box 2 - Button */}
          <div className="border border-gray-300 rounded-xl p-4 mb-4 flex justify-between items-center hover:bg-gray-100 cursor-pointer transition">
            <span className="text-gray-700 font-medium">Why Join Us as a Volunteer?</span>
            <span className="text-xl">→</span>
          </div>

          {/* Box 3 - Button */}
          <div className="border border-gray-300 rounded-xl p-4 flex justify-between items-center hover:bg-gray-100 cursor-pointer transition">
            <span className="text-gray-700 font-medium">Be Part of a Community</span>
            <span className="text-xl">→</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerPage;
