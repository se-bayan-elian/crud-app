import axios from "axios";

export default axios.create({
  baseURL : 'https://some-data.onrender.com/stores',
  headers  : { 'Accept': 'application/json  ; charset=utf UTF-8' },
})