import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Card, Image, Icon, Loader } from 'semantic-ui-react';

import { getProducts } from '../actions/productActions';


class Products extends Component {
  componentDidMount() {
    this.props.getProducts();
  }

  onRemoveClick(e, data) {
    this.props.getProducts();
  }

  onAddClick(e, data) {
    this.props.getProducts();
  }

  render() {
    const { products, loading } = this.props.product;

    let postContent;

    if (products === null || loading) {
      postContent = <Loader active inline />;
    } else {
      postContent = products.map(product =>
        (
          <Card key={product.id}>
            <Card.Content>
              <Image floated="right" size="mini" src={`/images/${product.image}.jpg`} />
              <Card.Header>
                {product.title}
              </Card.Header>
              <Card.Meta>
                {`Price: ${product.price}`}
              </Card.Meta>

            </Card.Content>
            <Card.Content extra>
              <div className="ui two buttons">
                <Button onClick={this.onRemoveClick} value={product.id} basic color="red"><Icon name="minus" /></Button>
                <Button onClick={this.onAddClick} value={product.id} basic color="green"><Icon name="plus" /></Button>
              </div>
            </Card.Content>
          </Card>
        ));
    }

    return (
      <Card.Group>
        { postContent }
      </Card.Group>
    );
  }
}

Products.propTypes = {
  getProducts: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  product: state.product,
});

export default connect(mapStateToProps, { getProducts })(Products);

