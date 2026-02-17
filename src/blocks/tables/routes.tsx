import React from 'react';

// Building blocks Tables components
import {
  IndexView as TablesIndexView,
  WithAvatarsAndMultilineContent as WithAvatarsAndMultilineContentView,
  SimpleStriped as SimpleStripedView,
  Simple as SimpleView,
} from 'blocks/tables';

const routes = [
  {
    path: '/blocks/tables',
    renderer: (params = {}): React.JSX.Element => <TablesIndexView {...params} />,
  },
  {
    path: '/blocks/tables/with-avatars-and-multiline-content',
    renderer: (params = {}): React.JSX.Element => (
      <WithAvatarsAndMultilineContentView {...params} />
    ),
  },
  {
    path: '/blocks/tables/simple-striped',
    renderer: (params = {}): React.JSX.Element => <SimpleStripedView {...params} />,
  },
  {
    path: '/blocks/tables/simple',
    renderer: (params = {}): React.JSX.Element => <SimpleView {...params} />,
  },
];

export default routes;
