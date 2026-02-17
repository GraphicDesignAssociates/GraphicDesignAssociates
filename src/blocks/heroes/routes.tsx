import React from 'react';

// Building blocks Hero components
import {
  IndexView as HeroIndexView,
  FullScreenHeroWithImageSlider as FullScreenHeroWithImageSliderView,
  FullScreenHeroWithPromoImagesAndTypedText as FullScreenHeroWithPromoImagesAndTypedTextView,
  HeroWithFormAndBackgroundGradient as HeroWithFormAndBackgroundGradientView,
  HeroForEcommerceApp as HeroForEcommerceAppView,
  FullScreenHeroWithSubscriptionForm as FullScreenHeroWithSubscriptionFormView,
  HeroWithIllustrationAndSearchBar as HeroWithIllustrationAndSearchBarView,
  HeroWithMobileAppScreenshot as HeroWithMobileAppScreenshotView,
  HeroWithDashboardScreenshotAndCta as HeroWithDashboardScreenshotAndCtaView,
  SimpleHeroWithSearchBox as SimpleHeroWithSearchBoxView,
  SimpleHeroWithCta as SimpleHeroWithCtaView,
  HeroWithIllustrationAndCta as HeroWithIllustrationAndCtaView,
  HeroWithLogoGridAndDesktopScreenshot as HeroWithLogoGridAndDesktopScreenshotView,
  HeroWithBackgroundVideo as HeroWithBackgroundVideoView,
  SimpleHeroWithBottomVideo as SimpleHeroWithBottomVideoView,
  HeroWithPrimaryBackgroundAndDesktopScreenshot as HeroWithPrimaryBackgroundAndDesktopScreenshotView,
  FullScreenHeroWithLogoGrid as FullScreenHeroWithLogoGridView,
  SimpleHeroWithImageAndCtaButtons as SimpleHeroWithImageAndCtaButtonsView,
} from 'blocks/heroes';

const routes = [
  {
    path: '/blocks/heroes',
    renderer: (params = {}): React.JSX.Element => <HeroIndexView {...params} />,
  },
  {
    path: '/blocks/heroes/full-screen-hero-with-promo-images-and-typed-text',
    renderer: (params = {}): React.JSX.Element => (
      <FullScreenHeroWithPromoImagesAndTypedTextView {...params} />
    ),
  },
  {
    path: '/blocks/heroes/full-screen-hero-with-image-slider',
    renderer: (params = {}): React.JSX.Element => (
      <FullScreenHeroWithImageSliderView {...params} />
    ),
  },
  {
    path: '/blocks/heroes/hero-with-form-and-background-gradient',
    renderer: (params = {}): React.JSX.Element => (
      <HeroWithFormAndBackgroundGradientView {...params} />
    ),
  },
  {
    path: '/blocks/heroes/hero-for-ecommerce-app',
    renderer: (params = {}): React.JSX.Element => (
      <HeroForEcommerceAppView {...params} />
    ),
  },
  {
    path: '/blocks/heroes/full-screen-hero-with-subscription-form',
    renderer: (params = {}): React.JSX.Element => (
      <FullScreenHeroWithSubscriptionFormView {...params} />
    ),
  },
  {
    path: '/blocks/heroes/hero-with-illustration-and-search-bar',
    renderer: (params = {}): React.JSX.Element => (
      <HeroWithIllustrationAndSearchBarView {...params} />
    ),
  },
  {
    path: '/blocks/heroes/hero-with-mobile-app-screenshot',
    renderer: (params = {}): React.JSX.Element => (
      <HeroWithMobileAppScreenshotView {...params} />
    ),
  },
  {
    path: '/blocks/heroes/hero-with-dashboard-screenshot-and-cta',
    renderer: (params = {}): React.JSX.Element => (
      <HeroWithDashboardScreenshotAndCtaView {...params} />
    ),
  },
  {
    path: '/blocks/heroes/simple-hero-with-search-box',
    renderer: (params = {}): React.JSX.Element => (
      <SimpleHeroWithSearchBoxView {...params} />
    ),
  },
  {
    path: '/blocks/heroes/simple-hero-with-cta',
    renderer: (params = {}): React.JSX.Element => (
      <SimpleHeroWithCtaView {...params} />
    ),
  },
  {
    path: '/blocks/heroes/hero-with-illustration-and-cta',
    renderer: (params = {}): React.JSX.Element => (
      <HeroWithIllustrationAndCtaView {...params} />
    ),
  },
  {
    path: '/blocks/heroes/hero-with-logo-grid-and-desktop-screenshot',
    renderer: (params = {}): React.JSX.Element => (
      <HeroWithLogoGridAndDesktopScreenshotView {...params} />
    ),
  },
  {
    path: '/blocks/heroes/hero-with-background-video',
    renderer: (params = {}): React.JSX.Element => (
      <HeroWithBackgroundVideoView {...params} />
    ),
  },
  {
    path: '/blocks/heroes/simple-hero-with-bottom-video',
    renderer: (params = {}): React.JSX.Element => (
      <SimpleHeroWithBottomVideoView {...params} />
    ),
  },
  {
    path: '/blocks/heroes/hero-with-primary-background-and-desktop-screenshot',
    renderer: (params = {}): React.JSX.Element => (
      <HeroWithPrimaryBackgroundAndDesktopScreenshotView {...params} />
    ),
  },
  {
    path: '/blocks/heroes/full-screen-hero-with-logo-grid',
    renderer: (params = {}): React.JSX.Element => (
      <FullScreenHeroWithLogoGridView {...params} />
    ),
  },
  {
    path: '/blocks/heroes/simple-hero-with-image-and-cta-buttons',
    renderer: (params = {}): React.JSX.Element => (
      <SimpleHeroWithImageAndCtaButtonsView {...params} />
    ),
  },
];

export default routes;
