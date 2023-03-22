import bgImageMobile from '../../assets/images/top-banner-bg-img_mobile.webp';
import bgImage from '../../assets/images/top-banner-bg-img.webp';

export const theme = {
  section: {
    backgroundImage: {
      sm: `url(${bgImage})`,
      xs: `url(${bgImageMobile})`,
    },
    display: 'flex',
    flexDirection: 'column',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  wrapper: {    
    backgroundColor: 'rgba(255,255,255,.2)',
  },
};
