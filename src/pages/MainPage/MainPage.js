import { ActivitiesComponent } from './../../components/ActivitiesComponent/ActivitiesComponent';
import { TopBannerComponent } from '../../components/TopBannerComponent/TopBannerComponent';

export const MainPage = () => {
  return (
    <>
      <TopBannerComponent />
      <ActivitiesComponent />
    </>
  );
};

MainPage.propTypes = {};
