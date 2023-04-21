import axios from 'axios';

import { BASE_API_URL } from '@/constants/url.constants';

export const api = axios.create({
  baseURL: BASE_API_URL,
  withCredentials: true,
});
