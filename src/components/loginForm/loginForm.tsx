import axios from 'axios';
import React, { useState } from 'react';

interface LoginFormProps {
  onClose: () => void;
}

const loginForm: React.FC<LoginFormProps> = ({ onClose }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [email, setEmail] = useState<string>('');
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [password, setPassword] = useState('');
  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    axios
      .put<IUser>(`${process.env.REACT_APP_API_URL}/user`, {
        userName: email,
        password: password,
      })
      .then((response) => {
        // Xử lý dữ liệu trả về tại đây
        console.log('Đăng nhập thành công:', response.data);
        alert('Đăng nhập thành công!');
        onClose();
      })
      .catch((error) => {
        // Xử lý lỗi nếu có
        console.log('Đăng nhập không thành công:', error);
        alert(`Đăng nhập không thành công: ${error}`);
      });
  };
  return (
    <div className='fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50'>
      <form onSubmit={handleFormSubmit} className='bg-white p-6 rounded-lg'>
        <div className='mb-4'>
          <label htmlFor='email' className='block text-sm font-medium text-gray-600'>
            Email
          </label>
          <input
            id='email'
            className='mt-1 px-2 py-1 w-full rounded border-gray-300 border-2 border-solid focus:ring focus:ring-gray-200 focus:border-gray-300'
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
            className='mt-1 px-2 py-1 w-full rounded border-gray-300 border-2 border-solid focus:ring focus:ring-gray-200 focus:border-gray-300'
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
