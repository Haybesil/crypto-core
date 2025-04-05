import React from 'react';

export default function Footer() {
  return (
    <div>
      <footer className="bg-accent5 relative overflow-hidden footer text-neutral1">
        <div className="w-[150px] lg:w-[250px] h-[150px] lg:h-[250px] absolute bottom-[-6%] blur-[85px] left-[-9%] bg-primary/50"></div>
        <div className="w-[150px] lg:w-[250px] h-[150px] lg:h-[250px] absolute top-[-6%] blur-[85px] right-[-8%] bg-accent1/50"></div>
        <img
          className="max-[1700px]:hidden absolute left-0 bottom-0"
          src="assets/images/footer-el-1.png"
          alt=""
        />
        <img
          className="max-lg:hidden absolute right-1 bottom-0"
          src="assets/images/footer-el-2.png"
          alt=""
        />
        <img
          className="max-xl:hidden absolute right-0 top-2 animate-skew"
          src="assets/images/how-start-el-2.png"
          alt=""
        />
        <div className="py-5 xl:py-8 border-t border-accent4">
          <div className="container text-center flex justify-center gap-2 sm:gap-3 items-center relative z-[2]">
            <p className="text-xs sm:text-sm md:text-base xl:text-lg">
              Copyright @ <span id="year">2025</span> All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
