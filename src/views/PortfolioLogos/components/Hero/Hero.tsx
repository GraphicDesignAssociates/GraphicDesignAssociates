import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Hero = (): React.JSX.Element => {
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
          Logos
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
          While a logo is a very personal representation of a company's identity, a logo is a graphic mark, emblem, or symbol used to aid and promote public identification and recognition.
          We understand this and work closely with our clients to create logos that are not only visually appealing but also effectively communicate the essence of their brand.
        </Typography>
      </Box>
    </Box>
  );
};

export default Hero;
