import * as React from 'react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
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
  const location = useLocation();
  console.log(location);

  const [activity, setActivity] = useState([]);
  const [description, setDescription] = useState({});
  const [title, setTitle] = useState({});
  
  useEffect(() => {
    if (location) {
      const { title, description, activity } = location;
      setActivity(activity);
      setDescription(description);
      setTitle(title);
    }
    console.log(activityData);
  
    const pageId = +window.location.pathname.match(/\d+/g);
    const currentActivity = activityData.filter(({ id }) => id === pageId);
    const [{ activity, img, title }] = currentActivity;

    setActivity(img);
    setDescription(description);
    setTitle(title);
  }, [location]);
  console.log(activity);

  return (
    <Box sx={theme.container}>
      <Box>
        <Typography sx={theme.title}>{t(`titleActivities.${title}`)}</Typography>
        <Typography variant="p" sx={theme.paragraph}></Typography>
      </Box>
      <Masonry sx={theme.contentMasonry}>
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
