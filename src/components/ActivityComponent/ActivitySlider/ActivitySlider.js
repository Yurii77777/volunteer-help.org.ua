import Carousel from 'react-material-ui-carousel';
import { ActivityItem } from '../ActivityItem/ActivityItem';
import { activityData } from './activityData';

const filterImagesBySliderFlag = (activityData) => {
  return activityData.map((activity) => {
    return {
      ...activity,
      img: activity.img.filter((img) => img.isSliderImg),
    };
  });
};

const sliderImagesData = filterImagesBySliderFlag(activityData);

export const ActivitySlider = () => {
  return (
    <Carousel
      autoPlay
      duration={500}
      navButtonsAlwaysVisible
      navButtonsProps={{
        style: {
          width: '40px',
          height: '40px',
        },
      }}>
      {sliderImagesData.map(({ id, activity, alt, img: [{ imgSrc: firstImg }, { imgSrc: secondImg }] }) => (
        <ActivityItem title={activity} firstImg={firstImg} secondImg={secondImg} key={id} alt={alt} id={id}/>
      ))}
    </Carousel>
  );
};
