import { useEffect, useState } from 'react';

import { breakpoints, breakpointsMax, BreakpointsNames, BreakpointsNamesMax } from '../constants';

export const useMediaQuery = ({
  minWidth: minWidthBp,
  maxWidth: maxWidthBp,
}: {
  minWidth?: BreakpointsNames;
  maxWidth?: BreakpointsNamesMax;
}) => {
  const [innerWidth, setInnerWidth] = useState(0);

  const minWidth = minWidthBp && breakpoints[minWidthBp];
  const maxWidth = maxWidthBp && breakpointsMax[maxWidthBp];

  useEffect(() => {
    const resizer = () => setInnerWidth(window.innerWidth);

    resizer();

    window.addEventListener('resize', resizer);

    return () => {
      window.removeEventListener('resize', resizer);
    };
  }, []);

  return (!minWidth || innerWidth >= minWidth) && (!maxWidth || innerWidth < maxWidth);
};
