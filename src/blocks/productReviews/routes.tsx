import React from 'react';

// Building blocks productReviews components
import {
  IndexView as ProductReviewsIndexView,
  ReviewDialog as ReviewDialogView,
  ReviewOverview as ReviewOverviewView,
  ReviewQuickOverview as ReviewQuickOverviewView,
} from 'blocks/productReviews';

const routes = [
  {
    path: '/blocks/product-reviews',
    renderer: (params = {}): React.JSX.Element => (
      <ProductReviewsIndexView {...params} />
    ),
  },
  {
    path: '/blocks/product-reviews/review-dialog',
    renderer: (params = {}): React.JSX.Element => <ReviewDialogView {...params} />,
  },
  {
    path: '/blocks/product-reviews/review-overview',
    renderer: (params = {}): React.JSX.Element => <ReviewOverviewView {...params} />,
  },
  {
    path: '/blocks/product-reviews/review-quick-overview',
    renderer: (params = {}): React.JSX.Element => (
      <ReviewQuickOverviewView {...params} />
    ),
  },
];

export default routes;
