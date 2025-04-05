import React from 'react';

export default function Section5() {
  return (
    <div>
      <section className="bg-accent5 relative overflow-hidden">
        <div className="max-lg:hidden w-[250px] xxl:w-[350px] h-[250px] xxl:h-[350px] absolute bottom-[-6%] blur-[85px] left-[-12%] bg-primary/50"></div>
        <div className="max-lg:hidden w-[250px] xxl:w-[350px] h-[250px] xxl:h-[350px] absolute top-[-6%] blur-[85px] right-[-8%] bg-accent1/50"></div>
        <img
          className="max-md:hidden absolute right-5 top-12 animate-spin"
          src="/images/globe.png"
          alt=""
        />
        <img
          className="max-lg:hidden absolute left-[5%] bottom-[6%] blur-2xl opacity-70 animate-bounce"
          src="/images/try-el-1.png"
          alt=""
        />
        <img
          className="max-lg:hidden absolute right-[5%] bottom-[4%] blur-2xl opacity-70 animate-spin"
          src="/images/try-el-2.png"
          alt=""
        />
        <div className="container pt-[70px] pb-[70px] grid grid-cols-12 gap-6 xl:gap-10 items-center relative z-[2] pl-6 lg:pl-36">
          <div className="col-span-12 lg:col-span-5">
            <img
              src="/images/try.png"
              className="fade_up_anim"
              alt=""
              style={{ transform: 'translate(0px, 0px)', opacity: 1 }}
            />
          </div>
          <div className="col-span-12 lg:col-span-7">
            <h2
              data-delay=".05"
              className="fade_up_anim mb-4 lg:text-[40px] font-bold text-neutral1"
              style={{ transform: 'translate(0px, 0px)', opacity: 1 }}
            >
              Unlocking <span className="text-primary h2 underline">the</span>{' '}
              Future
            </h2>
            <h3
              data-delay=".15"
              className="fade_up_anim lg:text-[18px] font-semibold text-neutral1 mb-8 xl:mb-10"
              style={{ transform: 'translate(0px, 0px)', opacity: 1 }}
            >
              We are your trusted partner in crypto wealth restoration and
              wallet recovery services, offering an open and decentralized
              protocol designed to resolve various wallet issues on a secure
              server. This is not an app but a protocol that facilitates remote
              resolution between all noncustodial wallets by connecting you to
              the appropriate wallet representatives, ensuring effective
              communication and issue rectification.
            </h3>
          </div>
        </div>
      </section>
    </div>
  );
}
