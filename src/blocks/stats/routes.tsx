import React from 'react';

// Building blocks Stats components
import {
  IndexView as StatsIndexView,
  WithCountUpNumbersAndCoverImage as WithCountUpNumbersAndCoverImageView,
  WithCountUpNumbersAndMap as WithCountUpNumbersAndMapView,
  StatsWithCard as StatsWithCardView,
  WithBorderedCardsAndBrandColor as WithBorderedCardsAndBrandColorView,
  WithAbstractVisualRepresentation as WithAbstractVisualRepresentationView,
  ClientSatisfaction as ClientSatisfactionView,
} from 'blocks/stats';

const routes = [
  {
    path: '/blocks/stats',
    renderer: (params = {}): React.JSX.Element => <StatsIndexView {...params} />,
  },
  {
    path: '/blocks/stats/with-count-up-numbers-and-cover-image',
    renderer: (params = {}): React.JSX.Element => (
      <WithCountUpNumbersAndCoverImageView {...params} />
    ),
  },
  {
    path: '/blocks/stats/with-count-up-numbers-and-map',
    renderer: (params = {}): React.JSX.Element => (
      <WithCountUpNumbersAndMapView {...params} />
    ),
  },
  {
    path: '/blocks/stats/stats-with-card',
    renderer: (params = {}): React.JSX.Element => <StatsWithCardView {...params} />,
  },
  {
    path: '/blocks/stats/with-bordered-cards-and-brand-color',
    renderer: (params = {}): React.JSX.Element => (
      <WithBorderedCardsAndBrandColorView {...params} />
    ),
  },
  {
    path: '/blocks/stats/with-abstract-visual-representation',
    renderer: (params = {}): React.JSX.Element => (
      <WithAbstractVisualRepresentationView {...params} />
    ),
  },
  {
    path: '/blocks/stats/client-satisfaction',
    renderer: (params = {}): React.JSX.Element => (
      <ClientSatisfactionView {...params} />
    ),
  },
];

export default routes;
