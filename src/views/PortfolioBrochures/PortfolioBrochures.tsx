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
        assetPath('assets/brochures/card-headers/brochure-1.jpg'),
        'Brochure 1',
        'A beautiful view of the mountains during sunset.',
        assetPath('assets/brochures/brochure-1.pdf'),
      ),
      new CardBlock(
        assetPath('assets/brochures/card-headers/brochure-2.jpg'),
        'Brochure 2',
        'A beautiful view of the mountains during sunset.',
        assetPath('assets/brochures/brochure-2.pdf'),
      ),
      new CardBlock(
        assetPath('assets/brochures/card-headers/brochure-3.jpg'),
        'Brochure 3',
        'A beautiful view of the mountains during sunset.',
        assetPath('assets/brochures/brochure-3.pdf'),
      ),
      new CardBlock(
        assetPath('assets/brochures/card-headers/brochure-4.jpg'),
        'Brochure 4',
        'A beautiful view of the mountains during sunset.',
        assetPath('assets/brochures/brochure-4.pdf'),
      ),
      new CardBlock(
        assetPath('assets/brochures/card-headers/brochure-5.jpg'),
        'Brochure 5',
        'A beautiful view of the mountains during sunset.',
        assetPath('assets/brochures/brochure-5.pdf'),
      ),
      new CardBlock(
        assetPath('assets/brochures/card-headers/brochure-6.jpg'),
        'Brochure 6',
        'A beautiful view of the mountains during sunset.',
        assetPath('assets/brochures/brochure-6.pdf'),
      ),
      new CardBlock(
        assetPath('assets/brochures/card-headers/brochure-7.jpg'),
        'Brochure 7',
        'A beautiful view of the mountains during sunset.',
        assetPath('assets/brochures/brochure-7.pdf'),
      ),
      new CardBlock(
        assetPath('assets/brochures/card-headers/brochure-8.jpg'),
        'Brochure 8',
        'A beautiful view of the mountains during sunset.',
        assetPath('assets/brochures/brochure-8.pdf'),
      ),
      new CardBlock(
        assetPath('assets/brochures/card-headers/brochure-9.jpg'),
        'Brochure 9',
        'A beautiful view of the mountains during sunset.',
        assetPath('assets/brochures/brochure-9.pdf'),
      ),
      new CardBlock(
        assetPath('assets/brochures/card-headers/brochure-10.jpg'),
        'Brochure 10',
        'A beautiful view of the mountains during sunset.',
        assetPath('assets/brochures/brochure-10.pdf'),
      ),
      new CardBlock(
        assetPath('assets/brochures/card-headers/brochure-11.jpg'),
        'Brochure 11',
        'A beautiful view of the mountains during sunset.',
        assetPath('assets/brochures/brochure-11.pdf'),
      ),
    ];

const PortfolioBrochures = (): JSX.Element => {
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

export default PortfolioBrochures;
