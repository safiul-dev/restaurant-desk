import React, { Component, Props, useState } from 'react';
import CategoryRightbar1 from '../../components/Order/OrderRightbar/Category/CategoryRightbar';
import Payment from '../../components/Order/OrderRightbar/Payment/Payment';
import LeftbarButtons from '../../components/Order/Buttons/OrderLeftbarButtons/LeftbarButtons';
import Table from '../../components/Order/OrderLertbar/Table';
import TotalButton from '../../components/Order/Buttons/TotalBill';
import AppLayout from '../../AppLayout/AppLayout';
import { observer } from 'mobx-react';
import { CategoryDatas } from '../../components/Item/Category/CategoryData';
import { ItemDatas } from '../../components/Item/Item/ItemData';
import { TableDatas } from '../TableCrud/TableData';
import { WaiterDatas } from '../Waiter/WaitersData';
import { CustomerDatas } from '../Customer/CustomerData';
import { OrderDatas } from './OrdarData';
import { SubItemDatas } from '../../components/Item/SubItemData';





class Index extends Component{

    state = {
        isMounted: false,
        payment: false,
        category: <CategoryRightbar1/>
    }
    constructor (props) {
        super(props);
    }
    clickToShow = () => {
      this.setState({payment:!this.state.payment})
      this.setState({category:this.state.payment?<Payment/>:<CategoryRightbar1/>})
    }

    componentDidMount () {
        
        this.setState({isMounted: true})
        CategoryDatas.getCategroy()
        ItemDatas.getItems()
        TableDatas.getTables()
        WaiterDatas.getWaiters()
        CustomerDatas.getCustomsers()
        SubItemDatas.getAllSubItems()
        
      }

    componentWillUnmount() {
        this.setState({isMounted: false})
    }
  render() {

  
        return (
            <React.Fragment>
            <AppLayout>
            <div className="bg-white w-full flex h-middleHeight">

            <div className="w-1/2 h-full mr-1">
                <div className="w-full h-full flex">
                    <div className=" w-1/5 bg-black h-full">
                    <LeftbarButtons/>
                    </div>
                    <div className=" w-4/5 bg-white h-height96% mt-2 ml-4 mr-2 mb-4">
                    
                    <div className="w-full h-full"> 
                    <div className="w-full bg-middle1Bg overflow-y-auto h-4/5 rounded-lg">
                        <div className="h-4/5 pt-3 bg-primary w-full rounded-b-middle1BottomRounded shadow-lg rounded-lg">
                            <div className="h-4/5 mx-2 ">
                                <div className="h-full">
                                    <div className="rounded-sm h-middle1SmallTableCollunmHeight bg-middle1Bg flex justify-between pb-1">
                                        <div className="2xl:text-lg xl:text-lg lg:text-smallFont md:text-smallFont sm:text-extraSmall2 mb-1">Ticket #<span className="bg-red rounded-md text-white 2xl:text-base xl:text-tiny lg:text-smallFont md:text-smallFont sm:text-extraSmall2">621</span> </div>
                                        <div className="2xl:text-lg xl:text-lg lg:text-smallFont md:text-smallFont sm:text-extraSmall2 mb-1">Order #<span className="bg-red rounded-md text-white 2xl:text-base xl:text-tiny lg:text-smallFont md:text-smallFont sm:text-extraSmall2">621</span></div>
                                        <div className="2xl:text-lg xl:text-lg lg:text-smallFont md:text-smallFont sm:text-extraSmall2 mb-1">Table: <span className="bg-red rounded-md text-white 2xl:text-base xl:text-tiny lg:text-smallFont md:text-smallFont sm:text-extraSmall2">{0}</span></div>
                                    </div>
                                    <div className="rounded-sm h-middle1SmallTableCollunmHeight bg-middle1Bg mt-0.5 flex justify-between">
                                        <div className="2xl:text-lg xl:text-lg lg:text-smallFont md:text-smallFont sm:text-extraSmall2">Status: <span className="bg-black rounded-md uppercase text-red 2xl:font-semibold xl:font-semibold lg:font-medium md:font-normal sm:font-light">uppaid</span></div>
                                        <div className="2xl:text-lg xl:text-lg lg:text-smallFont md:text-smallFont sm:text-extraSmall2 pr-2">New: <span className="text-primary">Running Order</span></div>
                                    </div>
                                    <div className="rounded-sm h-middle1SmallTableCollunmHeight bg-middle1Bg mt-0.5 mb-1 2xl:text-lg xl:text-lg lg:text-smallFont md:text-smallFont sm:text-extraSmall2">Dept: Dine In</div>
                                    <div className="w-full h-middle1LongTableCollunmHeight bg-middle1Bg rounded-b-3xl rounded">
                                        <Table/>
                                    </div>

                                    <div className=" mt-1 pl-2 sm:px-4 text-white flex justify-between sm:text-extraSmall2 md:text-smallFont lg:text-smallFont xl:text-tiny">
                                        <div>Number Of Guests: 01</div>
                                        <div className="mr-5 text-right">
                                            <div>Distink Menu Items: 03</div>
                                            <div>Number Of Ordered Items: 04</div>
                                        </div>
                                    </div>
                                </div>

                                    <div className="2xl:mt-14 xl:mt-12 lg:mt-11 md:mt-10 sm:mt-7 w-full flex justify-center h-middle1MainAmountHeight">
                                        <TotalButton amount="454545"/>
                                    </div>
                                
                            </div>

                        
                        </div>

                            <div className="xl:mt-14 lg:mt-10 md:mt-8 sm:mt-6 flex justify-between font-normal sm:text-extraSmall2 md:text-smallFont lg:text-smallFont xl:text-tiny mx-3 ">
                                <div>Tecket Opening: 04:30 PM (10 min.)</div>
                                <div>Lat Order: 03:30 PM (60 min.)</div>
                            </div>
                    </div>

                    <div className="h-height20% w-full flex justify-between xl:mt-2 lg:mt-4 md:mt-2 sm:mt-1">
                        <button onClick={this.clickToShow} className="uppercase rounded-lg bg-middle1Bg h-middle1BottomButtonHeight w-width45% flex justify-center items-center 2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-tiny 2xl:font-black xl:font-extrabold lg:font-bold md:font-medium sm:font-normal text-buttomButtonDarkLight">
                            Setteld
                        </button>
                        <button className="uppercase rounded-lg bg-red h-middle1BottomButtonHeight w-width45% flex justify-center items-center 2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-tiny 2xl:font-black xl:font-extrabold lg:font-bold md:font-medium sm:font-normal text-white">
                            Submited
                        </button>
                    </div>
            
                </div>
                    
                    </div>
                </div>

            </div>
            <div className="w-1/2 h-full">
                
                {this.state.category}
                {/* <CategoryRightbar2/> */}
                
            </div>
        </div>
        </AppLayout>
        </React.Fragment>
        );
    }
}
export default observer(Index);
