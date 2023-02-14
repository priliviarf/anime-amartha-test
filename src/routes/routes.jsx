import React from 'react';
import { Loadable, PublicRoute } from '../components';
import paths from './paths';

const Home = React.lazy(() => import('../containers/Home'));

const routes = [
  {
    path: paths.home,
    // element: <Home />,
    element: (
      <PublicRoute>
        <Loadable>
          <Home />
        </Loadable>
      </PublicRoute>
    ),
  },
  {
    path: paths.nomatch,
    element: (
      <PublicRoute>
        <Loadable>
          <div>Not Found</div>
        </Loadable>
      </PublicRoute>
    ),
  },
];

export default routes;
