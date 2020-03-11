export default {
  namespace: 'syetemLogin',

  state: {
    record: 0,
    current: 0
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
    *dologin({ payload }, { call, put }) {}
  },

  reducers: {
    add(state) {
      const newCurrent = state.current + 1;
      return {
        ...state,
        record: newCurrent > state.record ? newCurrent : state.record,
        current: newCurrent
      };
    },
    minus(state) {
      return {
        ...state,
        current: state.current - 1
      };
    }
  }
};
