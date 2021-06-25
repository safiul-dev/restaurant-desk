import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Home</title>
      </Head>
      <div className="grid-container">
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
        <div className="footer">Footer</div>
      </div>
    </React.Fragment>
  );
}

export default Home;
