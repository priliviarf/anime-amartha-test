import { Suspense } from 'react';
import TopProgressBar from '../TopProgressBar';

const Loadable = ({ children, fallback, ...restProps }) => {
  return (
    <Suspense {...restProps} fallback={fallback || <TopProgressBar />}>
      {children}
    </Suspense>
  );
};

export default Loadable;
