import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions/productActions';
import ProductItem from './ProductItem';

class ProductList extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const { products, error } = this.props;
    if (error) {
      return <div>Error: {error}</div>;
    }

    if (!products.length) {
      return <div>Loading...</div>;
    }

    return (
      <div className="product-list">
        {products.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products.items,
  error: state.products.error,
});

export default connect(mapStateToProps, { fetchProducts })(ProductList);
