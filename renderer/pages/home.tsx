import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import LeftMain from '../components/leftber/leftMain'
import LeftberMainButton from '../components/Buttons/leftberMainButton';
import Middle1Main from '../components/Middle1/middle1Main';
import Middle2Main from '../components/Middle2/middle2Main';
import Middle3Main from '../components/middle3/middle3Main';
import LogoutButton from '../components/Buttons/logoutButton';
import Footer from '../components/Footer/footer';
import Main from '../components/MiddleMain/Main';
function Home() {
  return (
            <div className="w-full h-full flex">
                        
            <div className="w-middle1 h-middleSegmentHeight"><Middle1Main/></div>
            <div className="w-middle2 h-middleSegmentHeight mr-1 "><Middle2Main/></div>
            <div className="w-middle3 h-middleSegmentHeight mr-1 ml-3"><Middle3Main/></div>
        </div>
  );
}

export default Home;
