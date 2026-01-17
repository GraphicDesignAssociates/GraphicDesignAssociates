import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

import NavItem from './components/NavItem';
import { SingleNavItem } from 'layouts/Main/components/Topbar/components';

interface Props {
  pages: {
    home: PageItem;
    about: PageItem;
    portfolio: Array<PageItem>;
  };
}

const SidebarNav = ({ pages }: Props): JSX.Element => {
  const theme = useTheme();
  const { mode } = theme.palette;

  const {
    home: homePage,
    about: aboutPage,
    portfolio: portfolioPages,
  } = pages;

  return (
    <Box>
      <Box width={1} paddingX={2} paddingY={1}>
        <Box
          display={'flex'}
          component="a"
          href="/"
          title="gdassociates"
          width={{ xs: 200, md: 240 }}
        >
          <Box
            component={'img'}
            src={
              mode === 'light'
                  ? 'assets/gda_logo.svg'
                  : 'assets/gda_logo_white.svg'
            }
            height={1}
            width={1}
          />
        </Box>
      </Box>
      <Box paddingX={2} paddingY={2}>
        <Box>
          <SingleNavItem 
            id={homePage.title}
            item={homePage}
          />
        </Box>
        <Box marginTop={2}>
          <SingleNavItem 
            id={aboutPage.title}
            item={aboutPage}
          />
        </Box>
        <Box marginTop={1}>
          <NavItem title={'Portfolio'} items={portfolioPages} />
        </Box>
        <Box marginTop={1}>
          <Button
            size={'large'}
            variant="contained"
            color="primary"
            fullWidth
            component="a"
            href="./About#Contact"
          >
            Contact
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SidebarNav;
