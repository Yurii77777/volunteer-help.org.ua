import { useTranslation } from 'react-i18next';
import { Box, Container, Typography } from '@mui/material';
import { activities } from '../../constants/constants';

export function ActivitiesComponent() {
  const { t } = useTranslation();
  return (
    <Container>
      <Box>
        <Typography variant="h4">{t('activities.title')}</Typography>
      </Box>
      <Box>
        <ol style={{ listStyleType: 'decimal', paddingLeft: '24px' }}>
          {activities.map((activity, index) => {
            return (
              <li key={index} style={{  marginBottom: '8px', display: 'list-item' }}>
                <Typography>{t(`activities.list.${activity}`)}</Typography>
              </li>
            );
          })}
        </ol>
      </Box>
    </Container>
  );
}
