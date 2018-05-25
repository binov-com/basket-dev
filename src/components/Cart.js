import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card, Feed, Icon } from 'semantic-ui-react';
import computeDiscount from '../helpers/discount';


class Cart extends Component {
  render() {
    const { products } = this.props.product;
    const { cart } = this.props.cart;

    const items = cart.sort().map((item) => {
      const product = products.find(p => p.id === item.id);
      return {
        id: item.id,
        title: product.title,
        price: product.price,
        quantity: item.quantity,
        discount: product.discount,
        image: product.image,
        total: computeDiscount({
          price: product.price,
          quantity: item.quantity,
          discount: product.discount,
        }),
      };
    });

    const sum = items.reduce((acc, val) => acc + val.total, 0);

    let postContent;

    if (cart === null) {
      postContent = <div>empty basket</div>;
    } else {
      postContent = items.map(item =>
        (
          <Feed.Event key={item.id}>
            <Feed.Label image={`/images/${item.image}.jpg`} />
            <Feed.Content>
              <Feed.Date content={item.title} />
              <Feed.Summary>
                {item.price.toFixed(2)} € x {item.quantity} = {(item.quantity * item.price).toFixed(2)} €
                {item.total}
              </Feed.Summary >
            </Feed.Content>
          </Feed.Event>
        ));
    }

    return (
      <Card>
        <Card.Content>
          <Card.Header>
            <Icon name="add to cart" />Cart
          </Card.Header>
        </Card.Content>
        <Card.Content>
          <Feed >
            {postContent}
          </Feed>
        </Card.Content>
        <Card.Content extra>
          <Icon name="money" /> {sum.toFixed(2)} €
        </Card.Content>
      </Card>
    );
  }
}

Cart.propTypes = {
  product: PropTypes.object.isRequired,
  cart: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  product: state.product,
  cart: state.cart,
});

export default connect(mapStateToProps, null)(Cart);

