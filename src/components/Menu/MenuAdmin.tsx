import React, { useEffect, useRef } from 'react';

import useStore from '@store/store';

import NewChat from './NewChat';
import NewFolder from './NewFolder';
import ChatHistoryList from './ChatHistoryList';
import MenuOptions from './MenuOptions';

import CrossIcon2 from '@icon/CrossIcon2';
import DownArrow from '@icon/DownArrow';
import MenuIcon from '@icon/MenuIcon';

const MenuAdmin = (props: {loading: boolean}) => {
  const hideSideMenu = useStore((state) => state.hideSideMenu);
  const setHideSideMenu = useStore((state) => state.setHideSideMenu);

  const windowWidthRef = useRef<number>(window.innerWidth);

  useEffect(() => {
    if (window.innerWidth < 768) setHideSideMenu(true);
    else setHideSideMenu(false)
    window.addEventListener('resize', () => {
      if (
        windowWidthRef.current !== window.innerWidth &&
        window.innerWidth < 768
      )
        setHideSideMenu(true);
    });
  }, []);

  return (
    <>
      <div
        id='menu'
        className={`group/menu dark bg-gray-900 fixed md:inset-y-0 md:flex md:w-[260px] md:flex-col transition-transform z-[999] top-0 left-0 h-full max-md:w-3/4 ${
          hideSideMenu ? 'translate-x-[-100%]' : 'translate-x-[0%]'
        }`}
      >
        <div className='flex h-full min-h-0 flex-col'>
          <div className='flex h-full w-full flex-1 items-start border-white/20'>
            <nav className='flex h-full flex-1 flex-col space-y-1 px-2 pt-2'>
              
              <>
                <ChatHistoryList  loading={props.loading} />

                <MenuOptions role={"admin"} />
              </>
            </nav>
          </div>
        </div>
       
        
      </div>
      <div
        id='menu-backdrop'
        className={`${
          hideSideMenu ? 'hidden' : ''
        } md:hidden fixed top-0 left-0 h-full w-full z-[60] bg-gray-900/70`}
        onClick={() => {
          setHideSideMenu(true);
        }}
      />
    </>
  );
};

export default MenuAdmin;
