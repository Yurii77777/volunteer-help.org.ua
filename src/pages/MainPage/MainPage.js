import { Box } from '@mui/material/';
import PT from 'prop-types';

import { TopBannerComponent } from '../../components/TopBannerComponent/TopBannerComponent';

import { theme } from './MainPageTheme';

export const MainPage = () => {
  return (
    <>
      <TopBannerComponent />
    </>
  );
};

MainPage.propTypes = {};
