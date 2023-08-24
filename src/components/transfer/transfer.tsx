import { clsx } from 'clsx';
import { useState } from 'react';

import { formatNumber } from '@/utils/shortenAddress';

function Transfer() {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [isBuy, setIsBuy] = useState<boolean>(true);
  const [amount, setAmount] = useState('');
  const [receiver, setReceiver] = useState('');

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleAmountChange = (event: any) => {
    setAmount(event.target.value);
    console.log(amount);
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleReceiverChange = (event: any) => {
    setReceiver(event.target.value);
    console.log(setReceiver);
    null;
  };

  const handleBuy = () => {};

  const handleSellTokens = () => {};

  const handleChooseBuy = () => {
    setIsBuy(true);
  };
  const handleChooseSell = () => {
    setIsBuy(false);
  };
  // const handleClickSell = () => {
  //   setBalance(balance);
  // };

  // eslint-disable-next-line react-hooks/rules-of-hooks

  return (
    <div className='bg-[#141828] w-[50%] h-[360px] px-[15px] py-[20px] flex flex-col justify-between items-center border-[1px] border-black border-solid'>
      <div className='bg-[#222940] rounded-[8px] p-[5px] w-[97%] flex justify-between font-[30px] text-[16px]'>
        <button
          className={clsx('w-[49%] h-[35px] rounded-[5px]', {
            'text-[#449f73] bg-[#283e49]': isBuy,
            'text-white hover:bg-[#393f53]': !isBuy,
          })}
          onClick={handleChooseBuy}
        >
          Mua
        </button>
        <button
          className={clsx('w-[49%] h-[35px] rounded-[5px]', {
            'text-[#d44e67] bg-[#3d2f45]': !isBuy,
            'text-white hover:bg-[#393f53]': isBuy,
          })}
          onClick={handleChooseSell}
        >
          Bán
        </button>
      </div>
      <div className='text-white flex flex-col justify-between h-full py-5 text-[14px] w-[97%]'>
        <div className='flex justify-between'>
          <p className='text-[#77829b] font-thin'>{isBuy ? 'Giá mua VNSe' : 'Giá bán VNSe'}</p>
          <p>{} ETH</p>
        </div>
        <div>
          <div>
            <p className='text-[#77829b] mb-1 font-thin'>Số lượng xu {isBuy ? 'sử dụng' : 'bán'}</p>
            <input
              type='text'
              value={amount}
              onChange={handleAmountChange}
              className='bg-[#1a2033] border-[1px] border-[#142a48] text-[#77829b] text-sm rounded-lg block w-full pl-5 p-2.5'
              placeholder='0'
            />
          </div>
          {!isBuy && (
            <div>
              <p className='text-[#77829b] mt-2 mb-1 font-thin'>Địa chỉ</p>
              <input
                type='text'
                value={receiver}
                onChange={handleReceiverChange}
                className='bg-[#1a2033] border-[1px] border-[#142a48] text-[#77829b] text-sm rounded-lg block w-full pl-5 p-2.5'
                placeholder='0x00000'
              />
            </div>
          )}
        </div>
        <div className='flex justify-between'>
          <p className='text-[#77829b] font-thin'>Khả dụng</p>
          <p>
            {''} Xu <span className='text-[#0b74e5]'>⊕</span>
          </p>
        </div>
        <p className='text-[#77829b] font-thin'>Phí giao dịch ©</p>
      </div>
      {isBuy ? (
        <button
          className='w-[100%] h-[35px] rounded-[5px] mt-2 text-[#449f73] bg-[#283e49]'
          onClick={handleBuy}
          disabled={!isLogin}
        >
          Mua
        </button>
      ) : (
        <button
          className='w-[100%] h-[35px] rounded-[5px] mt-2 text-[#d44e67] bg-[#3d2f45]'
          onClick={handleSellTokens}
          disabled={!isLogin}
        >
          Bán
        </button>
      )}
    </div>
  );
}

export default Transfer;
