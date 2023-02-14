import { useEffect } from 'react';

import nProgress from 'nprogress';

const TopProgressBar = () => {
  useEffect(() => {
    nProgress.start();

    return () => {
      nProgress.done();
    };
  });

  return null;
};

export default TopProgressBar;
