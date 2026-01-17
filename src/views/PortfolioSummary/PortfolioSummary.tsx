import React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

import Main from 'layouts/Main';
import Container from 'components/Container';
import { Hero, Partners } from './components';
import { CardBlock } from 'views/PortfolioGrid/components/Main/Main';
import { Main as MainSection } from 'views/PortfolioGrid/components';
import { assetPath } from 'src/utils/assetPath';

const cardBlocks = [
      new CardBlock(
        assetPath('assets/homepage/Dr Nool.jpg'),
        'Ads',
        '',
        window.location.origin + '/portfolio-ads',
      ),
      new CardBlock(
        assetPath('assets/homepage/brochure-header.jpg'),
        'Brochures',
        'A beautiful view of the mountains during sunset.',
        window.location.origin + '/portfolio-brochures',
      ),
      new CardBlock(
        assetPath('assets/homepage/logos-header.jpg'),
        'Logos',
        'A beautiful view of the mountains during sunset.',
        window.location.origin + '/portfolio-logos',
      ),
      new CardBlock(
        assetPath('assets/homepage/tech-ill-header.jpg'),
        'Technical Illustrations',
        'A beautiful view of the mountains during sunset.',
        window.location.origin + '/portfolio-technical-illustrations',
      ),
      new CardBlock(
        assetPath('assets/homepage/testemonial-header.jpg'),
        'Testimonials',
        'A beautiful view of the mountains during sunset.',
        window.location.origin + '/portfolio-testimonials',
      ),
      new CardBlock(
        assetPath('assets/homepage/pub-annual-header.jpg'),
        'Publications / Annual Reports',
        'A beautiful view of the mountains during sunset.',
        window.location.origin + '/portfolio-publications',
      ),
    ];

const PortfolioSummary = (): JSX.Element => {
  const theme = useTheme();
  return (
    <Main>
      <Container>
        <Hero />
      </Container>
      <Container paddingY={'0 !important'}>
        <Partners />
      </Container>
      <Container>
        <MainSection cardBlocks={cardBlocks} />
      </Container>
      <Box
        position={'relative'}
        marginTop={{ xs: 4, md: 6 }}
        sx={{
          backgroundColor: theme.palette.alternate.main,
        }}
      >
        <Box
          component={'svg'}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1920 100.1"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            transform: 'translateY(-50%)',
            zIndex: 2,
            width: 1,
          }}
        >
        </Box>
      </Box>
    </Main>
  );
};

export default PortfolioSummary;
