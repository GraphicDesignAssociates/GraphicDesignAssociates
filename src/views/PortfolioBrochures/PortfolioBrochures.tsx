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
        'Kenneland Health Education Center Annex',
        '',
        assetPath('assets/brochures/brochure-1.pdf'),
      ),
      new CardBlock(
        assetPath('assets/brochures/card-headers/brochure-2.jpg'),
        'Health Symposium',
        '',
        assetPath('assets/brochures/brochure-2.pdf'),
      ),
      new CardBlock(
        assetPath('assets/brochures/card-headers/brochure-3.jpg'),
        'Hearing and Speech Center',
        '',
        assetPath('assets/brochures/brochure-3.pdf'),
      ),
      new CardBlock(
        assetPath('assets/brochures/card-headers/brochure-4.jpg'),
        'Pediatric Therapy Services',
        '',
        assetPath('assets/brochures/brochure-4.pdf'),
      ),
      new CardBlock(
        assetPath('assets/brochures/card-headers/brochure-5.jpg'),
        'Cardiac Rehabilitation - Phase 1',
        '',
        assetPath('assets/brochures/brochure-5.pdf'),
      ),
      new CardBlock(
        assetPath('assets/brochures/card-headers/brochure-6.jpg'),
        'Behavioral Health Services',
        '',
        assetPath('assets/brochures/brochure-6.pdf'),
      ),
      new CardBlock(
        assetPath('assets/brochures/card-headers/brochure-7.jpg'),
        'Women\'s Health Services',
        '',
        assetPath('assets/brochures/brochure-7.pdf'),
      ),
      new CardBlock(
        assetPath('assets/brochures/card-headers/brochure-8.jpg'),
        'Trane - Air Handling Systems',
        '',
        assetPath('assets/brochures/brochure-8.pdf'),
      ),
      new CardBlock(
        assetPath('assets/brochures/card-headers/brochure-9.jpg'),
        'Midway College - Financial Aid Brochure',
        '',
        assetPath('assets/brochures/brochure-9.pdf'),
      ),
      new CardBlock(
        assetPath('assets/brochures/card-headers/brochure-10.jpg'),
        'Parker Seals - O-Ring Division',
        '',
        assetPath('assets/brochures/brochure-10.pdf'),
      ),
      new CardBlock(
        assetPath('assets/brochures/card-headers/brochure-11.jpg'),
        'Studio Players - Season Schedule',
        '',
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
