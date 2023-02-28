import { Box } from '@mui/material/';

import imageSrc from '../../../assets/images/good_evening-ua.webp';

import { theme } from './GoodEveningTheme';

export const GoodEvening = () => {
  return (
    <Box component="img" alt="Зображення Доброго вечора, ми з України" src={imageSrc} loading="lazy" sx={theme.image} />
  );
};
