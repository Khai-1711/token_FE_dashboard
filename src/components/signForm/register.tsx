import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
interface RegisterFormProps {
  onClose: () => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [confirm, setConfirm] = useState<boolean>(true);

  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    // Xử lý dữ liệu form đăng kí
    if (password !== confirmPassword) {
      setConfirm(false);
      alert('Password not match!');
    } else {
      axios
        .post<IUser>(`${process.env.REACT_APP_API_URL}/user`, {
          userName: email,
          password: password,
          name: name,
        })
        .then((response) => {
          // Xử lý dữ liệu trả về tại đây
          console.log('Đăng ký thành công:', response.data);
          alert('Đăng ký thành công!');
          onClose();
        })
        .catch((error) => {
          // Xử lý lỗi nếu có
          alert(`Đăng ký thất bại: ${error}`);
        });
    }
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
          <div className='mb-4'>
            <label htmlFor='confirmPassword' className='block text-sm font-medium text-gray-600'>
              Xác nhận Password
            </label>
            <input
              type='password'
              id='confirmPassword'
              className={`
              mt-1 px-2 py-1 w-full rounded border-gray-300 border-2 border-solid focus:ring focus:ring-gray-200 focus:border-gray-300
              ${!confirm && 'border-red-500'}
              `}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='name' className='block text-sm font-medium text-gray-600'>
              Tên
            </label>
            <input
              type='text'
              id='name'
              className='mt-1 px-2 py-1 w-full rounded border-gray-300 border-2 border-solid focus:ring focus:ring-gray-200 focus:border-gray-300'
              value={name}
              onChange={(e) => setName(e.target.value)}
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
            <Link
              to='/SignUp'
              type='submit'
              className='px-3 py-1 bg-[#222940] hover:bg-gray-400 text-sm text-[#E5D9CE] rounded'
            >
              Đăng Kí
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
