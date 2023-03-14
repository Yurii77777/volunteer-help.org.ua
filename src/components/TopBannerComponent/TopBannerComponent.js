import { Box, Container } from '@mui/material/';
import { theme } from './TopBannerComponentTheme';
import TopBannerContacts from './TopBannerContacts/TopBannerContacts';
import TopBannerHelps from './TopBannerHelps/TopBannerHelps';

export const TopBannerComponent = () => {
  return (
    <Box component="section" sx={theme.section}>
      <Container>
        <TopBannerContacts />
      </Container>
      <TopBannerHelps />
    </Box>
  );
};
