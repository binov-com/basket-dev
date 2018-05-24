import React, { Component } from 'react';
import { Grid, Container } from 'semantic-ui-react';

import logo from './logo.png';
import './App.css';

import Products from './components/Products';
import Cart from './components/Cart';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <p className="App-intro">
          Welcome to Fruit Shop
        </p>
        <Container>
          <Grid>
            <Grid.Row>
              <Grid.Column width={12}>
                <Products />
              </Grid.Column>
              <Grid.Column width={4}>
                <Cart />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default App;
