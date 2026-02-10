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
        assetPath('assets/pub-annuals/card-headers/pub-annual-1.jpg'),
        'Kentucky Motor Transportation Association',
        'Frankfort, KY',
        assetPath('assets/pub-annuals/pub-annual-1.pdf'),
      ),
      new CardBlock(
        assetPath('assets/pub-annuals/card-headers/pub-annual-2.jpg'),
        'Ephriam McDowell Health Community Report',
        'Danville, KY',
        assetPath('assets/pub-annuals/pub-annual-2.pdf'),
      ),
      new CardBlock(
        assetPath('assets/pub-annuals/card-headers/pub-annual-3.jpg'),
        'Ephriam McDowell Health Community Report',
        'Danville, KY',
        assetPath('assets/pub-annuals/pub-annual-3.pdf'),
      ),
      new CardBlock(
        assetPath('assets/pub-annuals/card-headers/pub-annual-4.jpg'),
        'Ephriam McDowell Health Community Report',
        'Danville, KY',
        assetPath('assets/pub-annuals/pub-annual-4.pdf'),
      ),
      new CardBlock(
        assetPath('assets/pub-annuals/card-headers/pub-annual-5.jpg'),
        'Ephriam McDowell Health Community Report',
        'Danville, KY',
        assetPath('assets/pub-annuals/pub-annual-5.pdf'),
      ),
      new CardBlock(
        assetPath('assets/pub-annuals/card-headers/pub-annual-6.jpg'),
        'Ephriam McDowell Health Physician\'s Directory',
        'Danville, KY',
        assetPath('assets/pub-annuals/pub-annual-6.pdf'),
      ),
      new CardBlock(
        assetPath('assets/pub-annuals/card-headers/pub-annual-7.jpg'),
        'Ephriam McDowell Health Physician\'s Directory',
        'Danville, KY',
        assetPath('assets/pub-annuals/pub-annual-7.pdf'),
      ),
      new CardBlock(
        assetPath('assets/pub-annuals/card-headers/pub-annual-8.jpg'),
        'Ephriam McDowell Health Source Magazine',
        'Danville, KY',
        assetPath('assets/pub-annuals/pub-annual-8.pdf'),
      ),
      new CardBlock(
        assetPath('assets/pub-annuals/card-headers/pub-annual-9.jpg'),
        'Ephriam McDowell Health Source Magazine',
        'Danville, KY',
        assetPath('assets/pub-annuals/pub-annual-9.pdf'),
      ),
      new CardBlock(
        assetPath('assets/pub-annuals/card-headers/pub-annual-10.jpg'),
        'Ephriam McDowell Bariatric Surgery Publication',
        'Danville, KY',
        assetPath('assets/pub-annuals/pub-annual-10.pdf'),
      ),
    ];

const PortfolioPublicationsReports = (): JSX.Element => {
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

export default PortfolioPublicationsReports;
