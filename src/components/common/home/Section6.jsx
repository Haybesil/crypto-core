import React from 'react';

export default function Section6() {
  return (
    <div>
      <section className="bg-accent5 relative overflow-hidden">
        <div className="max-lg:hidden w-[250px] h-[250px] absolute bottom-[-6%] blur-[85px] left-[-9%] bg-primary/50"></div>
        <div className="max-lg:hidden w-[250px] h-[250px] absolute top-[-6%] blur-[85px] right-[-8%] bg-primary/50"></div>

        <div className="pb-[70px] pt-[70px] relative z-[2]">
          <h2
            className="text-center mb-10 xl:mb-[60px] fade_up_anim lg:text-[40px] text-neutral1 font-bold"
            style={{ transform: 'translate(0px, 0px)', opacity: 1 }}
          >
            Trusted by
          </h2>
          <marquee behavior="" direction="left">
            <div className="swiper brand-slider-one fade_up_ani">
              <div
                className="swiper-wrapper flex ease-linear"
                style={{
                  transitionDuration: '6000ms',
                  transform: 'translate3d(-1084.57px, 0px, 0px)',
                }}
              >
                <div
                  className="swiper-slide flex items-center h-20 justify-center"
                  style={{ width: '236.143px', marginRight: '35px' }}
                >
                  <img src="/images/item-1.png" alt="" />
                </div>
                <div
                  className="swiper-slide flex items-center h-20 justify-center"
                  style={{ width: '236.143px', marginRight: '35px' }}
                >
                  <img src="/images/item-2.png" alt="" />
                </div>
                <div
                  className="swiper-slide flex items-center h-20 justify-center"
                  style={{ width: '236.143px', marginRight: '35px' }}
                >
                  <img src="/images/item-3.png" alt="" />
                </div>
                <div
                  className="swiper-slide flex items-center h-20 justify-center"
                  style={{ width: '236.143px', marginRight: '35px' }}
                >
                  <img src="/images/item-4.png" alt="" />
                </div>
                <div
                  className="swiper-slide flex items-center h-20 justify-center"
                  style={{ width: '236.143px', marginRight: '35px' }}
                >
                  <img src="/images/item-5.png" alt="" />
                </div>
                <div
                  className="swiper-slide flex items-center h-20 justify-center"
                  style={{ width: '236.143px', marginRight: '35px' }}
                >
                  <img src="/images/item-6.png" alt="" />
                </div>
                <div
                  className="swiper-slide flex items-center h-20 justify-center"
                  style={{ width: '236.143px', marginRight: '35px' }}
                >
                  <img src="/images/item-7.png" alt="" />
                </div>
                <div
                  className="swiper-slide flex items-center h-20 justify-center"
                  style={{ width: '236.143px', marginRight: '35px' }}
                >
                  <img src="/images/item-8.png" alt="" />
                </div>
                <div
                  className="swiper-slide flex items-center h-20 justify-center"
                  style={{ width: '236.143px', marginRight: '35px' }}
                >
                  <img src="/images/item-9.png" alt="" />
                </div>
                <div
                  className="swiper-slide flex items-center h-20 justify-center"
                  style={{ width: '236.143px', marginRight: '35px' }}
                >
                  <img src="/images/item-10.png" alt="" />
                </div>
              </div>
            </div>
          </marquee>
          <marquee behavior="" direction="right">
            <div className="swiper brand-slider-two fade_up_anim">
              <div
                className="swiper-wrapper flex ease-linear"
                style={{
                  transitionDuration: '6000ms',
                  transform: 'translate3d(-813.429px, 0px, 0px)',
                }}
              >
                <div
                  className="swiper-slide flex items-center h-20 justify-center"
                  style={{ width: '236.143px', marginRight: '35px' }}
                >
                  <img src="/images/item-11.png" alt="" />
                </div>
                <div
                  className="swiper-slide flex items-center h-20 justify-center"
                  style={{ width: '236.143px', marginRight: '35px' }}
                >
                  <img src="/images/item-12.png" alt="" />
                </div>
                <div
                  className="swiper-slide flex items-center h-20 justify-center"
                  style={{ width: '236.143px', marginRight: '35px' }}
                >
                  <img src="/images/item-13.png" alt="" />
                </div>
                <div
                  className="swiper-slide flex items-center h-20 justify-center"
                  style={{ width: '236.143px', marginRight: '35px' }}
                >
                  <img src="/images/item-4.png" alt="" />
                </div>
                <div
                  className="swiper-slide flex items-center h-20 justify-center"
                  style={{ width: '236.143px', marginRight: '35px' }}
                >
                  <img src="/images/item-7.png" alt="" />
                </div>
                <div
                  className="swiper-slide flex items-center h-20 justify-center"
                  style={{ width: '236.143px', marginRight: '35px' }}
                >
                  <img src="/images/item-5.png" alt="" />
                </div>
                <div
                  className="swiper-slide flex items-center h-20 justify-center"
                  style={{ width: '236.143px', marginRight: '35px' }}
                >
                  <img src="/images/item-9.png" alt="" />
                </div>
                <div
                  className="swiper-slide flex items-center h-20 justify-center"
                  style={{ width: '236.143px', marginRight: '35px' }}
                >
                  <img src="/images/item-8.png" alt="" />
                </div>
                <div
                  className="swiper-slide flex items-center h-20 justify-center"
                  style={{ width: '236.143px', marginRight: '35px' }}
                >
                  <img src="/images/item-7.png" alt="" />
                </div>
                <div
                  className="swiper-slide flex items-center h-20 justify-center"
                  style={{ width: '236.143px', marginRight: '35px' }}
                >
                  <img src="/images/item-10.png" alt="" />
                </div>
              </div>
            </div>
          </marquee>
        </div>
      </section>
    </div>
  );
}
