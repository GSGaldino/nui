import axios from 'axios'

const url = process.env.API_URL

export default axios.create({
  baseURL: url,
});
