import React, { Component } from 'react';
import { connect } from 'react-redux';
import addNewProduct from '../../redux/actions'
class Products extends Component {
  testhandler = () =>{
    this.props.test();
  }

  addNewProduct = () =>{
    this.props.add({
      id: 3,
      name: 'Product 3',
      price: 4545646,
    })
  }
  render() {
    console.log('Props in Products', this.props.products);
    return (
      <div>
        {this.props.products.map((product) => (
          <div>
            <div>
              <span>ID</span> <span>{product.id}</span>
            </div>
            <div>
              <span>Name</span> <span>{product.name}</span>
            </div>
            <div>
              <span>Price</span> <span>{product.price}</span>
            </div>
            <button onClick={this.testhandler}>Test</button>
            <button onClick={this.props.add}>Add</button>
            <button onClick={this.props.delete}>Delete</button>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('Products', state);
  return {
    products: state.products,
  };
};

const mapActionsToProps = (dispatch) => {
  return {
    test: () => {
      dispatch({type: 'test', value: 'Test For Action'});
    },
    add: (value) => {
      dispatch(addNewProduct(value))
    },
    delete: () => {
      dispatch({type: 'delete', value: 1})
    }
  };
};
export default connect(mapStateToProps, mapActionsToProps)(Products);
