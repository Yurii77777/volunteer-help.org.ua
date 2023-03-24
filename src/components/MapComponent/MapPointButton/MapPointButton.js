import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Box, Typography, List } from '@mui/material';

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
        <ul style={theme.list}>
          {phones.map((phone, idx) => (
            <li key={idx + 1}>
              <Typography sx={theme.text}>{phone}</Typography>
            </li>
          ))}
        </ul>
      </Box>
    </Box>
  );
};

MapPointButton.defaultProps = {
  onClick: () => {},
  phones: [],
};
MapPointButton.propTypes = {
  id: PropTypes.number,
  email: PropTypes.string,
  phones: PropTypes.array,
  onClick: PropTypes.func,
  activePoint: PropTypes.number,
};
