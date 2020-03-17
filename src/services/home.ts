import request from '../utils/request';

export const getHomeMenu = async () => {
  return request('/api/functionMenu');
};
