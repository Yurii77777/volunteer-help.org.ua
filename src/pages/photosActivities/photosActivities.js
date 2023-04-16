import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { theme } from './photosActivitiesTheme';
import { activityData } from '../../components/ActivityComponent/ActivitySlider/activityData';

const Label = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
}));

export const PhotosActivities = () => {
  const { t } = useTranslation();

  const [activity, setActivity] = useState([]);
  const [title, setTitle] = useState({});

  useEffect(() => {
    const pageId = +window.location.pathname.match(/\d+/g);
    const currentActivity = activityData.filter(({ id }) => id === pageId);
    const [{ img, title }] = currentActivity;

    setActivity(img);
    setTitle(title);
  }, []);

  return (
    <Box sx={theme.container}>
      <Box>
        <Typography sx={theme.title}>{t(`titleActivities.${title}`)}</Typography>
        <Typography variant="p" sx={theme.paragraph}></Typography>
      </Box>
      <Masonry columns={{ xs: 2, sm: 4 }} sx={theme.contentMasonry}>
        {activity.map(({ imgSrc, id, alt }) => (
          <div key={id}>
            <Label></Label>
            <img
              src={`${imgSrc}?w=162&auto=format`}
              srcSet={`${imgSrc}?w=162&auto=format&dpr=2 2x`}
              alt={alt}
              loading="lazy"
              style={{
                borderBottomLeftRadius: 14,
                borderBottomRightRadius: 14,
                display: 'block',
                width: '100%',
              }}
            />
          </div>
        ))}
      </Masonry>
    </Box>
  );
};
export default PhotosActivities;
