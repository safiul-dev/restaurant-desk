import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import LeftMain from '../components/leftber/leftMain'
import LeftberMainButton from '../components/Buttons/leftberMainButton';
import Middle1Main from '../components/Middle1/middle1Main';

function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Home</title>
      </Head>
      {/* <div className="grid-container">
        <div className="header">
          <div className="order">
            <div className="icon">
              <div className="icons"></div>
              <div className="icons"></div>
              <div className="icons"></div>
            </div> 
            <div className="order-title">
              ORDER
            </div>
          </div>
          <div className="logout">LOG OUT</div>
        </div>
        <div className="menu">Menu</div>
        <div className="main">Main</div>  
        <div className="footer">
          <div className="timestamp">
            Date Time showing...
          </div>
        </div>
      </div> */}

      <div className="w-screen max-w-full md:max-w-screen h-screen max-h-full md:max-h-screen bg-black">
        <div className="h-full">
            <div className="flex justify-between h-topHeight">

              <LeftberMainButton/>
              <div className=" bg-primary">
                Logout
              </div>
            </div>

            <div className="bg-white w-full flex h-middleHeight">
                <div className="w-leftMainWidth h-full bg-black">
                  <LeftMain/>
                </div>
                <div className="w-middleWidth h-full mt-2 mb-4 ml-4 mr-2"> 
                    <div className="w-middle1 h-full"><Middle1Main/></div>
                    <div className="w-middle2"></div>
                    <div className="w-middle3"></div>
                </div>
                <div className="w-rigthWidth h-full bg-black">dfdf</div>
            </div>

            <div className="w-full h-bottomHeight">
              <h2 className="text-white">this footer</h2>
            </div>
        </div>
        



      </div>
    </React.Fragment>
  );
}

export default Home;
