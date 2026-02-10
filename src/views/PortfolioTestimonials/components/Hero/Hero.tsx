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
          Testimonials
        </Typography>
        <Typography
          variant="h6"
          component="p"
          color="text.secondary"
          align={'center'}
          gutterBottom
          sx={{ fontWeight: 400 }}
        >
          Effective testimonials can be a powerful tool for building trust and credibility with potential customers. 
          They provide social proof that your product or service is valuable and can help to increase conversions. 
        </Typography>
      </Box>
    </Box>
  );
};

export default Hero;
