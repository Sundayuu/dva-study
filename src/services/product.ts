import request from '../utils/request';

export const fetchGoods = () => {
  return request(`/api/product`);
};
export function query() {
  return request('/api/users');
}
