import React from 'react';

// Building blocks Category Showcase components
import {
  IndexView as CategoryShowcasesIndexView,
  WithImageGrid as WithImageGridView,
  SpanningColumns as SpanningColumnsView,
  ShowcaseGrid as ShowcaseGridView,
  ShowcaseBgImage as ShowcaseBgImageView,
} from 'blocks/categoryShowcases';

const routes = [
  {
    path: '/blocks/category-showcases',
    renderer: (params = {}): React.JSX.Element => (
      <CategoryShowcasesIndexView {...params} />
    ),
  },
  {
    path: '/blocks/category-showcases/with-image-grid',
    renderer: (params = {}): React.JSX.Element => <WithImageGridView {...params} />,
  },
  {
    path: '/blocks/category-showcases/on-spanning-columns',
    renderer: (params = {}): React.JSX.Element => <SpanningColumnsView {...params} />,
  },
  {
    path: '/blocks/category-showcases/showcase-grid',
    renderer: (params = {}): React.JSX.Element => <ShowcaseGridView {...params} />,
  },
  {
    path: '/blocks/category-showcases/showcase-bg-image',
    renderer: (params = {}): React.JSX.Element => <ShowcaseBgImageView {...params} />,
  },
];

export default routes;
