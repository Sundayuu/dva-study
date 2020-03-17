const Mock = require('mockjs');
module.exports = {
  'GET /api/functionMenu': (req, res) => {
    res.send({
      code: 'k-100',
      context: {
        menuList: [
          {
            id: 123456,
            menuName: '首页',
            level: 1,
            children: null
          },
          {
            id: 123457,
            menuName: '订单',
            level: 1,
            children: [
              {
                id: 12345671,
                menuName: '商家订单',
                parentId: 123457,
                level: 2,
                children: null
              },
              {
                id: 12345672,
                menuName: '买家订单',
                parentId: 123457,
                level: 2,
                children: null
              }
            ]
          },
          {
            id: 123458,
            menuName: '管理',
            level: 1,
            children: [
              {
                id: 12345681,
                menuName: '客户',
                parentId: 123458,
                level: 2,
                children: null
              }
            ]
          }
        ]
      }
    });
  }
};
