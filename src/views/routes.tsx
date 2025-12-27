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
    renderer: (params = {}): JSX.Element => <HomepageView {...params} />,
  },

  // Contact routes
  {
    path: '/about',
    renderer: (params = {}): JSX.Element => <ContactPageView {...params} />,
  },

  // Portfolio routes
  {
    path: '/portfolio-summary',
    renderer: (params = {}): JSX.Element => <PortfolioSummaryView {...params} />,
  },
  {
    path: '/portfolio-ads',
    renderer: (params = {}): JSX.Element => <PortfolioAdsView {...params} />,
  },
  {
    path: '/portfolio-logos',
    renderer: (params = {}): JSX.Element => <PortfolioLogosView {...params} />,
  },
  {
    path: '/portfolio-brochures',
    renderer: (params = {}): JSX.Element => <PortfolioBrochuresView {...params} />,
  },
  {
    path: '/portfolio-technical-illustrations',
    renderer: (params = {}): JSX.Element => <PortfolioTechnicalIllustrationsView {...params} />,
  },
  {
    path: '/portfolio-testimonials',
    renderer: (params = {}): JSX.Element => <PortfolioTestimonialsView {...params} />,
  },
  {
    path: '/portfolio-publications',
    renderer: (params = {}): JSX.Element => <PortfolioPublicationsReportsView {...params} />,
  },
  {
    path: '/campaigns',
    renderer: (params = {}): JSX.Element => <PortfolioCampaigns {...params} />,
  },
  
];

export default routes;
