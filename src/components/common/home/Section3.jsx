import React from 'react';

export default function Section3() {
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
          className="max-lg:hidden absolute left-[5%] top-[46%] animate-spin"
          src="/images/bitcoin-3.png"
          alt=""
        />
        <img
          className="max-xxl:hidden absolute left-0 top-8 blur-2xl opacity-70"
          src="/images/element-1.png"
          alt=""
        />

        <div className="container pb-[70px] pt-[70px] relative z-[2] pl-5 lg:pl-36">
          <div className="mb-10 xl:mb-[60px] flex flex-wrap justify-between items-center gap-5">
            <div className="max-w-lg">
              <h2 className="mb-2 fade_up_anim text-neutral1 text-[40px]">
                Make Your{' '}
                <span className="text-primary h2 underline">Selection</span>{' '}
                Below:
              </h2>
              <p
                data-delay=".25"
                className="lg:text-base text-neutral4 fade_up_anim"
              >
                Choose the Issue Affecting Your Wallet for Quick Assistance!
              </p>
            </div>
          </div>

          <div className="row grid grid-cols-12 gap-6">
            {[
              {
                title: 'Migration Issues',
                desc: 'Click here for migration related issues',
                icon: 'stm-chart-refresh',
              },
              {
                title: 'Validate Wallet',
                desc: 'Click here for wallet validation related issues',
                icon: 'stm-check',
              },
              {
                title: 'Assets Recovery',
                desc: 'Click here for assets recovery related issues',
                icon: 'stm-chart-refresh',
              },
              {
                title: 'Rectification',
                desc: 'Click here for rectification related issues',
                icon: 'stm-building6',
              },
              {
                title: 'Gas Fees',
                desc: 'Click here for Gas Fees related issues',
                icon: 'stm-ia_clock',
              },
              {
                title: 'Claim Reward',
                desc: 'Click here for Claim Reward issues',
                icon: 'stm-oil',
              },
              {
                title: 'Deposits & Withdrawals',
                desc: 'Click here for Deposits & Withdrawals issues',
                icon: 'stm-loans_mobile',
              },
              {
                title: 'Slippage Error',
                desc: 'Click here for Slippage Error related issues',
                icon: 'stm-marketplace',
              },
              {
                title: 'Transaction Error',
                desc: 'Click here for Transaction Error related issues',
                icon: 'stm-stm14_calc',
              },
              {
                title: 'Cross Chain Transfer',
                desc: 'Click here for Cross Chain Transfer related issues',
                icon: 'stm-btc_public',
              },
              {
                title: 'Staking Issues',
                desc: 'Click here for Staking Issues related issues',
                icon: 'stm-ia_clock',
              },
              {
                title: 'Swap/Exchange',
                desc: 'Click here for Swap/Exchange related issues',
                icon: 'stm-marketplace',
              },
              {
                title: 'Connect to Dappst',
                desc: 'Click here for Connect to Dapps related issues',
                icon: 'stm-stats',
              },
              {
                title: 'Login Issues',
                desc: 'Click here for Login related issues',
                icon: 'stm-crypto_secured',
              },
              {
                title: 'Claim Airdrop',
                desc: 'Click here for Claim Airdrop related issues',
                icon: 'stm-crypto_secured',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="col-span-12 md:col-span-4 p-4"
               
              >
                <div className="features-item">
                  <div className="features-content">
                    <h2 className="title">
                      <button
                        type="button"
                       
                        className="text-left"
                      >
                        {item.title}
                      </button>
                    </h2>
                    <p style={{ fontSize: '12px' }}>{item.desc}</p>
                  </div>
                  <div className="features-img">
                    <button
                      type="button"
                    >
                      <i
                        className={item.icon}
                        style={{ fontSize: '72px', color: 'lightblue' }}
                      ></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
