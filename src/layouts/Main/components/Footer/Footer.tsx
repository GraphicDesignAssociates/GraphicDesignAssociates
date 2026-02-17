import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { assetPath } from 'src/utils/assetPath';

const Footer = (): React.JSX.Element => {
  const theme = useTheme();
  const { mode } = theme.palette;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          width={1}
          flexDirection={{ xs: 'column', sm: 'row' }}
          gap={2}
        >
          <Box
            display={'flex'}
            component={RouterLink}
            to="/"
            title="Design Associates"
            width={{ xs: 150, md: 220 }}
          >
            <Box
              component={'img'}
              src={assetPath(
                mode === 'light'
                  ? 'assets/gda_logo.svg'
                  : 'assets/gda_logo_white.svg'
              )}
              height={1}
              width={1}
            />
          </Box>
          <Box display="flex" alignItems={'center'} gap={{ xs: 1, sm: 1.5 }}>
            <Avatar
              component="a"
              href="mailto:sweetdesigns@twc.com"
              aria-label="Send email to sweetdesigns@twc.com"
              sx={{
                bgcolor: theme.palette.secondary.main,
                width: { xs: 28, sm: 36 },
                height: { xs: 28, sm: 36 },
                textDecoration: 'none',
                '&:hover': { opacity: 0.8 },
              }}
            >
              <svg
                width={18}
                height={18}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </Avatar>
            <Link
              href="mailto:sweetdesigns@twc.com"
              underline="hover"
              color="text.primary"
              sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}
            >
              sweetdesigns@twc.com
            </Link>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Footer;
