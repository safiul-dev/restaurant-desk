import Head from 'next/head';
import React from 'react';
import Link from 'next/link';

export default function AppLayout ({ children }) {
    return (
        <React.Fragment>
        <Head>
          <title>Home</title>
        </Head>
  
        <div className="w-screen max-w-full md:max-w-screen h-screen max-h-full md:max-h-screen bg-black fixed">
          <div className=" overflow-y-auto h-full ">

            {/*  navigation bar .... */}
              <div className="flex justify-between h-topHeight mb-0.5">
  
                  <div className=" w-leftMainWidth flex justify-center items-center  h-full">
                    <div className="flex justify-center items-center w-width96% rounded-md h-full mr-1 bg-primary">
                    <div className="mr-2">
                          <div className=" w-4 bg-white h-0.5"></div>
                          <div className=" w-4 bg-white h-0.5 mt-0.5"></div>
                          <div className=" w-4 bg-white h-0.5 mt-0.5"></div>
                      </div>

                      <div>
                              <h1 className="text-white uppercase not-italic sm:font-light md:font-medium lg:font-semibold xl:font-bold tracking-wide font-sans text-leftButtonFontSize sm:text-tiny md:text-base lg:text-lg xl:text-xl text-center">order</h1>
                        </div>
                    </div>
                     
                  </div>
                <div  className="w-leftMainWidth  ml-2 flex justify-center item-center">
                <Link href="/Deshboard/Index">
                   <button className="text-white uppercase bg-primary w-width96% rounded-md font-bold ">
                      <a>Logout</a>
                    </button>
                    </Link>
                </div>
              </div>

            {/* midlle components here... */}
                {children}

              {/* footer Section here ... */}
              <div className="w-full h-bottomHeight">
              <div className="flex justify-between">
                <div className="flex text-white mt-2 ml-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {new Date().toLocaleDateString()}
                    </div>

                    <div className="text-white flex mt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                      </svg>

                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                      </svg>
                    </div>
                </div>
              </div>
          </div>
          
  
  
  
        </div>
      </React.Fragment>
    )
}