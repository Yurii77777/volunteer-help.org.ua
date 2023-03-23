import { useTranslation } from 'react-i18next';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Box, Typography } from '@mui/material';

import { theme } from './MapPointButtonTheme';

export const MapPointButton = ({ id, email, phones, onClick, activePoint }) => {
  const { t } = useTranslation();

  const activeBoxStyle = activePoint === id ? { border: '1px solid orange' } : { border: '1px solid #dee2e6' };
  const activeIconStyle = activePoint === id ? { fontSize: '25px', color: 'orange' } : {};

  return (
    <Box sx={{ ...theme.box, ...activeBoxStyle }} onClick={() => onClick(id)}>
      <LocationOnIcon sx={{ ...theme.icon, ...activeIconStyle }} />
      <Box sx={theme.boxText}>
        <Typography sx={theme.text}>{t(`mapComponent.mapPoints.${id}.street`)}</Typography>
        <Typography sx={theme.text}>{t(`mapComponent.mapPoints.${id}.service`)}</Typography>
        <Typography sx={theme.text}>{email}</Typography>
        {phones.map((phone, idx) => (
          <Typography key={idx + 1} sx={theme.text}>
            {phone}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};
