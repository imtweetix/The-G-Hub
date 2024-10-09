import * as dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: import.meta.env.VITE_RAWGIO_API,
  },
});
