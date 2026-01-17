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
        assetPath('assets/logos/card-headers/logo-1.jpg'),
        'Logo 1',
        'A beautiful view of the mountains during sunset.',
        assetPath('assets/logos/logo-1.pdf')
      ),
      new CardBlock(
        assetPath('assets/logos/card-headers/logo-2.jpg'),
        'Logo 2',
        'A beautiful view of the mountains during sunset.',
        assetPath('assets/logos/logo-2.pdf')
      ),
      new CardBlock(
        assetPath('assets/logos/card-headers/logo-3.jpg'),
        'Logo 3',
        'A beautiful view of the mountains during sunset.',
        assetPath('assets/logos/logo-3.pdf')
      ),
      new CardBlock(
        assetPath('assets/logos/card-headers/logo-4.jpg'),
        'Logo 4',
        'A beautiful view of the mountains during sunset.',
        assetPath('assets/logos/logo-4.pdf')
      ),
      new CardBlock(
        assetPath('assets/logos/card-headers/logo-5.jpg'),
        'Logo 5',
        'A beautiful view of the mountains during sunset.',
        assetPath('assets/logos/logo-5.pdf')
      ),
      new CardBlock(
        assetPath('assets/logos/card-headers/logo-6.jpg'),
        'Logo 6',
        'A beautiful view of the mountains during sunset.',
        assetPath('assets/logos/logo-6.pdf')
      ),
      new CardBlock(
        assetPath('assets/logos/card-headers/logo-7.jpg'),
        'Logo 7',
        'A beautiful view of the mountains during sunset.',
        assetPath('assets/logos/logo-7.pdf')
      ),
      new CardBlock(
        assetPath('assets/logos/card-headers/logo-8.jpg'),
        'Logo 8',
        'A beautiful view of the mountains during sunset.',
        assetPath('assets/logos/logo-8.pdf')
      ),
      new CardBlock(
        assetPath('assets/logos/card-headers/logo-9.jpg'),
        'Logo 9',
        'A beautiful view of the mountains during sunset.',
        assetPath('assets/logos/logo-9.pdf')
      ),
      new CardBlock(
        assetPath('assets/logos/card-headers/logo-10.jpg'),
        'Logo 10',
        'A beautiful view of the mountains during sunset.',
        assetPath('assets/logos/logo-10.pdf')
      ),
      new CardBlock(
        assetPath('assets/logos/card-headers/logo-11.jpg'),
        'Logo 11',
        'A beautiful view of the mountains during sunset.',
        assetPath('assets/logos/logo-11.pdf')
      ),
      new CardBlock(
        assetPath('assets/logos/card-headers/logo-12.jpg'),
        'Logo 12',
        'A beautiful view of the mountains during sunset.',
        assetPath('assets/logos/logo-12.pdf')
      ),
      new CardBlock(
        assetPath('assets/logos/card-headers/logo-13.jpg'),
        'Logo 13',
        'A beautiful view of the mountains during sunset.',
        assetPath('assets/logos/logo-13.pdf')
      ),
      new CardBlock(
        assetPath('assets/logos/card-headers/logo-14.jpg'),
        'Logo 14',
        'A beautiful view of the mountains during sunset.',
        assetPath('assets/logos/logo-14.pdf')
      ),
      new CardBlock(
        assetPath('assets/logos/card-headers/logo-15.jpg'),
        'Logo 15',
        'A beautiful view of the mountains during sunset.',
        assetPath('assets/logos/logo-15.pdf')
      ),
    ];

const PortfolioLogos = (): JSX.Element => {
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

export default PortfolioLogos;
