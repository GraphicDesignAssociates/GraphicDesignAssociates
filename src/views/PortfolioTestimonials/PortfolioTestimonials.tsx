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
        './assets/testimonials/card-headers/testimonial-1.jpg',
        'Testimonial 1',
        'A beautiful view of the mountains during sunset.',
        './assets/testimonials/testimonial-1.pdf',
      ),
      new CardBlock(
        './assets/testimonials/card-headers/testimonial-2.jpg',
        'Testimonial 2',
        'A beautiful view of the mountains during sunset.',
        './assets/testimonials/testimonial-2.pdf',
      ),
      new CardBlock(
        './assets/testimonials/card-headers/testimonial-3.jpg',
        'Testimonial 3',
        'A beautiful view of the mountains during sunset.',
        './assets/testimonials/testimonial-3.pdf',
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
