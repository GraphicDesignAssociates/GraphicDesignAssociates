import React, { useEffect } from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';
import Routes from './Routes';
import Page from './components/Page';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css';

// Use basename for GitHub Pages subdirectory deployment
const basename = import.meta.env.BASE_URL;

const ScrollToTop = (): null => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = (): React.JSX.Element => {
  return (
    <Page>
      <BrowserRouter basename={basename}>
        <ScrollToTop />
        <Routes />
      </BrowserRouter>
    </Page>
  );
};

export default App;
