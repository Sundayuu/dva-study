import React from 'react';
import { Link } from 'dva/router';
import { Button } from 'antd';

type IProps = {
  title: string;
  productList: Array<any>;
  history;
  dispatch?;
};
const Product = ({ title, productList, history, dispatch }: IProps) => {
  const gotoHome = () => {
    history.push('/home');
  };
  const addGoods = () => {
    dispatch({
      type: 'product/updateProductList',
      payload: {
        name: '大麦子'
      }
    });
  };
  const addGoodshttp = () => {
    dispatch({
      type: 'product/getGoods',
      payload: {
        id: '001'
      }
    });
  };
  return (
    <div>
      product商品：{title}
      <ul>
        {productList &&
          productList.map((element, index) => {
            return <li key={index}>{element.name}</li>;
          })}
      </ul>
      <Link to="/home">去首页</Link>
      <Button type="primary" onClick={gotoHome}>
        {' '}
        去首页
      </Button>
      <Button onClick={addGoods}>添加商品</Button>
      <Button onClick={addGoodshttp}>添加商品http</Button>
    </div>
  );
};
export default Product;
