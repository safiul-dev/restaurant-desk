import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import LeftMain from '../components/Order/OrderLeftbarButtons/LeftbarButtons'
import LeftberMainButton from '../components/Buttons/leftberMainButton';

import Middle3Main from '../components/Order/SubCategory/SubCategory';
import LogoutButton from '../components/Buttons/logoutButton';
import SubCategory from '../components/Order/SubCategory/SubCategory';
import OrderTable from '../components/Order/OrderTable/OrderTable';
import CategoryMain from '../components/Order/Category/CategoryMain';
import LeftbarButtons from '../components/Order/OrderLeftbarButtons/LeftbarButtons';
import CategoryRightbar1 from '../components/Order/CategoryRightbar1';
import CategoryRightbar2 from '../components/Order/CategoryRightbar2';


function Home() {

  const [getItem, setItem] = useState(<CategoryRightbar1/>)
  const clickToShow = () => {
    setItem(<CategoryRightbar2/>)
  }
  return (
    <React.Fragment>
    <div className="bg-white w-full flex h-middleHeight">

      <div className="w-1/2 h-full mr-1">
        <div className="w-full h-full flex">
            <div className=" w-1/5 bg-black h-full">
              <LeftbarButtons/>
            </div>
            <div className=" w-4/5 bg-white h-height96% mt-2 ml-4 mr-2 mb-4">
            <OrderTable/>
            
            </div>
        </div>

      </div>
      <div className="w-1/2 h-full">
        
      <CategoryRightbar2/>
        
      </div>
  </div>
  </React.Fragment>
  );
}

export default Home;
