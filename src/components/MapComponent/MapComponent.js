import { useState } from 'react';

import { useTranslation } from 'react-i18next';
import { Box, Container, Typography, CardMedia } from '@mui/material';

import { MapPointButton } from './MapPointButton/MapPointButton';

import { mapPoints } from './../../constants/constants';

import { theme } from './MapComponentTheme';

export const MapComponent = () => {
  const [activePoint, setActivePoint] = useState(1);

  const { t } = useTranslation();

  const handleClickOnMapPoint = (id) => {
    setActivePoint(id);
  };

  return (
    <Box sx={theme.section}>
      <Container sx={theme.container}>
        <Typography variant="h2" sx={theme.title}>
          {t('mapComponent.mapTitle').toUpperCase()}
        </Typography>
        <Box sx={theme.pointsBox}>
          {mapPoints.map((point) => (
            <MapPointButton
              key={point.id}
              id={point.id}
              email={point.email}
              phones={point.phones}
              onClick={handleClickOnMapPoint}
              activePoint={activePoint}
            />
          ))}
        </Box>
        <CardMedia
          component="iframe"
          sx={theme.mapContainer}
          src={mapPoints.find(({ id }) => id === activePoint)?.url}
        />
      </Container>
    </Box>
  );
};
