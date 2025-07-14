'use client';
import { useGlobal } from '@/hooks/useGlobal';
import Sidebar from './Sidebar';
import SideBarMobile from './SideBarMobile';
interface Prosp {
  children: React.ReactNode;
}
export function WapperMenu({ children }: Prosp) {
  const { appType } = useGlobal();
  return (
    <>
      {appType === 'mobile' ? <SideBarMobile/> : <Sidebar />}
      <main className={`${appType === 'mobile' ? 'mt-16' : 'ml-64'} p-6 bg-gray-100 w-full min-h-screen`}>
        {children}
      </main>
    </>
  );
}
