import React, { lazy, Suspense } from 'react';

const Lazyfilterbuttons = lazy(() => import('./filterbuttons'));

const filterbuttons = props => (
  <Suspense fallback={null}>
    <Lazyfilterbuttons {...props} />
  </Suspense>
);

export default filterbuttons;
