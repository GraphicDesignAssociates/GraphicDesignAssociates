import React from 'react';

// Building blocks productDetails components
import {
  IndexView as ProductDetailsIndexView,
  WithLargeImage as WithLargeImageView,
  WithImageGrid as WithImageGridView,
} from 'blocks/productDetails';

const routes = [
  {
    path: '/blocks/product-details',
    renderer: (params = {}): React.JSX.Element => (
      <ProductDetailsIndexView {...params} />
    ),
  },
  {
    path: '/blocks/product-details/with-large-image',
    renderer: (params = {}): React.JSX.Element => <WithLargeImageView {...params} />,
  },
  {
    path: '/blocks/product-details/with-image-grid',
    renderer: (params = {}): React.JSX.Element => <WithImageGridView {...params} />,
  },
];

export default routes;
