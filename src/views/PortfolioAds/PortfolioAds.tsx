import React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

import Main from 'layouts/Main';
import Container from 'components/Container';
import { Hero } from './components';
import { CardBlock } from 'views/PortfolioGrid/components/Main/Main';
import { Main as MainSection } from 'views/PortfolioGrid/components';
import { assetPath } from 'src/utils/assetPath';

const cardBlocks = [
      new CardBlock(
        assetPath('assets/ads/card-headers/ad-1.jpg'),
        '3D Mammography Ad',
        '',
        assetPath('assets/ads/ad-1.pdf')
      ),
      new CardBlock(
        assetPath('assets/ads/card-headers/ad-2.jpg'),
        'Cardiology and Vascular Care',
        '',
        assetPath('assets/ads/ad-2.pdf')
      ),
      new CardBlock(
        assetPath('assets/ads/card-headers/ad-3.jpg'),
        'National Doctor\'s Day',
        'Created for national doctor\'s day, this ad was designed to celebrate the hard work and dedication of doctors within our healthcare system.',
        assetPath('assets/ads/ad-3.pdf')
      ),
      new CardBlock(
        assetPath('assets/ads/card-headers/ad-4.jpg'),
        'Cardiologist Ad',
        '',
        assetPath('assets/ads/ad-4.pdf')
      ),
      new CardBlock(
        assetPath('assets/ads/card-headers/ad-5.jpg'),
        'Cardiac Care Ad',
        '',
        assetPath('assets/ads/ad-5.pdf')
      ),
      new CardBlock(
        assetPath('assets/ads/card-headers/ad-6.jpg'),
        'Emergency Room Alternatives Ad',
        '',
        assetPath('assets/ads/ad-6.pdf')
      ),
      new CardBlock(
        assetPath('assets/ads/card-headers/ad-7.jpg'),
        'Cardiac Rehabilitation Ad',
        '',
        assetPath('assets/ads/ad-7.pdf')
      ),
      new CardBlock(
        assetPath('assets/ads/card-headers/ad-8.jpg'),
        'Family Medical Center Ad',
        '',
        assetPath('assets/ads/ad-8.pdf')
      ),
      new CardBlock(
        assetPath('assets/ads/card-headers/ad-9.jpg'),
        'Retirement Community Ad',
        '',
        assetPath('assets/ads/ad-9.pdf')
      ),
      new CardBlock(
        assetPath('assets/ads/card-headers/ad-10.jpg'),
        'Retail Center Ad',
        '',
        assetPath('assets/ads/ad-10.pdf')
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
