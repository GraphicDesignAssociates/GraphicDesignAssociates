import React from 'react';

// Building blocks Lists components
import {
  IndexView as ListsIndexView,
  ListWithNestedItem as ListWithNestedItemView,
  WithAvatars as WithAvatarsView,
  ListWithVerticalLine as ListWithVerticalLineView,
} from 'blocks/lists';

const routes = [
  {
    path: '/blocks/lists',
    renderer: (params = {}): React.JSX.Element => <ListsIndexView {...params} />,
  },
  {
    path: '/blocks/lists/list-with-nested-item',
    renderer: (params = {}): React.JSX.Element => (
      <ListWithNestedItemView {...params} />
    ),
  },
  {
    path: '/blocks/lists/with-avatars',
    renderer: (params = {}): React.JSX.Element => <WithAvatarsView {...params} />,
  },
  {
    path: '/blocks/lists/list-with-vertical-line',
    renderer: (params = {}): React.JSX.Element => (
      <ListWithVerticalLineView {...params} />
    ),
  },
];

export default routes;
