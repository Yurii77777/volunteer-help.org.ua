import { Box } from '@mui/material/';
import { theme } from './TopBannerComponentTheme';
import TopBannerContacts from './TopBannerContacts/TopBannerContacts';
import TopBannerHelps from './TopBannerHelps/TopBannerHelps';

export const TopBannerComponent = () => {
  return (
    <Box component="section" sx={theme.section}>
      <Box sx={theme.container}>
        <TopBannerContacts />
      </Box>
      <TopBannerHelps />
    </Box>
  );
};
