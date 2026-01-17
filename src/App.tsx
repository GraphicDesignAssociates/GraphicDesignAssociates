import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import Page from './components/Page';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css';

// Use basename for GitHub Pages subdirectory deployment
const basename = import.meta.env.BASE_URL;

const App = (): JSX.Element => {
  return (
    <Page>
      <BrowserRouter basename={basename}>
        <Routes />
      </BrowserRouter>
    </Page>
  );
};

export default App;
