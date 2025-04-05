import React, { useState, useEffect } from 'react';
import Hero from '../components/common/home/Hero';
import Section2 from '../components/common/home/Section2';
import Section3 from '../components/common/home/Section3';
import Section4 from '../components/common/home/Section4';
import Section5 from '../components/common/home/Section5';
import FAQSection from '../components/common/home/FaqSection';
import Section6 from '../components/common/home/Section6';
import Section7 from '../components/common/home/Section7';
import Footer from '../components/common/home/Footer';
import Preloader from '../components/common/base/Preloader';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 6000); 
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <div className="!mx-0 !px-0">
          <Hero />
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
          <FAQSection />
          <Section6 />
          <Section7 />
          <Footer />
        </div>
      )}
    </>
  );
}
