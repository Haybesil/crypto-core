import { ChevronDown, ChevronUp } from 'lucide-react';
import React, { useState } from 'react';

const FAQSection = () => {
  const [opened, setOpened] = useState(2);

  const handleOpen = (i) => {
    setOpened(opened === i ? 0 : i);
  };

  return (
    <section className="bg-accent2 relative overflow-hidden">
      <div className="max-lg:hidden w-[350px] h-[350px] absolute bottom-[-6%] blur-[85px] left-[-12%] bg-accent1/50"></div>
      <img
        className="max-lg:hidden absolute right-[2%] bottom-[3%]"
        src="/images/faq-box.png"
        alt=""
      />
      <div className="container relative z-[2] pt-[70px] pb-[70px] grid grid-cols-12 gap-6 xl:gap-10 items-center">
        {/* Left: Form */}
        <div className="fade_up_anim col-span-12 lg:col-span-5 p-4 lg:p-6 xl:p-8 xxl:px-10 bg-accent5 border border-accent4 rounded-xl ml-6 lg:ml-28">
          <p className="lg:text-[30px] text-neutral2 font-semibold mb-3">FAQ</p>
          <h2 className="mb-4 lg:text-[25px] font-semibold text-neutral1">
            Your questions{' '}
            <span className="h2 underline text-primary">answered.</span>
          </h2>
          <p className="text-neutral2 mb-6 text-base font-medium xl:mb-10">
            Let's do our best to answer your most frequently asked questions.
            Can't find the answer you're looking for? Please chat to our
            friendly team!
          </p>
          <form method="post" action="" className="form">
            <label
              htmlFor="email"
              className="mb-3 font-medium block text-neutral2"
            >
              Your Email*
            </label>
            <input
              type="text"
              placeholder="Your Email"
              name="email"
              className="w-full focus:border-primary bg-transparent border border-accent4 p-3 xl:p-4 rounded-xl mb-5"
              required
            />
            <label
              htmlFor="message"
              className="mb-3 font-medium block text-neutral2"
            >
              Your Message*
            </label>
            <textarea
              name="message"
              placeholder="Your Message..."
              rows="4"
              className="w-full focus:border-primary bg-transparent border border-accent4 p-3 xl:p-4 rounded-xl mb-5"
              required
            />
            <button
              type="submit"
              className="py-3 px-5 w-full rounded-xl text-lg bg-primary font-medium text-neutral1"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right: FAQ Accordions */}
        <div className="col-span-12 lg:col-span-7 p-4 lg:p-6 xl:p-8 xxl:px-10 bg-accent5 border border-accent4 rounded-xl flex flex-col gap-4 xxl:gap-7 text-neutral2">
          {[
            {
              id: 1,
              question:
                'How can I get help if I encounter an issue with my wallet?',
              answer:
                "If you face any wallet-related problems, our platform offers 24/7 support. Our dedicated team is always available to assist you with troubleshooting and resolving issues, whether it's a transaction failure, connection problem, or configuration error. Simply reach out through the support portal, and our experts will guide you every step of the way.",
            },
            {
              id: 2,
              question:
                'What measures do you take to ensure the security of my wallet and transactions?',
              answer:
                "We understand the importance of trust and security when it comes to financial platforms. That's why we offer a trusted and secure environment. Our platform uses industry-standard encryption protocols and multi-layer security systems to safeguard your wallet and all transactions. Additionally, we continuously monitor for potential threats to ensure that your assets are always protected.",
            },
            {
              id: 3,
              question: 'Is your platform easy to use for beginners?',
              answer:
                'Yes! Our platform is designed with user-friendly features that make it easy for anyone, regardless of technical experience, to navigate and use effectively. We provide clear, simple instructions for connecting your wallet, performing transactions, and troubleshooting common issues. Plus, our support team is always available to assist if needed.',
            },
            {
              id: 4,
              question:
                'Can I access your services from anywhere in the world?',
              answer:
                "Absolutely! Our platform offers global accessibility, meaning you can access your wallet and perform transactions no matter where you are in the world. Whether you're at home, traveling abroad, or working remotely, our services are available 24/7, allowing you to stay connected and manage your assets seamlessly.",
            },
          ].map(({ id, question, answer }) => (
            <div
              key={id}
              className={`fade_up_anim p-4 rounded-xl border border-accent4 cursor-pointer transition-colors duration-300 ease-in-out ${
                opened === id ? "bg-accent6" : ""
              }`}
              onClick={() => handleOpen(id)}
            >
              <div className="flex justify-between items-center">
                <p className="text-sm lg:text-base xxl:text-xl font-medium">
                  {question}
                </p>
                <span
                  className={`size-8 md:size-10 rounded-full f-center text-lg md:text-2xl duration-300 flex items-center justify-center ${
                    opened === id ? 'bg-primary rotate-180' : 'bg-accent6'
                  }`}
                >
                  {opened === id ? <ChevronUp /> : <ChevronDown />}
                </span>
              </div>
              {opened === id && (
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    opened === id ? 'max-h-[500px] mt-3' : 'max-h-0'
                  }`}
                >
                  <p className="text-sm lg:text-base xxl:text-lg">{answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
