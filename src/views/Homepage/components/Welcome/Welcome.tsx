/* eslint-disable react/no-unescaped-entities */
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Partners from '../Partners';

const Welcome = (): JSX.Element => {
  const GridItemHeadlineBlock = () => (
    <Box marginBottom={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography
        variant="h3"
        color="text.primary"
        align={'center'}
        sx={{
          fontWeight: 700,
          textWrap: 'balance',
          maxWidth: '20em',
        }}
      >
        Graphic Design Associates is dedicated to bringing your brand vision to life
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
        GDA is a premium graphic design and creative studio located in the Dayton area specializing in high-quality graphic design, branding, digital solutions, technical illustrations, and professional marketing materials.
      </Typography>
    </Box>
  );

  return (
    <Box sx={{ width: '100%', maxWidth: '100%', overflow: 'hidden' }}>
      <GridItemHeadlineBlock />
      <Partners />
    </Box>
  );
};

export default Welcome;
