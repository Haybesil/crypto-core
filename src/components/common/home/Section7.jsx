import React from 'react';

export default function Section7() {
  return (
    <div>
      <section className="bg-accent2 px-5 lg:px-0">
        <div
          className="container pt-120 pb-120"
          style={{
            height: '500px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <video autoPlay muted loop style={{ display: 'block' }}>
            <source src="/images/connect-animation.mp4" type="video/mp4" />
          </video>
        </div>
      </section>
    </div>
  );
}
