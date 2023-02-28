import { Box } from '@mui/material/';

import emblem from '../../../assets/images/emblem_color-ua.webp';

import { theme } from './EmblemComponentTheme';

export const EmblemComponent = () => {
  return (
    <Box
      component="img"
      alt="Емблема ГО Допомога постраждалим дітям з України"
      src={emblem}
      loading="lazy"
      sx={theme.emblemImg}
    />
  );
};
