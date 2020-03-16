import React from 'react';
import { connect } from 'dva';
import Product from './../../components/Product';
interface IProps {
  productList: Array<any>;
}
class ProductIndex extends React.Component<any, IProps> {
  render() {
    console.log(process.env.API_URl);

    return (
      <div>
        <Product
          title="测试"
          productList={this.props.productList}
          history={this.props.history}
          dispatch={this.props.dispatch}
        />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    productList: state.product.productList
  };
};
export default connect(mapStateToProps)(ProductIndex);
