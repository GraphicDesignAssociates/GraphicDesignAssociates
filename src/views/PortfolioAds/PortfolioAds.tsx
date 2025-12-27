import React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

import Main from 'layouts/Main';
import Container from 'components/Container';
import { Hero } from './components';
import { CardBlock } from 'views/PortfolioGrid/components/Main/Main';
import { Main as MainSection } from 'views/PortfolioGrid/components';

const cardBlocks = [
      new CardBlock(
        '/assets/ads/card-headers/ad-1.jpg',
        'Ad 1',
        'A beautiful view of the mountains during sunset.',
        '/assets/ads/ad-1.pdf'
      ),
      new CardBlock(
        '/assets/ads/card-headers/ad-2.jpg',
        'Ad 2',
        'A beautiful view of the mountains during sunset.',
        '/assets/ads/ad-2.pdf'
      ),
      new CardBlock(
        '/assets/ads/card-headers/ad-3.jpg',
        'Ad 3',
        'A beautiful view of the mountains during sunset.',
        '/assets/ads/ad-3.pdf'
      ),
      new CardBlock(
        '/assets/ads/card-headers/ad-4.jpg',
        'Ad 4',
        'A beautiful view of the mountains during sunset.',
        '/assets/ads/ad-4.pdf'
      ),
      new CardBlock(
        '/assets/ads/card-headers/ad-5.jpg',
        'Ad 5',
        'A beautiful view of the mountains during sunset.',
        '/assets/ads/ad-5.pdf'
      ),
      new CardBlock(
        '/assets/ads/card-headers/ad-6.jpg',
        'Ad 6',
        'A beautiful view of the mountains during sunset.',
        '/assets/ads/ad-6.pdf'
      ),
      new CardBlock(
        '/assets/ads/card-headers/ad-7.jpg',
        'Ad 7',
        'A beautiful view of the mountains during sunset.',
        '/assets/ads/ad-7.pdf'
      ),
      new CardBlock(
        '/assets/ads/card-headers/ad-8.jpg',
        'Ad 8',
        'A beautiful view of the mountains during sunset.',
        '/assets/ads/ad-8.pdf'
      ),
      new CardBlock(
        '/assets/ads/card-headers/ad-9.jpg',
        'Ad 9',
        'A beautiful view of the mountains during sunset.',
        '/assets/ads/ad-9.pdf'
      ),
      new CardBlock(
        '/assets/ads/card-headers/ad-10.jpg',
        'Ad 10',
        'A beautiful view of the mountains during sunset.',
        '/assets/ads/ad-10.pdf'
      ),
    ];

const PortfolioAds = (): JSX.Element => {
  const theme = useTheme();
  return (
    <Main>
      <Container>
        <Hero />
      </Container>
      <Container>
        <MainSection cardBlocks={cardBlocks} />
      </Container>
    </Main>
  );
};

export default PortfolioAds;
