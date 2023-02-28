/**
 * Made by Yurets in UA!
 * Copyright (c) GPL License <2021-2023> <Yurii Andriiko>
 * Telegram @Yurets7777 E-mail: yuretshome@gmail.com
 * "Роби добре, та тільки добре! А можеш? - Роби краще!"
 */
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material/';

import { HeaderContainer } from '../../containers/HeaderContainer/HeaderContainer';
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
    </Box>
  );
};
