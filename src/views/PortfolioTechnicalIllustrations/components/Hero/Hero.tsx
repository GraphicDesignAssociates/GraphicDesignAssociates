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
          Technical Illustrations
        </Typography>
        <Typography
          variant="h6"
          component="p"
          color="text.secondary"
          align={'center'}
          gutterBottom
          sx={{ fontWeight: 400 }}
        >
          Create a realistic illustration of an actual object or product that shows its component parts by utilizing either an exploded view or cutaway view techique. Technical illustrations are often used in instruction manuals, assembly guides, and technical documentation to help users understand how a product is put together or how it functions.
        </Typography>
      </Box>
    </Box>
  );
};

export default Hero;
