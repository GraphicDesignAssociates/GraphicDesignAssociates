/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Contact = (): JSX.Element => {
  return (
    <Box>
      <Typography fontWeight={700} variant={'h3'} gutterBottom align={'center'}>
        Get started with Graphic Design Associates today
      </Typography>
      <Typography
        variant={'h6'}
        component={'p'}
        color={'text.secondary'}
        align={'center'}
      >
        Create successful and professional marketing materials with Graphic Design Associates.
      </Typography>
      <Box marginTop={3} display={'flex'} justifyContent={'center'}>
        <Button
          component={'a'}
          href={'https://mui.com/store/items/the-front-landing-page/'}
          target={'_blank'}
          variant="contained"
          color="primary"
          size="large"
          endIcon={
            <svg
              width={16}
              height={16}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          }
        >
          Get started
        </Button>
      </Box>
    </Box>
  );
};

export default Contact;
