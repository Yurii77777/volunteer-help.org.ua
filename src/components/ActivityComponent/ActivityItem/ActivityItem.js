import { Box, Typography, Paper } from '@mui/material';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import ButtonComponent from '../../UIcomponents/Button/ButtonComponent';

import { theme } from './ActivityItemTheme';

export const ActivityItem = ({ title, firstImg, secondImg, alt }) => {
  const { t } = useTranslation();
  return (
    <Paper sx={theme.paper}>
      <Box sx={theme.container}>
        <Box sx={theme.content}>
          <Box sx={theme.img} component="img" src={firstImg} alt={t(`slider.${alt}`)} />
        </Box>
        <Box sx={{ ...theme.content, ...theme.info }}>
          <Typography variant="body" sx={theme.title}>
            {t(`slider.countries.${title}`)}
          </Typography>
          <ButtonComponent text={t('slider.learn_more')} />
        </Box>
        <Box sx={theme.content}>
          <Box sx={theme.img} component="img" src={secondImg} alt={t(`slider.${alt}`)} />
        </Box>
      </Box>
    </Paper>
  );
};

ActivityItem.propTypes = {
  title: PropTypes.string.isRequired,
  firstImg: PropTypes.string.isRequired,
  secondImg: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
