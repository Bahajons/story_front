import axios, { delete as del, get, post, put } from 'axios';
const Axios = () => {
  const token = localStorage.getItem('token');
  const defaultOptions = {
    baseURL: process.env.REACT_APP_API_URL,
    headers: token
      ? {
          Authorization: `Bearer ${token}`,
        }
      : {},
    params: {
      lan: localStorage.getItem('i18nextLng') || 'uz',
    },
  };
  return {
    get: (url, options = {}) => get(url, { ...defaultOptions, ...options }),
    post: (url, data, options = {}) =>
      post(url, data, { ...defaultOptions, ...options }),
    put: (url, data, options = {}) =>
      put(url, data, { ...defaultOptions, ...options }),
    delete: (url, options = {}) => del(url, { ...defaultOptions, ...options }),
  };
};
export default Axios;