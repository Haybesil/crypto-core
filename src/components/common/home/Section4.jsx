import React from 'react';

export default function Section4() {
  return (
    <div>
      <section className="bg-accent2 pb-10">
        <div className="container pt-[50px] pb-[30px] px-2 lg:px-0 lg:pl-28">
          <div className="grid grid-cols-12 gap-4 mb-10 xl:mb-[20px]">
            <div className="col-span-12 md:col-span-12 xl:col-span-4">
              <h2
                className="fade_up_anim text-[38px] text-neutral1 font-bold"
                style={{ transform: 'translate(0px, 0px)', opacity: 1 }}
              >
                <br />
                Why Chose Us?
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-4">
            <div
              data-delay=".15"
              className="fade_up_anim col-span-12 md:col-span-6 xl:col-span-4 bg-accent6 rounded-xl p-4 pb-0 xl:p-6 xxl:p-8"
              style={{ transform: 'translate(0px, 0px)', opacity: 1 }}
            >
              <h3 className="mb-1 text-[20px] font-semibold text-neutral1">User-Friendly Platform</h3>
              <p className="lg:text-[15px] font-medium text-neutral1/70">
                Built with you in mind, our intuitive platform makes navigating
                and solving issues straightforward and stress-free.
              </p>
              <div className="flex justify-end">
                <img
                  src="/images/trade.png"
                  className="lg:-mr-5 -mt-9"
                  alt=""
                />
              </div>
            </div>

            <div
              className="fade_up_anim col-span-12 md:col-span-6 xl:col-span-4 bg-accent6 rounded-xl p-4 pb-0 xl:p-6 xxl:p-8"
              style={{ transform: 'translate(0px, 0px)', opacity: 1 }}
            >
              <h3 className="mb-1 text-[20px] font-semibold text-neutral1">24/7 Support</h3>
              <p className="lg:text-[15px] font-medium text-neutral1/70">
                Our dedicated team is always available, around the clock, to
                provide you with expert assistance whenever you need it.
              </p>
              <div className="flex justify-between items-end">
                <img
                  src="/images/bitcoin-2.png"
                  className="max-md:hidden"
                  alt=""
                />
                <img
                  src="/images/support.png"
                  className="lg:-mr-5"
                  alt=""
                />
              </div>
            </div>

            <div
              className="fade_up_anim col-span-12 md:col-span-6 xl:col-span-4 bg-accent6 rounded-xl p-4 pb-0 xl:p-6 xxl:p-8"
              style={{ transform: 'translate(0px, 0px)', opacity: 1 }}
            >
              <h3 className="mb-1 text-[20px] font-semibold text-neutral1">Trusted &amp; Secure</h3>
              <p className="lg:text-[15px] font-medium text-neutral1/70">
                We prioritize your safety by offering a secure and reliable
                platform that you can trust for all your needs.
              </p>
              <div className="flex justify-between items-end">
                <img
                  src="/images/coins.png"
                  className="max-md:hidden"
                  alt=""
                />
                <img
                  src="/images/trusted.png"
                  className="lg:-mr-5 -mt-4"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
