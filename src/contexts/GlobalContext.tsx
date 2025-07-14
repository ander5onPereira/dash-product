'use client';
import { createContext, useEffect, useState } from 'react';
export type appTypeT = 'mobile' | 'tablet' | 'desktop';
export type breakPointTypeT = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
interface Props {
  children: React.ReactNode;
}

export interface GlobalContextInterface {
  toogleMenu: () => void;
  menuMobile: boolean;
  appType: appTypeT;
  screen: breakPointTypeT;

}

const GlobalContext = createContext<GlobalContextInterface>({
  toogleMenu: () => {},
  menuMobile: false,
  appType: 'mobile',
  screen: 'xs',

});

const breakpoints = {
  xs: '(max-width: 639px)',
  sm: '(min-width: 640px) and (max-width: 767px)',
  md: '(min-width: 768px) and (max-width: 1023px)',
  lg: '(min-width: 1024px) and (max-width: 1279px)',
  xl: '(min-width: 1280px) and (max-width: 1399px)',
  '2xl': '(min-width: 1400px)',
};
export const GlobalProvider = ({ children }: Props) => {
  const [menuMobile, setMenuMobile] = useState(false);
  const [screen, setScreen] = useState<any>('sm');

  function getAppType(): appTypeT {
    const mobileSizes = ['xs', 'sm'];
    const tabletSizes = ['md'];

    if (mobileSizes.includes(screen)) {
      return 'mobile';
    }
    if (tabletSizes.includes(screen)) {
      return 'tablet';
    }
    return 'desktop';
  }
  function toogleMenu() {
    setMenuMobile((st) => !st);
  }
  const appType = getAppType();

  useEffect(() => {
    const mediaQueryLists = Object.keys(breakpoints).map((key) => ({
      breakpoint: key,
      mql: window.matchMedia(breakpoints[key as keyof typeof breakpoints]),
    }));

    const getActiveBreakpoint = () => {
      const activeBreakpoint = mediaQueryLists.find(({ mql }) => mql.matches);
      setScreen(activeBreakpoint ? activeBreakpoint.breakpoint : 'xs');
    };

    getActiveBreakpoint();

    mediaQueryLists.forEach(({ mql }) =>
      mql.addEventListener('change', getActiveBreakpoint)
    );

    return () => {
      mediaQueryLists.forEach(({ mql }) =>
        mql.removeEventListener('change', getActiveBreakpoint)
      );
    };
  }, []);
  return (
    <GlobalContext.Provider
      value={{
        toogleMenu,
        menuMobile,
        appType,
        screen,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
