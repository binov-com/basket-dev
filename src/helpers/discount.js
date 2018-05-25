const computeDiscount = (item) => {
  switch (item.discount) {
    case 'THREE_FOR_TWO': {
      if (item.quantity < 3) { return (item.quantity * item.price); }

      const moduloComputed = item.quantity % 3;
      const divComputed = item.quantity / 3;

      return (moduloComputed * item.price) + (Math.floor(divComputed) * 2 * item.price);
    }
    default:
      return (item.quantity * item.price);
  }
};

export default computeDiscount;

