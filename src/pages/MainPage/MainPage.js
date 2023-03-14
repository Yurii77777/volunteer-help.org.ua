import { ActivityListComponent } from './../../components/ActivityListComponent/ActivityListComponent';
import { TopBannerComponent } from '../../components/TopBannerComponent/TopBannerComponent';

export const MainPage = () => {
  return (
    <>
      <TopBannerComponent />
      <ActivityListComponent />
    </>
  );
};

MainPage.propTypes = {};
