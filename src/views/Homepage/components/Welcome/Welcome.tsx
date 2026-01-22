/* eslint-disable react/no-unescaped-entities */
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Partners from '../Partners';

const Welcome = (): JSX.Element => {
  const GridItemHeadlineBlock = () => (
    <Box marginBottom={4}>
      <Typography
        variant="h3"
        color="text.primary"
        align={'center'}
        sx={{
          fontWeight: 700,
        }}
      >
        Graphic Design Associates is dedicated to bringing your brand vision to life
      </Typography>
      <Typography
        variant="h6"
        component="p"
        color="text.secondary"
        align={'center'}
        gutterBottom
        sx={{ fontWeight: 400 }}
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
