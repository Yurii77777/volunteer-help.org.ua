import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Container, Typography, ListItem, Modal, Backdrop, Fade } from '@mui/material';
import Masonry from '@mui/lab/Masonry';
import { otherMaterials } from '../../constants/constants';

import theme from './OtherMaterialsTheme';

export const OtherMaterials = () => {
  const { t } = useTranslation();

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imgSrc) => {
    setSelectedImage(imgSrc);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <Box sx={theme.section}>
      <Container sx={theme.container}>
        <Typography variant="h4" sx={theme.title}>
          Інші матеріали
        </Typography>
        <Masonry columns={{ xs: 2, sm: 4 }} sx={theme.contentMasonry}>
          {otherMaterials.map(({ id, imgSrc, alt }) => {
            return (
              <ListItem key={id} sx={theme.listItem} onClick={() => handleImageClick(imgSrc)}>
                <img
                  src={`${imgSrc}?w=162&auto=format`}
                  srcSet={`${imgSrc}?w=162&auto=format&dpr=2 2x`}
                  alt={alt}
                  loading="lazy"
                  style={{
                    display: 'block',
                    width: '100%',
                    cursor: 'pointer',
                  }}
                />
              </ListItem>
            );
          })}
        </Masonry>
        <Modal
          open={!!selectedImage}
          onClose={handleCloseModal}
          aria-labelledby="image-modal-title"
          aria-describedby="image-modal-description"
          closeAfterTransition
          BackdropComponent={Backdrop}
          >
          <Fade in={!!selectedImage}>
            <Box
              onClick={handleCloseModal}
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                bgcolor: 'background.paper',
                boxShadow: 24,
                p: 4,
              }}>
              <img src={selectedImage} alt="" style={{ maxWidth: '80vw', maxHeight: '80vh' }} />
            </Box>
          </Fade>
        </Modal>
      </Container>
    </Box>
  );
};
