import React from 'react';
import Navbar from './Navbar';

export default function Hero() {
  
  return (
    <div className="hero ">
      <Navbar />
      <section
        id="conWallet"
        className="relative overflow-hidden bg-accent5 border border-black/20"
      >
        <img
          className="max-xxl:hidden absolute left-0 top-8 blur-2xl opacity-70"
          src="/images/ellipse-1.png"
          alt=""
        />
        <img
          className="max-xl:hidden absolute right-0 bottom-16 blur-2xl opacity-70"
          src="/images/ellipse-2.png"
          alt=""
        />

        <img
          className="max-xl:hidden rocket absolute left-10 bottom-8 z-[2]"
          src="/images/rocket.png"
          alt=""
          style={{ transform: 'translate(-100px, 100px)' }}
        />
        <img
          className="max-md:hidden absolute right-5 top-12 animate-spin"
          src="/images/globe.png"
          alt=""
        />
        <img
          className="absolute left-[5%] bottom-[30%] animate-spin"
          src="/images/bitcoin.png"
          alt=""
        />
        <img
          className="absolute right-[12%] top-[40%] animate-spin"
          src="/images/coin-1.png"
          alt=""
        />
        <div className="max-lg:hidden w-[250px] h-[204px] xxl:w-[404px] xxl:h-[404px] absolute bottom-[-15%] blur-[85px] left-[-12%] bg-[rgba(240,185,11,0.50)]"></div>
        <div className="max-lg:hidden w-[250px] xxl:w-[350px] h-[250px] xxl:h-[350px] absolute top-[6%] blur-[85px] left-[-12%] bg-primary/50"></div>
        <div className="max-lg:hidden w-[250px] xxl:w-[350px] h-[250px] xxl:h-[350px] absolute bottom-[6%] blur-[85px] right-[-8%] bg-accent1/50"></div>

        <div className="container pt-[60px] pb-[70px] grid grid-cols-12 gap-6 items-center pl-1 lg:pl-36">
          <div className="col-span-12 lg:col-span-6 relative z-[2] max-lg:flex max-lg:flex-col max-lg:items-center max-lg:text-center">
            <h2 className="display-4 text-[2.25rem] font-bold  mb-4 fade_up_anim text-white text-center lg:text-left px-5 lg:px-0">
              Wallet Issues?{' '}
              <span className="text-primary display-4 text-[2.25rem] font-bold underline">
                We've Got You
              </span>{' '}
              <span className="text-secondary display-4 text-[2.25rem] font-bold underline text-[#c6990b]">
                Covered!
              </span>
            </h2>
            <p
              className="mb-8 xl:mb-10 max-w-md lg:text-sm fade_up_anim text-white font-medium"
              data-delay="0.2"
            >
              From Wallet Recovery to Blockchain Troubleshooting, We Provide
              Reliable Solutions for All Your Crypto Wallet Needs.
            </p>
            <div
              className="flex gap-6 fade_up_anim  w-fit border-[1px] border-[rgb(58,150,255)] rounded-[50px]"
              data-delay="0.4"
            >
              <button
                id="ConnectNow"
                onClick={() => {
                  /* open modal logic */
                }}
                className="btn-primary bg-[rgb(58,150,255)] m-[2px] text-white py-2 px-3 rounded-[50px] hover:bg-transparent hover:text-white transition-all duration-300 ease-in-out"
              >
                Connect Wallet
              </button>
            </div>
          </div>

          <div
            className="col-span-12 lg:col-span-5 lg:col-start-8 relative max-lg:flex max-lg:justify-center fade_up_anim"
            data-delay=".5"
          >
            <img src="/images/hero.png" className="relative z-[3]" alt="" />
            <div className="w-[280px] h-[280px] md:w-[350px] md:h-[350px] absolute top-[6%] blur-[85px] left-0 bg-primary/50"></div>
          </div>

          <div className="col-span-12 gap-6 grid grid-cols-12 xl:divide-x divide-[rgba(255,255,255,0.8)] pt-120 relative z-[2]">
            <div className="col-span-6 md:col-span-3">
              <h3 className="h3 mb-3 text-lg font-bold text-white">
                <span
                  id="country"
                  dangerouslySetInnerHTML={{ __html: '200+' }}
                />
              </h3>
              <p className="text-[rgba(255,255,255,0.8)] lg:text-base">
                Countries Covered
              </p>
            </div>
            <div className="col-span-6 md:col-span-3 xl:pl-8">
              <h3 className="h3 mb-3 text-lg text-white">
                <span
                  id="investor"
                  dangerouslySetInnerHTML={{ __html: '30+' }}
                />
              </h3>
              <p className="text-[rgba(255,255,255,0.8)] lg:text-base">
                Wallets Types
              </p>
            </div>
            <div className="col-span-6 md:col-span-3 xl:pl-8">
              <h3 className="h3 mb-3 text-lg text-white">
                <span id="coin" dangerouslySetInnerHTML={{ __html: '700+' }} />
              </h3>
              <p className="text-[rgba(255,255,255,0.8)] lg:text-base">
                Cryptocurrencies
              </p>
            </div>
            <div className="col-span-6 md:col-span-3 xl:pl-8">
              <h3 className="h3 mb-3 text-lg text-white">
                $
                <span
                  id="volume"
                  dangerouslySetInnerHTML={{ __html: '1.36' }}
                />{' '}
                Billion
              </h3>
              <p className="text-[rgba(255,255,255,0.8)] lg:text-base">
                Recovered Funds!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
