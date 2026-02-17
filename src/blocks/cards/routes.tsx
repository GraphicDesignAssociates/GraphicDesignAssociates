import React from 'react';

// Building blocks Cards components
import {
  IndexView as CardsIndexView,
  CardWithColorAccent as CardWithColorAccentView,
  CardWithCheckboxes as CardWithCheckboxesView,
  CardWithAddButton as CardWithAddButtonView,
} from 'blocks/cards';

const routes = [
  {
    path: '/blocks/cards',
    renderer: (params = {}): React.JSX.Element => <CardsIndexView {...params} />,
  },
  {
    path: '/blocks/cards/card-with-color-accent',
    renderer: (params = {}): React.JSX.Element => (
      <CardWithColorAccentView {...params} />
    ),
  },
  {
    path: '/blocks/cards/card-with-checkboxes',
    renderer: (params = {}): React.JSX.Element => (
      <CardWithCheckboxesView {...params} />
    ),
  },
  {
    path: '/blocks/cards/card-with-add-button',
    renderer: (params = {}): React.JSX.Element => (
      <CardWithAddButtonView {...params} />
    ),
  },
];

export default routes;
