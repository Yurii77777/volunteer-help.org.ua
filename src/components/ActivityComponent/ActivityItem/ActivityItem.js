import { Box, Typography, Paper, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { theme } from './ActivityItemTheme';

export const ActivityItem = ({ title, firstImg, secondImg, alt, id }) => {
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
          <Button
           sx={theme.btn}
           component={RouterLink}
           to={`photos/${id}`}
           >{t('slider.learn_more')}
          </Button>
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
