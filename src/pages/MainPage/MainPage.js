import { ActivityListComponent } from './../../components/ActivityListComponent/ActivityListComponent';
import ActivityComponent from '../../components/ActivityComponent/ActivityComponent';

import { TopBannerComponent } from '../../components/TopBannerComponent/TopBannerComponent';

import { ShortDescription } from '../../components/ShortDescription/ShortDescription';

export const MainPage = () => {
  return (
    <>
      <TopBannerComponent />
      <ActivityComponent />
      <ShortDescription />
      <ActivityListComponent />
    </>
  );
};

MainPage.propTypes = {};
