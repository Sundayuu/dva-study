import request from '../utils/request';

export const login = async params => {
  console.log(params);
  return request('/system/login', {
    method: 'POST',
    body: JSON.stringify(params)
  });
};
