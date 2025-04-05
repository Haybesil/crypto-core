import React, { useState, useEffect } from 'react';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hideLoader = () => {
      setTimeout(() => {
        setLoading(false);
      }, 6000); 
    };

    document.addEventListener('DOMContentLoaded', hideLoader);

    return () => {
      document.removeEventListener('DOMContentLoaded', hideLoader);
    };
  }, []);

  if (!loading) {
    return null; 
  }

  return (
    <div className="preloader-overlay">
      <div className="coin"></div>
    </div>
  );
};

export default Preloader;
