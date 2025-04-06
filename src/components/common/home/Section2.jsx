import React from 'react';

export default function Section2() {
  return (
    <div>
      <section className="bg-accent5 relative overflow-x-hidden">
        <div className="max-lg:hidden w-[250px] h-[300px] absolute bottom-0 blur-[85px] left-[-12%] bg-accent1/50"></div>
        <div className="max-lg:hidden w-[250px] h-[300px] absolute top-[-6%] blur-[85px] right-[-8%] bg-primary/50"></div>
        <img
          className="max-md:hidden absolute left-0 bottom-3"
          src="/images/how-start-el-1.png"
          alt=""
        />
        <img
          className="max-lg:hidden absolute right-[5%] animate-skew top-[4%]"
          src="/images/how-start-el-2.png"
          alt=""
        />

        <div className="container pt-[70px] pb-[70px]">
          <h2 className="mb-10 xl:mb-[60px] text-center fade-up-anim text-white text-[26px] lg:text-3xl">
            How To Get{' '}
            <span className="h2 text-primary font-bold  underline">Started</span>
          </h2>

          <div className="grid grid-cols-12 gap-4 xl:gap-6 z-[2] relative text-center text-neutral1/80 after:w-full after:h-full after:xl:h-[90%] after:absolute after:left-0 after:rounded-xl after:top-0 after:xl:top-[5%] after:bg-accent6 after:z-[-1] ml-2 lg:ml-28">
            {/* Step 01 */}
            <div
              data-delay="0.05"
              className="fade_up_anim col-span-12 md:col-span-6 xl:col-span-3 p-4 lg:p-6 xxl:px-8 xl:py-10 xxl:py-[60px] rounded-xl bg-primary flex flex-col items-center"
              style={{ transform: 'translate(0px, 0px)', opacity: 1 }}
            >
              <div className="size-[60px] flex items-center justify-center text-primary text-2xl f-center rounded-full bg-neutral1 mb-4 xl:mb-6">
                <i className="ti ti-user-plus"></i>
              </div>
              <h4 className="mb-4 xl:mb-6 font-semibold text-[18px]">Connect Wallet</h4>
              <p className="mb-7 xl:mb-10 lg:text-lg text-neutral4">
                Ensure your wallet is connected to our platform to initiate
                troubleshooting.
              </p>
              <div
                 className="flex gap-6 fade_up_anim  w-fit border-[1px] border-neutral1 rounded-[50px]"
                data-delay="0.4"
                style={{ transform: 'translate(0px, 0px)', opacity: 1 }}
              >
                <button
                  onClick={() => openModal_()}
                   className="btn-primary bg-neutral1 m-[2px] text-primary py-2 px-3 rounded-[50px] hover:bg-transparent hover:text-white transition-all duration-300 ease-in-out"
                >
                  Connect Wallet
                </button>
              </div>
            </div>

            {/* Step 02 */}
            <div
              data-delay="0.15"
              className="fade_up_anim col-span-12 md:col-span-6 xl:col-span-3 p-4 lg:p-6 xxl:px-8 xl:py-10 xxl:py-[60px] rounded-xl flex flex-col items-center"
              style={{ transform: 'translate(0px, 0px)', opacity: 1 }}
            >
              <div className="size-[60px] flex items-center justify-center text-2xl f-center rounded-full bg-accent4 mb-4 xl:mb-6">
                <h5>02</h5>
              </div>
              <h4 className="mb-4 xl:mb-6 font-semibold text-[18px]">Identify the Issue</h4>
              <p className="mb-7 xl:mb-10 text-neutral1/80 lg:text-lg text-neutral4">
                Pinpoint the specific wallet problem for targeted solutions.
              </p>
              <p className="text-lg font-medium text-neutral1/6">
                Connect your wallet first
              </p>
            </div>

            {/* Step 03 */}
            <div
              data-delay="0.25"
              className="fade_up_anim col-span-12 md:col-span-6 xl:col-span-3 p-4 lg:p-6 xxl:px-8 xl:py-10 xxl:py-[60px] rounded-xl flex flex-col items-center"
              style={{ transform: 'translate(0px, 0px)', opacity: 1 }}
            >
              <div className="size-[60px] flex items-center justify-center text-2xl f-center rounded-full bg-accent4 mb-4 xl:mb-6">
                <h5>03</h5>
              </div>
              <h4 className="mb-4 xl:mb-6 font-semibold text-[18px]">Validate the Wallet</h4>
              <p className="mb-7 xl:mb-10 text-neutral1/80 lg:text-lg text-neutral4">
                Check and verify wallet settings and blockchain configurations.
              </p>
              <p className="text-lg font-medium text-neutral1/6">
                Identify your wallet first
              </p>
            </div>

            {/* Step 04 */}
            <div
              data-delay="0.35"
              className="fade_up_anim col-span-12 md:col-span-6 xl:col-span-3 p-4 lg:p-6 xxl:px-8 xl:py-10 xxl:py-[60px] rounded-xl flex flex-col items-center"
              style={{ transform: 'translate(0px, 0px)', opacity: 1 }}
            >
              <div className="size-[60px] flex items-center justify-center text-2xl f-center rounded-full bg-accent4 mb-4 xl:mb-6">
                <h5>04</h5>
              </div>
              <h4 className="mb-4 xl:mb-6 font-semibold text-[18px]">Auto Fixing</h4>
              <p className="mb-7 xl:mb-10 text-neutral1/80 lg:text-lg text-neutral4">
                Take actionable steps to fix your wallet issues and restore full
                functionality.
              </p>
              <p className="text-lg font-medium text-neutral1/6">
                Validate your wallet first
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
