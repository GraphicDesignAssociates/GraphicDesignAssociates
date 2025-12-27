import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { alpha, useTheme } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { popoverClasses } from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from '@mui/material';

interface Props {
  id: string;
  item: PageItem;
  colorInvert?: boolean;
}

const SingleNavItem = ({
  id,
  item,
  colorInvert = false,
}: Props): JSX.Element => {
  const theme = useTheme();

  let currentlyHovering = false;
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleHover = () => {
    currentlyHovering = true;
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCloseHover = () => {
    currentlyHovering = false;
    setTimeout(() => {
      if (!currentlyHovering) {
        handleClose();
      }
    }, 50);
  };

  const [activeLink, setActiveLink] = useState('');
  useEffect(() => {
    setActiveLink(window && window.location ? window.location.pathname : '');
  }, []);

  const linkColor = colorInvert ? 'common.white' : 'text.primary';

  return (
    <Box>
      <Box
        display={'flex'}
        alignItems={'center'}
        aria-describedby={id}
        sx={{ cursor: 'pointer' }}
        onClick={handleClick}
      >
        <Link
          href={item.href}
          underline="none"
          color={linkColor}>
          <Typography 
            color={linkColor}>
            {item.title}
          </Typography>
        </Link>
      </Box>
      {/* <Menu
        disableAutoFocusItem
        elevation={3}
        id={id}
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        PaperProps={{
          onMouseEnter: handleHover,
          onMouseLeave: handleCloseHover,
          style: { pointerEvents: 'auto' }
        }}
        sx={{
          '.MuiPaper-root': {
            maxWidth: 250,
            padding: 1,
            marginTop: 2,
            borderTopRightRadius: 0,
            borderTopLeftRadius: 0,
            borderBottomRightRadius: 8,
            borderBottomLeftRadius: 8,
            borderTop: `3px solid ${theme.palette.primary.main}`,
          },
          [`&.${popoverClasses.root}`]: {
            pointerEvents: 'none',
          },
        }}
      >
        <Grid container spacing={0.5}>
            <Grid item key={1} xs={12}>
              <MenuItem
                component={'a'}
                href={item.href}
                sx={{
                  paddingY: 1.5,
                  borderRadius: 1,
                  justifyContent: 'flex-start',
                  color:
                    activeLink === item.href
                      ? theme.palette.primary.main
                      : theme.palette.text.primary,
                  backgroundColor:
                    activeLink === item.href
                      ? alpha(theme.palette.primary.main, 0.1)
                      : 'transparent',
                  fontWeight: activeLink === item.href ? 600 : 400,
                }}
              >
                <Typography variant={'body2'}>
                  {item.title}
                </Typography>
                {item.isNew && (
                  <Box
                    padding={0.5}
                    display={'inline-flex'}
                    borderRadius={1}
                    bgcolor={'primary.main'}
                    marginLeft={2}
                  >
                    <Typography
                      variant={'caption'}
                      sx={{ color: 'common.white', lineHeight: 1 }}
                    >
                      new
                    </Typography>
                  </Box>
                )}
              </MenuItem>
            </Grid>
        </Grid>
      </Menu> */}
    </Box>
  );
};

export default SingleNavItem;
