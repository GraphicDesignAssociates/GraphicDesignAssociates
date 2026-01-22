import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';
import Carousel from 'components/Carousel';

const partners = [
  {
    light: 'assets/partners/light/emh-logo.svg',
    dark: 'assets/partners/dark/emh-logo.svg',
  },
  {
    light: 'assets/partners/light/applebees-logo.svg',
    dark: 'assets/partners/dark/applebees-logo.svg',
  },
  {
    light: 'assets/partners/light/gm-logo.svg',
    dark: 'assets/partners/dark/gm-logo.svg',
  },
  {
    light: 'assets/partners/light/eku-logo.svg',
    dark: 'assets/partners/dark/eku-logo.svg',
  },
  {
    light: 'assets/partners/light/fazolis-logo.svg',
    dark: 'assets/partners/dark/fazolis-logo.svg',
  },
  {
    light: 'assets/partners/light/ford-logo.svg',
    dark: 'assets/partners/dark/ford-logo.svg',
  },
  {
    light: 'assets/partners/light/galls-logo.svg',
    dark: 'assets/partners/dark/galls-logo.svg',
  },
  {
    light: 'assets/partners/light/ljs-logo.svg',
    dark: 'assets/partners/dark/ljs-logo.svg',
  },
  {
    light: 'assets/partners/light/mopar-logo.svg',
    dark: 'assets/partners/dark/mopar-logo.svg',
  },
  {
    light: 'assets/partners/light/parker-seals-logo.svg',
    dark: 'assets/partners/dark/parker-seals-logo.svg',
  },
  {
    light: 'assets/partners/light/trane-logo.svg',
    dark: 'assets/partners/dark/trane-logo.svg',
  },
];

const Partners = (): JSX.Element => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode.toLowerCase() === 'dark';

  return (
    <Box
      sx={{
        width: '100%',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Carousel duration={40}>
        {partners.map((item, i) => (
          <Box
            key={i}
            sx={{
              flexShrink: 0,
              width: { xs: 120, sm: 140, md: 160 },
              height: { xs: 60, sm: 70, md: 80 },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mx: { xs: 2, sm: 3, md: 4 },
            }}
          >
            <Box
              component="img"
              sx={{
                maxWidth: '100%',
                maxHeight: '100%',
                objectFit: 'contain',
                userSelect: 'none',
                pointerEvents: 'none',
              }}
              src={isDarkMode ? item.dark : item.light}
              alt={`Partner ${i + 1}`}
              draggable={false}
            />
          </Box>
        ))}
      </Carousel>
      <Typography
        variant="caption"
        color="text.secondary"
        sx={{ mt: 2, textAlign: 'center', px: 2 }}
      >
        Examples of current and past customers. Images not a work product of Graphic Design Associates.
      </Typography>
    </Box>
  );
};

export default Partners;
