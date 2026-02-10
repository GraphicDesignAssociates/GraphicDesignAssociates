import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Hero = (): JSX.Element => {
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          variant="h3"
          color="text.primary"
          align={'center'}
          sx={{
            fontWeight: 700,
          }}
        >
          Brochures
        </Typography>
        <Typography
          variant="h6"
          component="p"
          color="text.secondary"
          align={'center'}
          gutterBottom
          sx={{ fontWeight: 400 }}
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
