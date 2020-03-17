import React from 'react';
import { connect } from 'dva';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined
} from '@ant-design/icons';
import * as styles from './home.less';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
type IState = {
  collapsed: boolean;
};
type IProps = {
  menuList: Array<any>;
  dispatch;
};
class Home extends React.Component<IProps, IState> {
  state = {
    collapsed: false
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };
  componentDidMount() {
    // new Promise((resolve,reject)=>{
    //   this.props.dispatch({
    //     type: 'home/fetchMenu',
    //     payload: {
    //       resolve,
    //       reject
    //     }
    //   });
    // }).then(res=>{
    //   console.log(res);

    // })
    this.props.dispatch({
      type: 'home/fetchMenu'
    });
  }

  render() {
    console.log(this.props);

    const { menuList } = this.props;

    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className={styles.logo}>指甲盖</div>

          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            {menuList &&
              menuList.map(item => {
                if (item.children && item.children.length > 0) {
                  return (
                    <SubMenu key={item.id} title={item.menuName}>
                      {item.children.map(item => {
                        return (
                          <Menu.Item key={item.id}>{item.menuName}</Menu.Item>
                        );
                      })}
                    </SubMenu>
                  );
                } else {
                  return (
                    <Menu.Item key={item.id}>
                      <span>{item.menuName}</span>
                    </Menu.Item>
                  );
                }
              })}
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              Bill is a cat.
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}
const mapStateToProps = state => {
  return {
    menuList: state.home.menuList
  };
};
export default connect(mapStateToProps)(Home);
