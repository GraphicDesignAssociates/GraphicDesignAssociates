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
        assetPath('assets/tech-illustrations/card-headers/tech-illustration-1.jpg'),
        'Mopar Dealer After-Market Dealer Installation Instructions',
        '',
        assetPath('assets/tech-illustrations/tech-illustration-1.pdf')
      ),
      new CardBlock(
        assetPath('assets/tech-illustrations/card-headers/tech-illustration-2.jpg'),
        'Ford Dealer After-Market Dealer Installation Instructions',
        '',
        assetPath('assets/tech-illustrations/tech-illustration-2.pdf')
      ),
      new CardBlock(
        assetPath('assets/tech-illustrations/card-headers/tech-illustration-3.jpg'),
        'Ford Dealer After-Market Dealer Installation Instructions',
        '',
        assetPath('assets/tech-illustrations/tech-illustration-3.pdf')
      ),
      new CardBlock(
        assetPath('assets/tech-illustrations/card-headers/tech-illustration-4.jpg'),
        'Ford Manual Illustrations',
        '',
        assetPath('assets/tech-illustrations/tech-illustration-4.pdf')
      ),
      new CardBlock(
        assetPath('assets/tech-illustrations/card-headers/tech-illustration-5.jpg'),
        'Ford Manual Illustrations',
        '',
        assetPath('assets/tech-illustrations/tech-illustration-5.pdf')
      ),
      new CardBlock(
        assetPath('assets/tech-illustrations/card-headers/tech-illustration-6.jpg'),
        'Porcelain Insulator Cap',
        '',
        assetPath('assets/tech-illustrations/tech-illustration-6.pdf')
      ),
      new CardBlock(
        assetPath('assets/tech-illustrations/card-headers/tech-illustration-7.jpg'),
        'Kenmore Vaccum Cleaner',
        '',
        assetPath('assets/tech-illustrations/tech-illustration-7.pdf')
      ),
      new CardBlock(
        assetPath('assets/tech-illustrations/card-headers/tech-illustration-8.jpg'),
        'Panasonic Vaccum Cleaner',
        '',
        assetPath('assets/tech-illustrations/tech-illustration-8.pdf')
      ),
      new CardBlock(
        assetPath('assets/tech-illustrations/card-headers/tech-illustration-9.jpg'),
        'Ford Bezel Modification',
        '',
        assetPath('assets/tech-illustrations/tech-illustration-9.pdf')
      ),
    ];

const PortfolioTechnicalIllustrations = (): JSX.Element => {
  const theme = useTheme();
  return (
    <Main>
      <Container paddingY={0} paddingTop={{ xs: 4, sm: 6, md: 8 }}>
        <Hero />
      </Container>
      <Container>
        <MainSection cardBlocks={cardBlocks} />
      </Container>
    </Main>
  );
};

export default PortfolioTechnicalIllustrations;
