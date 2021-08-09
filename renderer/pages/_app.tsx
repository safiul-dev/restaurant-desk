import React from 'react';
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import {useEffect} from 'react';
import { CategoryDatas } from '../components/Item/Category/CategoryData';
import { ItemDatas } from '../components/Item/Item/ItemData';
import { SubItemDatas } from '../components/Item/SubItemData';
import { WaiterDatas } from './Waiter/WaitersData';

function MyApp({ Component, pageProps }: AppProps) {

  // useEffect(() => {
  //   CategoryDatas.getCategroy(),
  //   CategoryDatas.getActiveCategory(),
  //   ItemDatas.getItems()
  //   SubItemDatas.getAllSubItems()
  //   return 
  // }
  //   )
  return (
    <React.Fragment>
     
        <Component {...pageProps} />
      
    </React.Fragment>
  )
}



export default MyApp;

