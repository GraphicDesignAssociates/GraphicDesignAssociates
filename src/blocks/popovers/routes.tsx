import React from 'react';

// Building blocks Popver components
import {
  IndexView as PopoverIndexView,
  Simple as SimpleView,
  StackedWithFooterActions as StackedWithFooterActionsView,
  WithRecentPosts as WithRecentPostsView,
  WithTwoColumnGrid as WithTwoColumnGridView,
} from 'blocks/popovers';

const routes = [
  {
    path: '/blocks/popovers',
    renderer: (params = {}): React.JSX.Element => <PopoverIndexView {...params} />,
  },
  {
    path: '/blocks/popovers/simple',
    renderer: (params = {}): React.JSX.Element => <SimpleView {...params} />,
  },
  {
    path: '/blocks/popovers/stacked-with-footer-actions',
    renderer: (params = {}): React.JSX.Element => (
      <StackedWithFooterActionsView {...params} />
    ),
  },
  {
    path: '/blocks/popovers/with-recent-posts',
    renderer: (params = {}): React.JSX.Element => <WithRecentPostsView {...params} />,
  },
  {
    path: '/blocks/popovers/with-two-column-grid',
    renderer: (params = {}): React.JSX.Element => (
      <WithTwoColumnGridView {...params} />
    ),
  },
];

export default routes;
