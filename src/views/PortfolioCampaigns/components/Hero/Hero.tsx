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
          Campaigns
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
          Marketing campaigns are coordinated sets of activities and strategies designed to promote a product, service, or brand. 
          Campaigns are often time-bound and may target specific audiences to drive awareness, and ultimately sales.
        </Typography>
      </Box>
    </Box>
  );
};

export default Hero;
