import bgImageMobile from '../../assets/images/top-banner-bg-img_mobile.webp';
import bgImage from '../../assets/images/top-banner-bg-img.webp';

export const theme = {
  section: {
    backgroundImage: {
      sm: `url(${bgImage})`,
      xs: `url(${bgImageMobile})`,
    },
    minHeight: '700px',
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100vw',
    marginLeft: 'calc(50% - 50vw)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
};
