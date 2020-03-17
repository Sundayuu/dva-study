import React from 'react';
import { connect } from 'dva';

import { Form, Input, Button, message } from 'antd';
import * as styles from './index.less';

// type IProps = ({ history: any, syetemLogin, dispatch }) => JSX.Element;

const Login = ({ history, dispatch }) => {
  const onFinish = values => {
    // 使用promise 调用
    new Promise(function(resolve, reject) {
      dispatch({
        type: 'syetemLogin/dologin',
        payload: {
          userData: values,
          resolve,
          reject
        }
      });
    }).then(
      () => {
        message.success('登录成功');
        history.push('/home');
      },
      () => {
        message.error('用户名或密码错误');
      }
    );
  };

  const onFinishFailed = errorInfo => {};

  return (
    <div className={styles.loginBox}>
      <div className={styles.login}>
        <h3>系统登录 </h3>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            className={styles.myInput}
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input placeholder="用户名" />
          </Form.Item>

          <Form.Item
            className={styles.myInput}
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password placeholder="密码" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className={styles.loginBtn}
            >
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default connect()(Login);
