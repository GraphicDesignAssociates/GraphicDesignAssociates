import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';

import { NavItem, SingleNavItem } from './components';
import ThemeModeToggler from 'components/ThemeModeToggler';
import { assetPath } from 'src/utils/assetPath';

interface Props {
  // eslint-disable-next-line @typescript-eslint/ban-types
  onSidebarOpen: () => void;
  pages: {
    home: PageItem;
    about: PageItem;
    portfolio: Array<PageItem>;
  };
  colorInvert?: boolean;
}

const Topbar = ({
  onSidebarOpen,
  pages,
  colorInvert = false,
}: Props): JSX.Element => {
  const theme = useTheme();
  const { mode } = theme.palette;
  const {
    home: homePage,
    about: aboutPage,
    portfolio: portfolioPages,
  } = pages;

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={1}
    >
      <Box
        display={'flex'}
        component={RouterLink}
        to="/"
        title="gdassociates"
        width={{ xs: 200, md: 240 }}
      >
        <Box
          component={'img'}
          src={assetPath(
            mode === 'light' && !colorInvert
              ? 'assets/gda_logo.svg'
              : 'assets/gda_logo_white.svg'
          )}
          height={1}
          width={1}
        />
      </Box>
      <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
        <Box>
          <SingleNavItem
            title={homePage.title}
            id={homePage.id}
            item={homePage}
            colorInvert={colorInvert}
          ></SingleNavItem>
        </Box>
        <Box marginLeft={4}>
          <SingleNavItem
            title={aboutPage.title}
            id={aboutPage.id}
            item={aboutPage}
            colorInvert={colorInvert}
          ></SingleNavItem>
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'Portfolio'}
            id={'portfolio-pages'}
            items={portfolioPages}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <ThemeModeToggler />
        </Box>
        <Box marginLeft={4}>
          <Button
            variant="contained"
            color="primary"
            component={RouterLink}
            to="/About#Contact"
            size="large"
          >
            Contact
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: { xs: 'flex', md: 'none' } }} alignItems={'center'}>
        <Button
          onClick={() => onSidebarOpen()}
          aria-label="Menu"
          variant={'outlined'}
          sx={{
            borderRadius: 2,
            minWidth: 'auto',
            padding: 1,
            borderColor: alpha(theme.palette.divider, 0.2),
          }}
        >
          <MenuIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default Topbar;
