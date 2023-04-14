import { ActivityListComponent } from './../../components/ActivityListComponent/ActivityListComponent';
import ActivityComponent from '../../components/ActivityComponent/ActivityComponent';

import { TopBannerComponent } from '../../components/TopBannerComponent/TopBannerComponent';

import { ShortDescription } from '../../components/ShortDescription/ShortDescription';
import { MapComponent } from '../../components/MapComponent/MapComponent';
import { WireTransferInfoComponent } from '../../components/WireTransferInfoComponent/WireTransferInfoComponent';

export const MainPage = () => {
  return (
    <>
      <TopBannerComponent />
      <ActivityComponent />
      <ShortDescription />
      <MapComponent />
      <WireTransferInfoComponent />
      <ActivityListComponent />
    </>
  );
};

MainPage.propTypes = {};