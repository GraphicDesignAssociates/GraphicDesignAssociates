import React from 'react';

// Building blocks Sidebars components
import {
  IndexView as SidebarsIndexView,
  Simple as SimpleView,
  WithDarkBg as WithDarkBgView,
  WithCollapsibleMenuItems as WithCollapsibleMenuItemsView,
} from 'blocks/sidebars';

const routes = [
  {
    path: '/blocks/sidebars',
    renderer: (params = {}): React.JSX.Element => <SidebarsIndexView {...params} />,
  },
  {
    path: '/blocks/sidebars/simple',
    renderer: (params = {}): React.JSX.Element => <SimpleView {...params} />,
  },
  {
    path: '/blocks/sidebars/with-dark-bg',
    renderer: (params = {}): React.JSX.Element => <WithDarkBgView {...params} />,
  },
  {
    path: '/blocks/sidebars/with-collapsible-menu-items',
    renderer: (params = {}): React.JSX.Element => (
      <WithCollapsibleMenuItemsView {...params} />
    ),
  },
];

export default routes;
