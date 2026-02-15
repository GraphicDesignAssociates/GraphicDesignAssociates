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
        'Three Suns Bistro and Restaurant',
        '',
        assetPath('assets/logos/logo-1.pdf')
      ),
      new CardBlock(
        assetPath('assets/logos/card-headers/logo-2.jpg'),
        'Asuka Japanese Steakhouse',
        '',
        assetPath('assets/logos/logo-2.pdf')
      ),
      new CardBlock(
        assetPath('assets/logos/card-headers/logo-3.jpg'),
        'Beaumont Veterinary Center',
        '',
        assetPath('assets/logos/logo-3.pdf')
      ),
      new CardBlock(
        assetPath('assets/logos/card-headers/logo-4.jpg'),
        'Black Patch Cigar Company',
        '',
        assetPath('assets/logos/logo-4.pdf')
      ),
      new CardBlock(
        assetPath('assets/logos/card-headers/logo-5.jpg'),
        'Bluegrass Healthcare Alliance Co-op',
        '',
        assetPath('assets/logos/logo-5.pdf')
      ),
      new CardBlock(
        assetPath('assets/logos/card-headers/logo-6.jpg'),
        'Buffalo Run Physical Therapy',
        '',
        assetPath('assets/logos/logo-6.pdf')
      ),
      new CardBlock(
        assetPath('assets/logos/card-headers/logo-7.jpg'),
        'Dermontti Dawson Promotional Materials',
        '',
        assetPath('assets/logos/logo-7.pdf')
      ),
      new CardBlock(
        assetPath('assets/logos/card-headers/logo-8.jpg'),
        'Fazoli\'s Fast Food Restaurant Logo',
        '',
        assetPath('assets/logos/logo-8.pdf')
      ),
      new CardBlock(
        assetPath('assets/logos/card-headers/logo-9.jpg'),
        'Helping His Kids Christmas Charity Foundation',
        '',
        assetPath('assets/logos/logo-9.pdf')
      ),
      new CardBlock(
        assetPath('assets/logos/card-headers/logo-10.jpg'),
        'The Red Mile',
        '',
        assetPath('assets/logos/logo-10.pdf')
      ),
      new CardBlock(
        assetPath('assets/logos/card-headers/logo-11.jpg'),
        'Signet Systems',
        '',
        assetPath('assets/logos/logo-11.pdf')
      ),
      new CardBlock(
        assetPath('assets/logos/card-headers/logo-12.jpg'),
        'Spirit\'s Liquor',
        '',
        assetPath('assets/logos/logo-12.pdf')
      ),
      new CardBlock(
        assetPath('assets/logos/card-headers/logo-13.jpg'),
        'Tyler and Jade Hughes Homes LLC.',
        '',
        assetPath('assets/logos/logo-13.pdf')
      ),
      new CardBlock(
        assetPath('assets/logos/card-headers/logo-14.jpg'),
        'Wings and a Slice',
        '',
        assetPath('assets/logos/logo-14.pdf')
      ),
      new CardBlock(
        assetPath('assets/logos/card-headers/logo-15.jpg'),
        'Zones Fitness',
        '',
        assetPath('assets/logos/logo-15.pdf')
      ),
    ];

const PortfolioLogos = (): JSX.Element => {
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

export default PortfolioLogos;
