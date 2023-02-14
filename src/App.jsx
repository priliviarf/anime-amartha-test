import { useRef, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Element, ErrorBoundary } from './components';
import { AppProvider } from './context';
import { paths } from './routes';

import 'bootstrap/dist/css/bootstrap.min.css';

import './styles/index.scss';

function App() {
  const element = useRef();
  const path = paths.home;

  const [app, setApp] = useState();

  return (
    <BrowserRouter>
      <AppProvider
        value={{
          app,
          setApp,
        }}
      >
        <ErrorBoundary>
          <Element path={path} ref={element} />
        </ErrorBoundary>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
