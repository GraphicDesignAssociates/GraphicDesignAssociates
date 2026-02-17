import React from 'react';

import {
  Homepage as HomepageView,
  ContactPage as ContactPageView,
  PortfolioSummary as PortfolioSummaryView,
  PortfolioAds as PortfolioAdsView,
  PortfolioLogos as PortfolioLogosView,
  PortfolioBrochures as PortfolioBrochuresView,
  PortfolioTechnicalIllustrations as PortfolioTechnicalIllustrationsView,
  PortfolioTestimonials as PortfolioTestimonialsView,
  PortfolioPublicationsReports as PortfolioPublicationsReportsView,
} from 'views';
import PortfolioCampaigns from './PortfolioCampaigns';

const routes = [
  // Index route
  {
    path: '/',
    renderer: (params = {}): React.JSX.Element => <HomepageView {...params} />,
  },

  // Contact routes
  {
    path: '/about',
    renderer: (params = {}): React.JSX.Element => <ContactPageView {...params} />,
  },

  // Portfolio routes
  {
    path: '/portfolio-summary',
    renderer: (params = {}): React.JSX.Element => <PortfolioSummaryView {...params} />,
  },
  {
    path: '/portfolio-ads',
    renderer: (params = {}): React.JSX.Element => <PortfolioAdsView {...params} />,
  },
  {
    path: '/portfolio-logos',
    renderer: (params = {}): React.JSX.Element => <PortfolioLogosView {...params} />,
  },
  {
    path: '/portfolio-brochures',
    renderer: (params = {}): React.JSX.Element => <PortfolioBrochuresView {...params} />,
  },
  {
    path: '/portfolio-technical-illustrations',
    renderer: (params = {}): React.JSX.Element => <PortfolioTechnicalIllustrationsView {...params} />,
  },
  {
    path: '/portfolio-testimonials',
    renderer: (params = {}): React.JSX.Element => <PortfolioTestimonialsView {...params} />,
  },
  {
    path: '/portfolio-publications',
    renderer: (params = {}): React.JSX.Element => <PortfolioPublicationsReportsView {...params} />,
  },
  {
    path: '/campaigns',
    renderer: (params = {}): React.JSX.Element => <PortfolioCampaigns {...params} />,
  },
  
];

export default routes;
