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
        './assets/campaigns/card-headers/campaigns-1.jpg',
        'Campaigns 1',
        'A beautiful view of the mountains during sunset.',
        './assets/campaigns/campaigns-1.pdf',
      ),
      new CardBlock(
        './assets/campaigns/card-headers/campaigns-2.jpg',
        'Campaigns 2',
        'A beautiful view of the mountains during sunset.',
        './assets/campaigns/campaigns-2.pdf',
      ),
      new CardBlock(
        './assets/campaigns/card-headers/campaigns-3.jpg',
        'Campaigns 3',
        'A beautiful view of the mountains during sunset.',
        './assets/campaigns/campaigns-3.pdf',
      ),
      new CardBlock(
        './assets/campaigns/card-headers/campaigns-4.jpg',
        'Campaigns 4',
        'A beautiful view of the mountains during sunset.',
        './assets/campaigns/campaigns-4.pdf',
      ),
      new CardBlock(
        './assets/campaigns/card-headers/campaigns-5.jpg',
        'Campaigns 5',
        'A beautiful view of the mountains during sunset.',
        './assets/campaigns/campaigns-5.pdf',
      ),
      new CardBlock(
        './assets/campaigns/card-headers/campaigns-6.jpg',
        'Campaigns 6',
        'A beautiful view of the mountains during sunset.',
        './assets/campaigns/campaigns-6.pdf',
      ),
      new CardBlock(
        './assets/campaigns/card-headers/campaigns-7.jpg',
        'Campaigns 7',
        'A beautiful view of the mountains during sunset.',
        './assets/campaigns/campaigns-7.pdf',
      ),
      new CardBlock(
        './assets/campaigns/card-headers/campaigns-8.jpg',
        'Campaigns 8',
        'A beautiful view of the mountains during sunset.',
        './assets/campaigns/campaigns-8.pdf',
      ),
      new CardBlock(
        './assets/campaigns/card-headers/campaigns-9.jpg',
        'Campaigns 9',
        'A beautiful view of the mountains during sunset.',
        './assets/campaigns/campaigns-9.pdf',
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
