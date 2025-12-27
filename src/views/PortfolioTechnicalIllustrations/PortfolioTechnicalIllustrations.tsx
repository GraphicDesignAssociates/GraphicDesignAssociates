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
        './assets/tech-illustrations/card-headers/tech-illustration-1.jpg',
        'Technical Illustration 1',
        'A beautiful view of the mountains during sunset.',
        './assets/tech-illustrations/tech-illustration-1.jpg'
      ),
      new CardBlock(
        './assets/tech-illustrations/card-headers/tech-illustration-2.jpg',
        'Technical Illustration 2',
        'A beautiful view of the mountains during sunset.',
        './assets/tech-illustrations/tech-illustration-2.pdf'
      ),
      new CardBlock(
        './assets/tech-illustrations/card-headers/tech-illustration-3.jpg',
        'Technical Illustration 3',
        'A beautiful view of the mountains during sunset.',
        './assets/tech-illustrations/tech-illustration-3.jpg'
      ),
      new CardBlock(
        './assets/tech-illustrations/card-headers/tech-illustration-4.jpg',
        'Technical Illustration 4',
        'A beautiful view of the mountains during sunset.',
        './assets/tech-illustrations/tech-illustration-4.jpg'
      ),
      new CardBlock(
        './assets/tech-illustrations/card-headers/tech-illustration-5.jpg',
        'Technical Illustration 5',
        'A beautiful view of the mountains during sunset.',
        './assets/tech-illustrations/tech-illustration-5.jpg'
      ),
      new CardBlock(
        './assets/tech-illustrations/card-headers/tech-illustration-6.jpg',
        'Technical Illustration 6',
        'A beautiful view of the mountains during sunset.',
        './assets/tech-illustrations/tech-illustration-6.jpg'
      ),
      new CardBlock(
        './assets/tech-illustrations/card-headers/tech-illustration-7.jpg',
        'Technical Illustration 7',
        'A beautiful view of the mountains during sunset.',
        './assets/tech-illustrations/tech-illustration-7.jpg'
      ),
      new CardBlock(
        './assets/tech-illustrations/card-headers/tech-illustration-8.jpg',
        'Technical Illustration 8',
        'A beautiful view of the mountains during sunset.',
        './assets/tech-illustrations/tech-illustration-8.jpg'
      ),
      new CardBlock(
        './assets/tech-illustrations/card-headers/tech-illustration-9.jpg',
        'Technical Illustration 9',
        'A beautiful view of the mountains during sunset.',
        './assets/tech-illustrations/tech-illustration-9.jpg'
      ),
    ];

const PortfolioTechnicalIllustrations = (): JSX.Element => {
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

export default PortfolioTechnicalIllustrations;
