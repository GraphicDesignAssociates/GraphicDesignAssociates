/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Hero = (): JSX.Element => {
  const theme = useTheme();

  return (
    <Grid container spacing={4}>
      <Grid item container alignItems={'center'} xs={12} md={6}>
        <Box>
          <Box marginBottom={2}>
            <Typography
              variant="h2"
              color="text.primary"
              sx={{
                fontWeight: 700,
              }}
            >
              Greg Sweet
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="h6"
              component="p"
              color="text.secondary"
              sx={{ fontWeight: 400 }}
              lineHeight={1.6}
            >
              I am a graphic designer with a passion for creating designs that are both functional and aesthetically pleasing. 
              With nearly 50 years of experience in the industry, 
              l've worked with clients from a range of sectors, including automotive, healthcare, education and many more. 
              My specialties include branding, technical illustration, and print design. 
              I believe that good design is about more than just making things look pretty 
              — it's about understanding the client's needs and delivering a solution that meets those needs effectively.
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box
          height={1}
          width={1}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Box height={1} width={1} maxWidth={500} borderRadius={15} boxShadow={16} overflow={'hidden'}>
            <Box
              component={'img'}
              src={
                'assets/me.png'
              }
              width={1}
              height={1}
              sx={{
                filter:
                  theme.palette.mode === 'dark' ? 'brightness(0.8)' : 'none',
              }}
            />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Hero;
