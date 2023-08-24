import React, { useState } from 'react';

interface RegisterFormProps {
  onClose: () => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Xử lý dữ liệu form đăng kí
  };

  return (
    <div className='fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50'>
      <div className='bg-white p-6 rounded-lg w-full max-w-md'>
        <button
          type='button'
          onClick={onClose}
          className='absolute top-0 right-0 p-1 text-sm text-gray-600 hover:text-gray-800'
        >
          X
        </button>
        <form onSubmit={handleFormSubmit}>
          <div className='mb-4'>
            <label htmlFor='email' className='block text-sm font-medium text-gray-600'>
              Email
            </label>
            <input
              type='email'
              id='email'
              className='mt-1 px-2 py-1 w-full rounded border-gray-300 focus:ring focus:ring-gray-200 focus:border-gray-300'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='password' className='block text-sm font-medium text-gray-600'>
              Password
            </label>
            <input
              type='password'
              id='password'
              className='mt-1 px-2 py-1 w-full rounded border-gray-300 focus:ring focus:ring-gray-200 focus:border-gray-300'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='confirmPassword' className='block text-sm font-medium text-gray-600'>
              Xác nhận Password
            </label>
            <input
              type='password'
              id='confirmPassword'
              className='mt-1 px-2 py-1 w-full rounded border-gray-300 focus:ring focus:ring-gray-200 focus:border-gray-300'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='phoneNumber' className='block text-sm font-medium text-gray-600'>
              Số điện thoại
            </label>
            <input
              type='text'
              id='phoneNumber'
              className='mt-1 px-2 py-1 w-full rounded border-gray-300 focus:ring focus:ring-gray-200 focus:border-gray-300'
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
          <div className='flex justify-between'>
            <button
              type='button'
              onClick={onClose}
              className='px-3 py-1 bg-[#E5D9CE] hover:bg-gray-400 text-sm text-[#222940] rounded'
            >
              Thoát
            </button>
            <button type='submit' className='px-3 py-1 bg-[#222940] hover:bg-gray-400 text-sm text-[#E5D9CE] rounded'>
              Đăng Kí
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
