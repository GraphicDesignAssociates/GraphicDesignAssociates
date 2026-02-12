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
          Campaigns
        </Typography>
        <Typography
          variant="h6"
          component="p"
          color="text.secondary"
          align={'center'}
          gutterBottom
          sx={{ fontWeight: 400 }}
        >
          Marketing campaigns are coordinated sets of activities and strategies designed to promote a product, service, or brand. 
          Campaigns are often time-bound and may target specific audiences to drive awareness, and ultimately sales.
        </Typography>
      </Box>
    </Box>
  );
};

export default Hero;
