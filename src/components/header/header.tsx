import { shortenAddress, shortenBalance } from '@/utils/shortenAddress';
import { formatNumber } from '@/utils/shortenAddress';
import Tokenlogo from '@/assets/images/VNSToken.png';
import { useState } from 'react';
import RegisterForm from './register';
import LoginForm from './loginForm';

function Header() {
  const currentAccount = '0x00';
  const [isLogin, setIsLogin] = useState(false);
  const [showRegisterBox, setShowRegisterBox] = useState(false);
  const handleClickRegister = () => {
    setShowRegisterBox(true);
  };
  const handleClickLogin = () => {
    setIsLogin(true);
  };
  const handleCloseClick = () => {
    setShowRegisterBox(false);
    setIsLogin(false);
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return (
    <div className='border-b-[1px] border-black border-solid'>
      <header className='h-16 p-2 custom-header flex items-center justify-between bg-[#141828]'>
        <div className='ml-5 flex items-center space-x-4'>
          <h1>
            <img
              src='https://demo.vietnamstartup.io/static/media/Logo_VNS.6e0befe7b0a463a9ef51.png'
              alt='logo_VNS'
              width={140}
            />
          </h1>
          <ul className='flex space-x-4'>
            <li>
              <a href='#' className='items-center hover:text-[#15275A] text-[#E5D9CE]'>
                VNS Rewards
              </a>
            </li>
            <li>
              <a href='#' className='items-center hover:text-[#15275A] text-[#E5D9CE]'>
                FQA
              </a>
            </li>
          </ul>
        </div>
        <nav>
          <ul className='flex ml-100 space-x-7 w-[100%]'>
            <div>
              {isLogin && <LoginForm onClose={handleCloseClick} />}
              {showRegisterBox && <RegisterForm onClose={handleCloseClick} />}
              {isLogin ? (
                <div className='flex'>
                  <div className='p-2 items-center text-[#c9d9e0] flex border-r-[1px] border-gray-400 border-solid'>
                    <img src={Tokenlogo} alt='Token Logo' className='flex w-10 h-10 mr-2' /> {''}
                  </div>
                  <div className='p-2 items-center text-[#c9d9e0] flex border-r-[1px] border-gray-400 border-solid '>
                    <img
                      src='https://previews.123rf.com/images/mingirov/mingirov1902/mingirov190200850/118483237-cryptocurrency-coin-ethereum-eth-icon-isolated-on-transparent-background-physical-bit-coin-digital.jpg'
                      className=' h-5 w-5 flex mr-2'
                    />{' '}
                    ETH
                  </div>
                  <div className='p-2 text-[#c9d9e0] flex items-center'>
                    <img
                      src='https://as1.ftcdn.net/v2/jpg/02/09/95/42/500_F_209954204_mHCvAQBIXP7C2zRl5Fbs6MEWOEkaX3cA.jpg'
                      className=' h-5 w-5 mr-2 '
                    />
                    {currentAccount ? shortenAddress(currentAccount) : ' '}
                  </div>
                </div>
              ) : (
                <div className='flex justify-end items-center w-[100%] mr-10'>
                  <button
                    type='button'
                    onClick={handleClickRegister}
                    className='w-[50%] h-[20%] px-3 py-1 rounded bg-[#222940] hover:text-gray-400 text-sm text-[#E5D9CE] mr-2'
                  >
                    Đăng Kí
                  </button>

                  <button
                    type='button'
                    onClick={handleClickLogin}
                    className='w-[50%]  px-3 py-1 rounded bg-[#0056bf] hover:text-gray-400 text-sm text-[#E5D9CE] mr-3'
                  >
                    Đăng Nhập
                  </button>
                </div>
              )}
            </div>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
