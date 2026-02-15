import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Hero = (): JSX.Element => {
  return (
    <Box>
      <Box marginBottom={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography
          variant="h3"
          color="text.primary"
          align={'center'}
          sx={{
            fontWeight: 700,
            textWrap: 'balance',
          }}
        >
          Overview
        </Typography>
        <Typography
          variant="h6"
          component="p"
          color="text.primary"
          align={'center'}
          gutterBottom
          sx={{
            fontWeight: 400,
            letterSpacing: '0.015em',
            lineHeight: 1.7,
            textWrap: 'balance',
            opacity: 0.72,
            maxWidth: '52em',
          }}
        >
          GDA focuses creative vision with technical mastery, delivering graphic design services that elevate brands in competitive markets. Exceptional attention to detail distinguishes our handling of visual identity and high-impact assets.
        </Typography>
      </Box>
    </Box>
  );
};

export default Hero;
