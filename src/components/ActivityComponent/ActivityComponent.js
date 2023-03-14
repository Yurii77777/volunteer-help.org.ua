import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { ActivitySlider } from './ActivitySlider/ActivitySlider';

import theme from './ActivityComponentTheme';

const ActivityComponent = () => {
  const { t } = useTranslation();
  return (
    <Box component="section" sx={theme.section}>
      <Box sx={theme.container}>
        <Typography variant="h2" sx={theme.title}>
          {t('slider.title')}
        </Typography>
        <ActivitySlider />
      </Box>
    </Box>
  );
};

export default ActivityComponent;
