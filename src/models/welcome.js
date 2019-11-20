import { getUser } from '@/services/welcome';
export default {
  // model名称
  namespace: 'welcome',
  // state
  state: {},
  // 路由监听
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {});
    },
  },
  // generator 函数
  effects: {
    *init({ payload }, { call, put }) {
      const data = yield call(getUser);
      console.log(data);

      yield put({
        type: 'updateState',
      });
    },
  },
  // reducer
  reducers: {
    // 更新state
    updateState(state, action) {
      return { ...state, ...action.payload };
    },
  },
};
