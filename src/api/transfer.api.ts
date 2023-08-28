// import axiosService from './axios-service';

// const API = process.env.REACT_APP_API_URL;

// const ENDPOINT = 'transfer';
// const URL = `${API}/${ENDPOINT}`;

// export const transferApi = {
//   receive: async (body: { id: string; money: number }) => {
//     const response = await axiosService.post(`${URL}/receive`, {
//       id: body.id,
//       money: body.money,
//     });

//     return response.data;
//   },
//   transfer: async (body: { from: string; to: string; money: number }) => {
//     const response = await axiosService.post(`${URL}`, {
//       from: body.from,
//       to: body.to,
//       money: body.money,
//     });
//     return response.data;
//   },
// };
