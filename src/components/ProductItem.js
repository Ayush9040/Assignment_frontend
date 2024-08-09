import React, { Component } from 'react';

class ProductItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
          isExpanded: false,
        };
      }
    
      toggleReadMore = () => {
        this.setState((prevState) => ({
          isExpanded: !prevState.isExpanded,
        }));
      };



  render() {
    const { product } = this.props;
    const { text } = this.props;
    const { isExpanded } = this.state;

    return (
      <div className="product-item">
        <h3>{product.title}</h3>
       <div className="img-wrapper">
       <img src={product.image} alt={product.title} width="100" />
       </div>

        {/* <p>{product.description}</p> */}
        
        <div>
        <p>
          {isExpanded ? product.description : `${product.description.substring(0, 100)}...`}
          <span 
            onClick={this.toggleReadMore} 
            style={{ color: 'blue', cursor: 'pointer', marginLeft: '5px' }}
          >
            {isExpanded ? 'Show less' : 'Read more'}
          </span>
        </p>
      </div>
      <button className="btn-price button-9">${product.price}</button>
      </div>
    );
  }
}

export default ProductItem;
