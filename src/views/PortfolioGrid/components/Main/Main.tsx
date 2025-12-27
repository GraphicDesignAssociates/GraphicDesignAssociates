import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';

export class CardBlock {
  image: string;
  description?: string;
  title: string;
  link: string;

  constructor(image: string, title: string , description?: string, link?: string) {
    this.image = image;
    this.description = description;
    this.title = title;
    this.link = link || '#';
  }
}

interface MainProps {
  cardBlocks?: CardBlock[];
}

const Main = ({ cardBlocks = [] }: MainProps): React.ReactElement => {
  const theme = useTheme();
  const cardBlocksToUse = cardBlocks?.length ? cardBlocks : [];
  // Debug: log received card blocks to help trace missing data
  // eslint-disable-next-line no-console
  console.debug('Main: received cardBlocks count=', cardBlocksToUse.length, cardBlocksToUse);

  // Handle the case where there are no cards to display
  const noCards = cardBlocksToUse.length < 1;
  if (noCards) {
    return <Typography>
      No portfolio items to display at this time. Please check back later.
    </Typography>;
  }

  return (
    <Box>
      <Grid container spacing={4}>
        {cardBlocksToUse.map((item: CardBlock, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Box
              component={'a'}
              href={item.link}
              display={'block'}
              width={1}
              height={1}
              sx={{
                textDecoration: 'none',
                transition: 'all .2s ease-in-out',
                '&:hover': {
                  transform: `translateY(-${theme.spacing(1 / 2)})`,
                },
              }}
            >
              <Box
                component={Card}
                width={1}
                height={1}
                display={'flex'}
                flexDirection={'column'}
              >
                <CardMedia
                  image={item.image}
                  title={item.title}
                  sx={{
                    height: { xs: 340, md: 400 },
                  }}
                />
                <Box component={CardContent}>
                  <Typography variant={'h6'} fontWeight={700} gutterBottom>
                    {item.title}
                  </Typography>
                  {item.description && item.description.length
                    ? <Typography variant={'body2'} color="text.secondary">
                      {item.description}
                    </Typography>
                    : ''
                  }
                  
                </Box>
                <Box flexGrow={1} />
                <Box component={CardActions} justifyContent={'flex-start'}>
                  <Button
                    size="large"
                    href={item.link}
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
                    View
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Main;
