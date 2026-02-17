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
          Brochures
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
          Brochures serve to inform, engage, and persuade potential customers about products, services, or events.
          They act as marketing tools for brand awareness and sales support.
          We understand the importance of creating brochures that not only look visually appealing but also effectively communicate the intended message to the target audience.
        </Typography>
      </Box>
    </Box>
  );
};

export default Hero;
