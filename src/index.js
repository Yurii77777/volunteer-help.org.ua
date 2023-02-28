/**
 * Made by Yurets in UA!
 * Copyright (c) GPL License <2021-2023> <Yurii Andriiko>
 * Telegram @Yurets7777 E-mail: yuretshome@gmail.com
 * "Роби добре, та тільки добре! А можеш? - Роби краще!"
 */
import { BrowserRouter } from 'react-router-dom';

import { createRoot } from 'react-dom/client';
import './styles/index.scss';
import { App } from './components/App/App';

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
