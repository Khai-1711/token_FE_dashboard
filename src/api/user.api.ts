// import axiosService from './axios-service';

// const API = process.env.REACT_APP_API_URL;

// const ENDPOINT = 'user';
// const URL = `${API}/${ENDPOINT}`;

// export const userApi = {
//   signIn: async () => {
//     const response = await axiosService.put(`${URL}`);

//     return response.data;
//   },
//   signUp: async (body: { userName: string; password: string; name: string }) => {
//     const response = await axiosService.post<IUser>(`${URL}`, {
//       userName: body.userName,
//       password: body.password,
//       name: body.name,
//     });
//     return response.data;
//   },

//   update: async (body: IUser) => {
//     const response = await axiosService.post<IUser>(`${URL}/${body.userName}`, {
//       userName: body.userName,
//       password: body.password,
//       name: body.name,
//       money: body.money,
//     });
//     return response.data;
//   },
// };
