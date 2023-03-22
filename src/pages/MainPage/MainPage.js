import { ActivityListComponent } from './../../components/ActivityListComponent/ActivityListComponent';
import ActivityComponent from '../../components/ActivityComponent/ActivityComponent';

import { TopBannerComponent } from '../../components/TopBannerComponent/TopBannerComponent';

export const MainPage = () => {
  return (
    <>
      <TopBannerComponent />
      <ActivityComponent />
      <ActivityListComponent />
    </>
  );
};

MainPage.propTypes = {};
