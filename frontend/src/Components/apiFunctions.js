import axios from 'axios';

export const sendCode = (data) => {
  return axios.post('http://localhost:8001/reciveCode', data).then((res) => {
    if (res.data.error) {
      const check = {
        status: false,
        error: res.data.error,
      };
      return check;
    } else {
      const check = {
        status: true,
        data: res.data,
      };
      return check;
    }
  });
};

export const getExamples = () => {
  return axios.post('http://localhost:8001/home/run').then((res) => {
    // console.log(res);
    if (res.data.error) {
      const check = {
        status: false,
        error: res.data.error,
      };
      return check;
    } else {
      const check = {
        status: true,
        clang: res.data.clang,
        examples: res.data.examples,
      };
      return check;
    }
  });
};
