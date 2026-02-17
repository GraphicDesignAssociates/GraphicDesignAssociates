import React from 'react';

// Building blocks CTA components
import {
  IndexView as CtaIndexView,
  CtaSimpleCentered as CtaSimpleCenteredView,
  CtaAlignedLeftWithTypedText as CtaAlignedLeftWithTypedTextView,
  CtaWithRightButtons as CtaWithRightButtonsView,
  SupportCenterCta as SupportCenterCtaView,
  CtaWithInputField as CtaWithInputFieldView,
  CtaWithCoverImage as CtaWithCoverImageView,
  CtaWithRightDownloadButton as CtaWithRightDownloadButtonView,
  CtaWithAppStoreButtons as CtaWithAppStoreButtonsView,
  CtaWithIllustration as CtaWithIllustrationView,
  CtaWithRightAppStoreButtons as CtaWithRightAppStoreButtonsView,
} from 'blocks/cta';

const routes = [
  {
    path: '/blocks/cta',
    renderer: (params = {}): React.JSX.Element => <CtaIndexView {...params} />,
  },
  {
    path: '/blocks/cta/cta-simple-centered',
    renderer: (params = {}): React.JSX.Element => (
      <CtaSimpleCenteredView {...params} />
    ),
  },
  {
    path: '/blocks/cta/cta-aligned-left-with-typed-text',
    renderer: (params = {}): React.JSX.Element => (
      <CtaAlignedLeftWithTypedTextView {...params} />
    ),
  },
  {
    path: '/blocks/cta/cta-with-right-buttons',
    renderer: (params = {}): React.JSX.Element => (
      <CtaWithRightButtonsView {...params} />
    ),
  },
  {
    path: '/blocks/cta/support-center-cta',
    renderer: (params = {}): React.JSX.Element => (
      <SupportCenterCtaView {...params} />
    ),
  },
  {
    path: '/blocks/cta/cta-with-input-field',
    renderer: (params = {}): React.JSX.Element => (
      <CtaWithInputFieldView {...params} />
    ),
  },
  {
    path: '/blocks/cta/cta-with-cover-image',
    renderer: (params = {}): React.JSX.Element => (
      <CtaWithCoverImageView {...params} />
    ),
  },
  {
    path: '/blocks/cta/cta-with-right-download-button',
    renderer: (params = {}): React.JSX.Element => (
      <CtaWithRightDownloadButtonView {...params} />
    ),
  },
  {
    path: '/blocks/cta/cta-with-app-store-buttons',
    renderer: (params = {}): React.JSX.Element => (
      <CtaWithAppStoreButtonsView {...params} />
    ),
  },
  {
    path: '/blocks/cta/cta-with-illustration',
    renderer: (params = {}): React.JSX.Element => (
      <CtaWithIllustrationView {...params} />
    ),
  },
  {
    path: '/blocks/cta/cta-with-right-app-store-buttons',
    renderer: (params = {}): React.JSX.Element => (
      <CtaWithRightAppStoreButtonsView {...params} />
    ),
  },
];

export default routes;
