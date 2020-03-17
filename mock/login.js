module.exports = {
  'POST /api/login': (req, res) => {
    const { username, password } = req.body;

    if (username == 'admin' && password == '123456') {
      res.send({
        code: 'k-100',
        context: {
          username: username,
          success: true,
          token: '32262695551565'
        },
        message: '登录成功'
      });
    } else {
      res.send({
        code: 'k-200',
        context: {
          username: '',
          success: false
        },
        message: ''
      });
    }
  }
};
