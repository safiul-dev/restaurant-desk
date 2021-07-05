import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import LeftbarButtons from '../../components/Order/OrderLeftbarButtons/LeftbarButtons';
import OrderTable from '../../components/Order/OrderTable/OrderTable';
import CategoryMain from '../../components/Order/Category/CategoryMain';
import SubCategory from '../../components/Order/SubCategory/SubCategory';



function Index() {
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
        <div className=" w-full h-full flex">
          <div className="w-width40% h-height96% mt-2 mr-1">
              <CategoryMain/>
              this index
          </div>
          <div className="w-width55% h-height96% mt-2 ml-1 mr-1">
            <SubCategory/>
          </div>
          <div className="w-width5% h-full bg-black">

          </div>
        </div>
      </div>
  </div>
  </React.Fragment>
  );
}

export default Index;