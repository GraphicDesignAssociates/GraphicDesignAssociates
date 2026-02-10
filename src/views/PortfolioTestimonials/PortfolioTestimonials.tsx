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
        assetPath('assets/testimonials/card-headers/testimonial-1.jpg'),
        'Ephraim McDowell Health',
        'Danville, KY',
        assetPath('assets/testimonials/testimonial-1.pdf'),
      ),
      new CardBlock(
        assetPath('assets/testimonials/card-headers/testimonial-2.jpg'),
        'Parker Seals Corporation',
        'Lexington, KY',
        assetPath('assets/testimonials/testimonial-2.pdf'),
      ),
      new CardBlock(
        assetPath('assets/testimonials/card-headers/testimonial-3.jpg'),
        'Modine Climate Systems',
        'Harrodsburg, KY',
        assetPath('assets/testimonials/testimonial-3.pdf'),
      ),
    ];

const PortfolioTestimonials = (): JSX.Element => {
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

export default PortfolioTestimonials;
