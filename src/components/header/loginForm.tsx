import React, { useState } from 'react';

interface RegisterFormProps {
  onClose: () => void;
}

const loginForm: React.FC<RegisterFormProps> = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Xử lý dữ liệu form đăng kí
  };
  return (
    <div className='fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50'>
      <form onSubmit={handleFormSubmit} className='bg-white p-6 rounded-lg'>
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
        <div className='flex justify-end'>
          <button
            type='button'
            onClick={onClose}
            className='px-3 py-1 bg-[#E5D9CE] hover:bg-gray-400 text-sm text-[#222940] rounded mr-2'
          >
            Thoát
          </button>
          <button type='submit' className='px-3 py-1 bg-[#222940] hover:bg-gray-400 text-sm text-[#E5D9CE] rounded'>
            Đăng Nhập
          </button>
        </div>
      </form>
    </div>
  );
};

export default loginForm;
