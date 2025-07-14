import { Divider } from '../Divider';
import { MdOutlineSpeed } from 'react-icons/md';
import { IoMdWallet } from 'react-icons/io';
import { MdFeaturedPlayList } from 'react-icons/md';
import { MdShoppingCartCheckout } from 'react-icons/md';
import { MdOutlineRssFeed } from 'react-icons/md';
import { FaUser } from 'react-icons/fa6';
import { FaPowerOff } from 'react-icons/fa6';
import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className='w-64 h-screen bg-primary text-white fixed flex flex-col'>
      <div className='text-center py-6 text-xl font-bold flex max-w-full justify-center'>
        <img src='/logoArp.png' alt='Ritix' className='w-16' />
      </div>

      <Divider />

      <nav className='flex flex-col text-base flex-1 overflow-y-auto'>
        <Link
          href='/'
          className='hover:text-gray-200 px-3 py-8 flex items-center gap-2'
        >
          <MdOutlineSpeed className='size-5' />
          <span>Dashboard</span>
        </Link>
        <Divider />
        <div className='my-4 flex flex-col'>
          <Link
            href='/products'
            className='hover:text-gray-200 px-3 py-3 flex items-center gap-2'
          >
            <MdFeaturedPlayList className='size-5' />
            <span>Produtos</span>
          </Link>
        </div>
      </nav>
    </aside>
  );
}
