import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

const OurTeam = () => {
  
  const teamData = [
    { name: "Rashmi", role: "CEO", image: "/img4.png" },
    { name: "Pallavi", role: "Senior", image: "/img3.jpg" },
    { name: "Ekta Jain", role: "HR", image: "/img1.jpg" },
  ];

  const iconVariants = {
    initial: { opacity: 0, scale: 0.5, y: 20 },
    hover: (i) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.4, type: "spring" },
    }),
  };

  return (
    <div
      className="sm:m-10 m-4 rounded-2xl relative overflow-hidden bg-none sm:bg-[url('./img7.png')] bg-cover bg-no-repeat bg-center"
      // style={{
      //   backgroundImage: "url('./img7.png')" ,
      //   backgroundSize: "cover",
      //   backgroundRepeat:"no-repeat",
      // }}
    >
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-between"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3, ease: "easeIn" }}
      >
        <div className="p-20 gap-6 flex flex-col ml-15">
          <h1 className="text-2xl font-serif text-orange-500 sevillana-regular">
            <span>❤️</span> Our Team
          </h1>
          <p className="text-black font-bold text-4xl md:w-2/3 prata-regular">
            Skilled Legal Professionals Dedicated to You
          </p>
        </div>

        <div className="md:mr-65">
          <button className="bg-orange-500 w-35 h-13 rounded-3xl text-white text-lg font-bold hover:border-1 border-orange-400 hover:bg-white hover:text-orange-400 prata-regular">
            Join With Us
          </button>
        </div>
      </motion.div>
      <div className="p-6 flex gap-20 items-start justify-center flex-wrap">
        {teamData.map((member, index) => (
          <motion.div
            whileHover="hover"
            initial="initial"
            key={index}
            className={`
              group bg-gray-200 w-[300px] h-[400px] flex flex-col rounded-2xl shadow-md shadow-gray-700  overflow-hidden relative
              ${index === 1 ? "lg:-mt-15" : ""}
              `}
          >
            {/* Image Container with icons overlay */}
            <div className="relative w-full h-[300px]">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full"
              />
              {/* Icons appear on hover */}
              {/* <div className="absolute inset-0 bg-transparent bg-opacity-50 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-50">
              <a
                href="#"
                className="text-white border-1 border-white hover:border-none hover:text-white  hover:bg-orange-500 rounded-full w-10 h-10 text-center p-2"
              >
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
              <a
                href="#"
                className="text-white border-1 border-white hover:border-none hover:text-white  hover:bg-orange-500 rounded-full w-10 h-10 text-center p-2"
              >
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </a>
              <a
                href="#"
                className="text-white border-1 border-white hover:border-none hover:text-white  hover:bg-orange-500 rounded-full w-10 h-10 text-center p-2"
              >
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
            </div> */}

              <div className="absolute inset-0 bg-transparent bg-opacity-50 flex items-center justify-center gap-4 mt-50">
                {[faInstagram, faFacebook, faTwitter].map((icon, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    className="text-white border-1 border-white hover:border-none hover:text-white  hover:bg-orange-500 rounded-full w-10 h-10 text-center p-2"
                    custom={i}
                    variants={iconVariants}
                  >
                    <FontAwesomeIcon icon={icon} size="lg" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Name & Role Section */}
            <div className="text-center flex-1 flex flex-col justify-center items-center p-4 text-gray-700 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
              <h1 className="text-xl font-serif">{member.name}</h1>
              <p className="text-lg font-serif">{member.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
