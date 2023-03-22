import { useTranslation } from 'react-i18next';
import { Box, Container, Typography } from '@mui/material';
import { activities } from '../../constants/constants';

export const ActivityListComponent = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Box>
        <Typography variant="h4">{t('activities.title')}</Typography>
      </Box>
      <Box>
        <ol>
          {activities.map((activity, index) => {
            return (
              <li key={index}>
                <Typography>{t(`activities.list.${activity}`)}</Typography>
              </li>
            );
          })}
        </ol>
      </Box>
    </Container>
  );
};
