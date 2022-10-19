import React from 'react';
import Card from './components/Card';

import { tripItems } from './data/data';

const banner1 = {
  bgColor: 'violet',
  top: true,
  label: 'новинка',
};

const banner2 = {
  bgColor: 'blue',
  label: 'новинка',
};

const banner3 = {
  label: 'круглый год',
};

const banner4 = {
  visible: false,
};

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <Card item={tripItems[0]} />
      <Card item={tripItems[1]} bannerSettings={banner1} />
      <Card item={tripItems[2]} bannerSettings={banner2} />
      <Card item={tripItems[3]} bannerSettings={banner3} />
      <Card item={tripItems[4]} bannerSettings={banner4} />
    </div>
  );
};

export default App;
