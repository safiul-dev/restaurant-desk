import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';


function Home(props) {
  
  return (
    <React.Fragment>
    <div className="bg-white w-full flex h-middleHeight">

            <div className="w-6/12 mx-auto mt-10">
                    <button className="my-4 mx-4 bg-primary text-white rounded"><Link href="/Deshboard/Index"><a>Deshboard</a></Link></button>
                    <button className="my-4 mx-4 bg-primary text-white rounded"><Link href="/Order/Index"><a>Order</a></Link></button>
                    <button type="button" >Show Model</button>
                   
            </div>
           
  </div>

  

  </React.Fragment>
  );
}



export default Home;
