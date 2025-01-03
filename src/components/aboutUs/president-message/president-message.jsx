'use client';
import React from 'react';
import { motion } from 'framer-motion';

const PresidentMessage = () => {
  return (
    <div className="w-full py-10 px-5 bg-white">
      {/* Spacer for Navbar */}
      <div className="h-20"></div>

      {/* Section Title */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center text-[#193540] mb-8 md:mb-12 underline uppercase "
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        President's Message
      </motion.h1>

      {/* Content Section */}
      <div className="flex flex-col items-center gap-8 md:gap-12">
        {/* Image and Name Section */}
        <motion.div
          className="flex flex-col md:flex-row items-center gap-6 md:gap-12 w-full justify-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Image Section */}
          <div className="flex-shrink-0">
            <img
              src="/president.png"
              alt="President Aslam Thakur"
              className="w-40 h-40 md:w-64 md:h-64 object-cover border-transparent shadow-xl"
            />
          </div>

          {/* Name Section */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-4xl font-extrabold text-[#193540] mb-2">
              Aslam Thakur
            </h2>
            <p className="text-lg md:text-xl font-semibold text-gray-600">
              President, Kokan Welfare Society, Kuwait
            </p>
          </div>
        </motion.div>

        {/* Assalamu Alaikum Section */}
        <motion.div
          className="text-center w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-xl md:text-2xl font-bold text-[#193540] italic mb-4 md:mb-6">
            Assalamu Alaikum
          </p>
        </motion.div>

        {/* Speech Section */}
        <motion.div
          className="w-full bg-gradient-to-r from-blue-50 via-white to-blue-50 p-6 md:p-8 rounded-lg shadow-2xl border border-gray-200"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-gray-700 leading-relaxed font-serif mb-4 md:mb-6">
            As president of the Kokan Welfare Society Kuwait, I would like to extend my sincerest gratitude to our members and supporters for their ongoing dedication to our mission. Over the last eleven years, Kokan Welfare Society, Kuwait (KWS) has become the sole representative of the Kokani community in Kuwait and I am proud to be a part of it. KWS is committed to improving the lives of those in need, and we could not do it without the generosity and support of our community.
          </p>
          <p className="text-gray-700 leading-relaxed font-serif mb-4 md:mb-6">
            Surely, due to the Kokani people’s trust in our society, KWS has become representative of Kokani people’s aspirations, which provides a common platform for all to come together for the betterment of the Society.
          </p>
          <p className="text-gray-700 leading-relaxed font-serif mb-4 md:mb-6">
            In recent months, we have faced unprecedented challenges due to the ongoing COVID-19 pandemic. Despite these difficulties, our team has worked tirelessly to ensure that those who rely on our services continue to receive the support they need. As we look to the future, we remain committed to finding new and innovative ways to serve our community. We are continuing to adapt our programs and services to meet the ever-changing needs of those we serve, and we are always looking for new opportunities to make a positive impact.
          </p>
          <p className="text-gray-700 leading-relaxed font-serif mb-4 md:mb-6">
            Further, we are aiming to set an example of inclusive, humanitarian social services for the upliftment of our community. We also believe that empowering women will bring better changes for future generations, creating a positive impact and making conscious efforts for the same.
          </p>
          <p className="text-gray-700 leading-relaxed font-serif mb-4 md:mb-6">
            I would also like to take this opportunity to remind everyone that our organization is always in need of volunteers and support. Every little bit helps, and we are deeply grateful for any contribution that our supporters can make.
          </p>
          <p className="text-gray-700 leading-relaxed font-serif mb-4 md:mb-6">
            On behalf of the Office Bearers and Executive Committee, we thank you again for your continued support, and look forward to working together to make a brighter future for all.
          </p>
          <p className="text-gray-700 leading-relaxed font-serif">
            May Allah bless us all with prosperity, good health, and a peaceful life.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default PresidentMessage;
