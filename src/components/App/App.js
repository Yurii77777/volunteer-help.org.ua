import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material/';

import { HeaderContainer } from '../../containers/HeaderContainer/HeaderContainer';
import { FooterContainer } from '../../containers/FooterContainer/FooterContainer';
import { MainPage } from '../../pages/MainPage/MainPage';

import { theme } from './AppTheme';

export const App = () => {
  return (
    <Box sx={theme.wrapper}>
      <HeaderContainer />

      <Box component="main">
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
        </Routes>
      </Box>

      <FooterContainer />
    </Box>
  );
};
