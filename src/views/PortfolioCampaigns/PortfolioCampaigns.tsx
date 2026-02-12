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
        assetPath('assets/campaigns/card-headers/campaigns-1.jpg'),
        'Applebee\'s Curbside Service',
        '',
        assetPath('assets/campaigns/campaigns-1.pdf'),
      ),
      new CardBlock(
        assetPath('assets/campaigns/card-headers/campaigns-2.jpg'),
        'Applebee\'s Takeout Menu',
        '',
        assetPath('assets/campaigns/campaigns-2.pdf'),
      ),
      new CardBlock(
        assetPath('assets/campaigns/card-headers/campaigns-3.jpg'),
        'Long John Silver\'s Coupon Flyer',
        'Michael Jackson\'s "Thriller" was the inspiration for this campaign, which was designed to promote Long John Silver\'s chilled seafood menu.',
        assetPath('assets/campaigns/campaigns-3.pdf'),
      ),
      new CardBlock(
        assetPath('assets/campaigns/card-headers/campaigns-4.jpg'),
        'Long John Silver\'s Header Card',
        '',
        assetPath('assets/campaigns/campaigns-4.pdf'),
      ),
      new CardBlock(
        assetPath('assets/campaigns/card-headers/campaigns-5.jpg'),
        'Long John Silver\'s Point of Purchase',
        '',
        assetPath('assets/campaigns/campaigns-5.pdf'),
      ),
      new CardBlock(
        assetPath('assets/campaigns/card-headers/campaigns-6.jpg'),
        'Long John Silver\'s Point of Purchase',
        '',
        assetPath('assets/campaigns/campaigns-6.pdf'),
      ),
      new CardBlock(
        assetPath('assets/campaigns/card-headers/campaigns-7.jpg'),
        'Long John Silver\'s Billboard',
        '',
        assetPath('assets/campaigns/campaigns-7.pdf'),
      ),
      new CardBlock(
        assetPath('assets/campaigns/card-headers/campaigns-8.jpg'),
        'Kentucky Wine and Vine Festival',
        'Kentucky Wine and Vine Festival was the inspiration for this campaign, which was designed to promote the festival\'s events and activities.',
        assetPath('assets/campaigns/campaigns-8.pdf'),
      ),
      new CardBlock(
        assetPath('assets/campaigns/card-headers/campaigns-9.jpg'),
        'Wings and a Slice',
        'Carry out menu design for Wings and a Slice\'s multiple menu items.',
        assetPath('assets/campaigns/campaigns-9.pdf'),
      ),
    ];

const PortfolioCampaigns = (): JSX.Element => {
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

export default PortfolioCampaigns;
