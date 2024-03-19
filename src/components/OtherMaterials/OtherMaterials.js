import { useTranslation } from 'react-i18next';
import { Box, Container, Typography, List, ListItem } from '@mui/material';
import Masonry from '@mui/lab/Masonry';
import { otherMaterials } from '../../constants/constants';

import theme from './OtherMaterialsTheme';

export const OtherMaterials = () => {
  const { t } = useTranslation();

  return (
    <Box sx={theme.section}>
      <Container sx={theme.container}>
        <Typography variant="h4" sx={theme.title}>
          Інші матеріали
        </Typography>
        <Masonry columns={{ xs: 2, sm: 4 }} sx={theme.contentMasonry}>
          {otherMaterials.map(({ id, imgSrc, alt }) => {
            return (
              <ListItem key={id} sx={theme.listItem}>
                <img
                  src={`${imgSrc}?w=162&auto=format`}
                  srcSet={`${imgSrc}?w=162&auto=format&dpr=2 2x`}
                  alt={alt}
                  loading="lazy"
                  style={{
                    display: 'block',
                    width: '100%',
                  }}
                />
              </ListItem>
            );
          })}
        </Masonry>
      </Container>
    </Box>
  );
};
