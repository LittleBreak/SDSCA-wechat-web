import request from '@/utils/request';

export async function getUser(params) {
  return request('/api/user', {});
}
