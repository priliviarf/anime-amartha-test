import { forwardRef, useImperativeHandle, useRef } from 'react';
import { useRoutes } from 'react-router-dom';

import { routes } from '../../routes';

const Element = (_p, ref) => {
  const container = useRef();
  const element = useRoutes(routes);

  useImperativeHandle(ref, () => ({ container }));

  return (
    <div ref={container} className="element">
      {element}
    </div>
  );
};

export default forwardRef(Element);

// coba ini dipindah ke components nya app, lalu dikasih context-provider seperti react-next
