"use client";
import { useContext, useEffect } from 'react';
import GlobalContext from '../contexts/GlobalContext';

export function useGlobal() {
  const { toogleMenu, menuMobile, appType, screen } = useContext(GlobalContext);
  useEffect(() => {
    document.body.style.overflow = menuMobile ? 'hidden' : 'auto';
  }, [menuMobile]);
  return {
    toogleMenu,
    menuMobile,
    appType,
    screen,
  };
}
