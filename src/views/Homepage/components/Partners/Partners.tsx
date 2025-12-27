import React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';

const partners = [
    {
      light: 'assets/partners/light/emh-logo.svg',
      dark: 'assets/partners/dark/emh-logo.svg',
      width: 160,
    },
    {
      light: 'assets/partners/light/applebees-logo.svg',
      dark: 'assets/partners/dark/applebees-logo.svg',
    },
    {
      light: 'assets/partners/light/gm-logo.svg',
      dark: 'assets/partners/dark/gm-logo.svg',
    },
    {
      light: 'assets/partners/light/eku-logo.svg',
      dark: 'assets/partners/dark/eku-logo.svg',
    },
    {
      light: 'assets/partners/light/fazolis-logo.svg',
      dark: 'assets/partners/dark/fazolis-logo.svg',
    },
    {
      light: 'assets/partners/light/ford-logo.svg',
      dark: 'assets/partners/dark/ford-logo.svg',
    },
    {
      light: 'assets/partners/light/galls-logo.svg',
      dark: 'assets/partners/dark/galls-logo.svg',
    },
    {
      light: 'assets/partners/light/ljs-logo.svg',
      dark: 'assets/partners/dark/ljs-logo.svg',
    },
    {
      light: 'assets/partners/light/mopar-logo.svg',
      dark: 'assets/partners/dark/mopar-logo.svg',
    },
    {
      light: 'assets/partners/light/parker-seals-logo.svg',
      dark: 'assets/partners/dark/parker-seals-logo.svg',
    },
    {
      light: 'assets/partners/light/trane-logo.svg',
      dark: 'assets/partners/dark/trane-logo.svg',
    },
  ];

const Partners = (): JSX.Element => {
  const theme = useTheme();
  return (
    <Box display="flex" flexWrap="wrap" justifyContent={'center'} width={1}>
      {partners.map((item, i) => (
        <Box maxWidth={item.width || 160} width={1} marginTop={2} marginRight={4} key={i}>
          <Box
            component="img"
            height={1}
            width={1}
            src={
              theme.palette.mode.toLowerCase() === 'dark' 
                ? item.dark
                : item.light 
            }
            alt="..."
          />
        </Box>
      ))}
      <Typography variant="caption" color="text.secondary" marginTop={2}>Examples of current and past customers. Images not a work product of Graphic Design Associates.</Typography>
    </Box>
  );
};

export default Partners;
