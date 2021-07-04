import Head from 'next/head';
import React from 'react';
import LeftberMainButton from '../components/Buttons/leftberMainButton';
import LeftMain from '../components/leftber/leftMain';
import Footer from '../components/Footer/footer';

export default function AppLayout ({ children }) {
    return (
        <React.Fragment>
        <Head>
          <title>Home</title>
        </Head>
  
        <div className="w-screen max-w-full md:max-w-screen h-screen max-h-full md:max-h-screen bg-black fixed">
          <div className=" overflow-y-auto h-full ">

            {/*  navigation bar .... */}
              <div className="flex justify-between h-topHeight">
  
                <LeftberMainButton/>
                <div className="text-white uppercase bg-primary pr-5 pl-5 flex justify-center items-center mb-0.5 rounded-md font-bold">
                  LogOut
                </div>
              </div>

            {/* midlle components here... */}
              <div className="bg-white w-full flex h-middleHeight">
                {/* Left navigation bar ... */}
                  <div className="w-leftMainWidth h-full bg-black">
                    <LeftMain/>
                  </div>
  
                  <div className="w-middleWidth h-full mt-2 mb-4 ml-4 mr-2">
                    {/* middle bar ... */}
                    {children}
                  
                  </div>
                  
                  <div className="w-rigthWidth h-full bg-black"></div>
              </div>

              {/* footer Section here ... */}
              <div className="w-full h-bottomHeight">
                <Footer/>
              </div>
          </div>
          
  
  
  
        </div>
      </React.Fragment>
    )
}