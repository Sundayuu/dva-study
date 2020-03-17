import * as api from './../services/home';
import { HTTP_SUCCESS } from './../utils/Const';
export default {
  namespace: 'home',

  subscriptions: {},

  state: {
    menuList: []
  },

  effects: {
    // 获取首页的菜单列表
    *fetchMenu({ payload }, { call, put }) {
      const { data } = yield call(api.getHomeMenu) as any;
      console.log('测试主页菜单', data);
      const { code, context } = data;
      if (code == HTTP_SUCCESS) {
        yield put({
          type: 'updateMenuList',
          payload: context.menuList
        });
      }
    }
  },

  reducers: {
    updateMenuList(state, action) {
      return {
        ...state,
        menuList: action.payload
      };
    }
  }
};
