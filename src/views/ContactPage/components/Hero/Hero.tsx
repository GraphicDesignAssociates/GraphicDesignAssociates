/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Container from 'components/Container';

const mock = [
  {
    label: 'Email',
    type: 'email',
    value: 'sweetdesigns@twc.com',
    icon: (
      <svg
        width={20}
        height={20}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
      </svg>
    ),
  },
  {
    label: 'Location',
    value: 'Dayton, OH',
    icon: (
      <svg
        width={20}
        height={20}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
];

const Hero = (): React.JSX.Element => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: 1,
        height: 1,
        overflow: 'hidden',
      }}
    >
      <Container paddingX={0} paddingY={0} maxWidth={{ sm: 1, md: 1236 }}>
        <Box
          display={'flex'}
          flexDirection={{ xs: 'column', md: 'row' }}
          position={'relative'}
          minHeight={{ xs: 'auto', md: 700 }}
          maxHeight={{ xs: 'none', md: 700 }}
        >
          <Box
            width={1}
            order={{ xs: 2, md: 1 }}
            display={'flex'}
            alignItems={'center'}
          >
            <Container>
              <Box>
                <Box marginBottom={2}>
                  <Typography
                    variant="h2"
                    color="text.primary"
                    sx={{
                      fontWeight: 700,
                      textWrap: 'balance',
                    }}
                  >
                    Greg Sweet
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="h6"
                    component="p"
                    color="text.primary"
                    sx={{
                      fontWeight: 400,
                      letterSpacing: '0.015em',
                      lineHeight: 1.7,
                      textWrap: 'pretty',
                      opacity: 0.72,
                    }}
                  >
                    I am a graphic designer with a passion for creating designs
                    that are both functional and aesthetically pleasing. With
                    nearly 50 years of experience in the industry, l've worked
                    with clients from a range of sectors, including automotive,
                    healthcare, education and many more. My specialties include
                    branding, technical illustration, and print design. I
                    believe that good design is about more than just making
                    things look pretty — it's about understanding the client's
                    needs and delivering a solution that meets those needs
                    effectively.
                  </Typography>
                </Box>
                <Box id="Contact">
                  <Box marginBottom={1} marginTop={4}>
                    <Typography
                      variant={'h6'}
                      sx={{ fontWeight: 700 }}
                      gutterBottom
                    >
                      Contact Me
                    </Typography>
                  </Box>
                  <Box
                    display={'flex'}
                    flexDirection={'column'}
                    justifyContent={'space-between'}
                  >
                    {mock.map((item, i) => (
                      <Box
                        key={i}
                        component={ListItem}
                        disableGutters
                        width={'auto'}
                        padding={0}
                      >
                        <Box
                          component={ListItemAvatar}
                          minWidth={'auto !important'}
                          marginRight={2}
                        >
                          <Box
                            component={Avatar}
                            bgcolor={theme.palette.secondary.main}
                            width={40}
                            height={40}
                          >
                            {item.icon}
                          </Box>
                        </Box>
                        <ListItemText
                          primary={item.label}
                          secondary={
                            item.type == 'email' 
                              ? <a 
                                  href={`mailto:${item.value}`} 
                                  style={{ color: theme.palette.text.primary }}>
                                    {item.value}
                                </a>
                              : item.value
                            }
                        />
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>
            </Container>
          </Box>
          <Box
            sx={{
              flex: { xs: '0 0 100%', md: '0 0 50%' },
              position: 'relative',
              maxWidth: { xs: '100%', md: '50%' },
              order: { xs: 1, md: 2 },
            }}
          >
            <Box
              sx={{
                width: { xs: 1, md: '50vw' },
                height: '100%',
                position: 'relative',
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  overflow: 'hidden',
                }}
              >
                <Box
                  sx={{
                    overflow: 'hidden',
                    left: '0%',
                    width: 1,
                    height: 1,
                    position: { xs: 'relative', md: 'absolute' },
                    clipPath: {
                      xs: 'none',
                      md: 'polygon(10% 0%, 100% 0, 100% 100%, 0% 100%)',
                    },
                    shapeOutside: {
                      xs: 'none',
                      md: 'polygon(10% 0%, 100% 0, 100% 100%, 0% 100%)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      height: { xs: 'auto', md: 1 },
                    }}
                  >
                    <Box
                      component={'img'}
                      src={'assets/me.png'}
                      height={{ xs: 'auto', md: 1 }}
                      maxHeight={{ xs: 300, md: 1 }}
                      width={1}
                      maxWidth={1}
                      sx={{
                        objectFit: 'cover',
                        objectPosition: '50% 35%',
                        filter:
                          theme.palette.mode === 'dark'
                            ? 'brightness(0.8)'
                            : 'none',
                      }}
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
