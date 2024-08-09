import React, { Component } from 'react';
import ProductList from './components/ProductList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Product Store</h1>
        </header>
        <ProductList />
      </div>
    );
  }
}

export default App;
