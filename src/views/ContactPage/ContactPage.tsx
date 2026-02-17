import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

import Main from 'layouts/Main';
import { Hero } from './components';

const ContactPage = (): React.JSX.Element => {
  const theme = useTheme();

  return (
    <Main>
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: theme.palette.alternate.main,
          backgroundImage: `linear-gradient(120deg, ${theme.palette.alternate.dark} 0%, ${theme.palette.background.paper} 100%)`,
        }}
      >
        <Hero />
      </Box>
    </Main>
  );
};

export default ContactPage;
