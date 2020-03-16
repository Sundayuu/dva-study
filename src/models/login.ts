import * as require from './../services/login';
// type IState = {
//   record: number;
//   current: number;
//   username: string | number;
// };
export default {
  namespace: 'syetemLogin',

  state: {
    record: 0,
    current: 0,
    username: ''
  },

  subscriptions: {
    setup({ dispatch, history }: any) {
      // eslint-disable-line
    }
  },

  effects: {
    // effects 是一个generator函数
    // call:执行异步函数
    // put: 发出action,类似于dispatch
    // *fetch({ payload }: any, { call, put }: any) {
    //   // eslint-disable-line
    //   yield put({ type: 'add' });
    // }
    *dologin({ payload }, { call, put }) {
      // 将接口需要的参数从payload 解构
      let { userData } = payload;

      const { data } = yield call(require.login, userData) as any;
      let userInfo = data.userInfo;
      if (data && data.success) {
      }
      yield put({
        type: 'loginSuccess',
        payload: userInfo
      });
    }
  },

  reducers: {
    loginSuccess(state, action) {
      let userInfo = action.payload;
      return { ...state, ...userInfo };
    }
  }
};
