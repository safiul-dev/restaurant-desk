import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import LeftMain from '../components/Order/leftber/leftMain'
import LeftberMainButton from '../components/Buttons/leftberMainButton';

import Middle3Main from '../components/Order/middle3/middle3Main';
import LogoutButton from '../components/Buttons/logoutButton';
import Middle1Main from '../components/Order/Middle1/middle1Main';
import Middle2Main from '../components/Order/Middle2/middle2Main';


function Home() {
  return (
    <div className="bg-white w-full flex h-middleHeight">

      {/* <div className="w-leftMainWidth h-full bg-black">
        <LeftMain/>
      </div>

      <div className="w-middleWidth h-full mt-2 mb-4 ml-4 mr-2">
        
        <div className="w-full h-full flex">
                        
            <div className="w-middle1 h-middleSegmentHeight"><Middle1Main/></div>
            <div className="w-middle2 h-middleSegmentHeight mr-1 "><Middle2Main/></div>
            <div className="w-middle3 h-middleSegmentHeight mr-1 ml-3"><Middle3Main/></div>
        </div>
      
      </div>
      
      <div className="w-rigthWidth h-full bg-black"></div> */}

      <div className="w-1/2 h-full mr-1 border border-black">
        <div className="w-full h-full flex">
            <div className=" w-1/5 bg-black h-full">
              <LeftMain/>
            </div>
            <div className=" w-4/5 bg-white h-full mt-2 ml-4 mr-2 mb-4">
            <Middle1Main/>
            </div>
        </div>

      </div>
      <div className="w-1/2 ml-1 mr-1 border border-white">
        
      </div>
  </div>
  );
}

export default Home;
