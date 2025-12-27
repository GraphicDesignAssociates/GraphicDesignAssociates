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
        '/assets/pub-annuals/card-headers/pub-annual-1.jpg',
        'Publication / Annual Report 1',
        'A beautiful view of the mountains during sunset.',
        '/assets/pub-annuals/pub-annual-1.pdf',
      ),
      new CardBlock(
        '/assets/pub-annuals/card-headers/pub-annual-2.jpg',
        'Publication / Annual Report 2',
        'A beautiful view of the mountains during sunset.',
        '/assets/pub-annuals/pub-annual-2.pdf',
      ),
      new CardBlock(
        '/assets/pub-annuals/card-headers/pub-annual-3.jpg',
        'Publication / Annual Report 3',
        'A beautiful view of the mountains during sunset.',
        '/assets/pub-annuals/pub-annual-3.pdf',
      ),
      new CardBlock(
        '/assets/pub-annuals/card-headers/pub-annual-4.jpg',
        'Publication / Annual Report 4',
        'A beautiful view of the mountains during sunset.',
        '/assets/pub-annuals/pub-annual-4.pdf',
      ),
      new CardBlock(
        '/assets/pub-annuals/card-headers/pub-annual-5.jpg',
        'Publication / Annual Report 5',
        'A beautiful view of the mountains during sunset.',
        '/assets/pub-annuals/pub-annual-5.pdf',
      ),
      new CardBlock(
        '/assets/pub-annuals/card-headers/pub-annual-6.jpg',
        'Publication / Annual Report 6',
        'A beautiful view of the mountains during sunset.',
        '/assets/pub-annuals/pub-annual-6.pdf',
      ),
      new CardBlock(
        '/assets/pub-annuals/card-headers/pub-annual-7.jpg',
        'Publication / Annual Report 7',
        'A beautiful view of the mountains during sunset.',
        '/assets/pub-annuals/pub-annual-7.pdf',
      ),
      new CardBlock(
        '/assets/pub-annuals/card-headers/pub-annual-8.jpg',
        'Publication / Annual Report 8',
        'A beautiful view of the mountains during sunset.',
        '/assets/pub-annuals/pub-annual-8.pdf',
      ),
      new CardBlock(
        '/assets/pub-annuals/card-headers/pub-annual-9.jpg',
        'Publication / Annual Report 9',
        'A beautiful view of the mountains during sunset.',
        '/assets/pub-annuals/pub-annual-9.pdf',
      ),
      new CardBlock(
        '/assets/pub-annuals/card-headers/pub-annual-10.jpg',
        'Publication / Annual Report 10',
        'A beautiful view of the mountains during sunset.',
        '/assets/pub-annuals/pub-annual-10.pdf',
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
