import * as api from './../services/product';
export default {
  namespace: 'product',
  state: {
    productList: [
      {
        name: '豆子'
      },
      {
        name: '玉米'
      }
    ]
  },
  effects: {
    *getGoods({ payload }, { call, put }) {
      const result = yield call(api.fetchGoods, payload);

      yield put({
        type: 'updateProductListHttp',
        payload: result.data
      });
    }
  },
  reducers: {
    updateProductList(state, action) {
      return {
        ...state,
        productList: state.productList.concat(action.payload)
      };
    },
    updateProductListHttp(state, action) {
      return {
        ...state,
        productList: state.productList.concat(action.payload)
      };
    }
  },
  subscriptions: {}
};
