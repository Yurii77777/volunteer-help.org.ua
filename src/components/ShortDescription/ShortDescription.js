import { useTranslation } from 'react-i18next';
import { Box, Container, Typography } from '@mui/material';

import { theme } from './ShortDescriptionTheme';

export const ShortDescription = () => {
  const { t } = useTranslation();

  return (
    <Box sx={theme.section}>
      <Container sx={theme.container}>
        <Box sx={theme.boxParagraph}>
          <Typography variant="h2" sx={theme.title}>
            {t('shortDescription.titleMainIdea')}
          </Typography>
          <Typography variant="p" sx={theme.paragraph}>
            {t('shortDescription.descMainIdea')}
          </Typography>
        </Box>
        <Box sx={theme.boxParagraph}>
          <Typography variant="h2" sx={theme.title}>
            {t('shortDescription.titleGoals')}
          </Typography>
          <Typography variant="p" sx={theme.paragraph}>
            {t('shortDescription.descGoals')}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
