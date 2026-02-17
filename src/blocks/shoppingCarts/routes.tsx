import React from 'react';

// Building blocks shoppingCarts components
import {
  IndexView as ShoppingCartsIndexView,
  CartWithOrderSummery as CartWithOrderSummeryView,
  EmptyCart as EmptyCartView,
} from 'blocks/shoppingCarts';

const routes = [
  {
    path: '/blocks/shopping-carts',
    renderer: (params = {}): React.JSX.Element => (
      <ShoppingCartsIndexView {...params} />
    ),
  },
  {
    path: '/blocks/shopping-carts/cart-with-order-summery',
    renderer: (params = {}): React.JSX.Element => (
      <CartWithOrderSummeryView {...params} />
    ),
  },
  {
    path: '/blocks/shopping-carts/empty-cart',
    renderer: (params = {}): React.JSX.Element => <EmptyCartView {...params} />,
  },
];

export default routes;
