import axios from 'axios';
import Cookies from 'js-cookie';

const api = process.env.NEXT_PUBLIC_API;

// For common config
axios.defaults.headers.post['Content-Type'] = 'application/json';

const publicAxios = axios.create({
  baseURL: api,
});

let token = Cookies.get('nAToken');

const userAxios = axios.create({
  baseURL: api,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

userAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      Cookies.remove('nAToken', {
        expires: 2,
        path: '/',
        domain: `${process.env.NEXT_PUBLIC_COOKIE_URL}`,
      });
      window.location.href = `${process.env.NEXT_PUBLIC_APP}/auth/login/with-otp`;
    }
    return Promise.reject(error);
  }
);

const updateAxiosToken = (token) => {
  if (token) {
    userAxios.defaults.headers.Authorization = `Bearer ${token}`;
  }
};

export { publicAxios, userAxios, updateAxiosToken };
