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
    <React.Fragment>
      <Head>
        <title>Home</title>
      </Head>

      <div className="w-screen max-w-full md:max-w-screen h-screen max-h-full md:max-h-screen bg-black fixed">
        <div className=" overflow-y-auto h-full ">
            <div className="flex justify-between h-topHeight">

              <LeftberMainButton/>
              <div className="text-white uppercase bg-primary pr-5 pl-5 flex justify-center items-center mb-0.5 rounded-md font-bold">
                LogOut
              </div>
            </div>

            <div className="bg-white w-full flex h-middleHeight">
                <div className="w-leftMainWidth h-full bg-black">
                  <LeftMain/>
                </div>

                <Main/>
                
                <div className="w-rigthWidth h-full bg-black"></div>
            </div>

            <div className="w-full h-bottomHeight">
              <Footer/>
            </div>
        </div>
        



      </div>
    </React.Fragment>
  );
}

export default Home;
