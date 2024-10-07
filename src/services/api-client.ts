import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '716165f7c72f4184a63b8a4059489962',
  },
});
