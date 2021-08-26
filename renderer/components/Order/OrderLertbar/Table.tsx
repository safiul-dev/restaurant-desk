import { observer } from "mobx-react";
import { Component } from "react";
import { OrderDatas } from '../../../pages/Order/OrdarData';
import styles from  './TableScrolStyle.module.css'

interface TableProps {
    
}
class Table extends Component {
    state = {

    }
    constructor(props) {
        super(props);
    }
    
    // Increasing the Quantity value
    increaseQuantity (itemUniq, subItemUniq) {
    OrderDatas.data.find((item) => item.subPricingUniq === subItemUniq && item.itemUniq === itemUniq? item.itemQt++ : null);   
    }

    // decreasing the Quantity value and delete item
    decrementQuantity(itemUniq, subPricingUniq){
        var isQuantityZero = false;
        var zeroQtItem = null
        OrderDatas.data.find((item) => {if(item.subPricingUniq === subPricingUniq &&item.itemUniq === itemUniq){
            
            item.itemQt --;
            if(item.itemQt === 0) {
                zeroQtItem = item
                isQuantityZero = true;
            }
        }}) 

        if(isQuantityZero) {
            
            OrderDatas.data.splice(OrderDatas.data.indexOf(zeroQtItem), 1)
        }
    }

    render() {
    return(
        <div className="h-full w-full">
        <div className=" h-height80% border-b border-white w-full">
                <table className="w-full">
                            <thead className="bg-TheadColor text-white w-full ">
                                <tr className=" flex w-full xl:text-base lg:text-tiny md:text-tiny sm:text-extraSmall2">
                                    <td className="border border-white text-center w-width5%">QT</td>
                                    <td className="border border-white w-width65% text-center">Item Name</td>
                                    <td className="border border-white w-width30% text-center">Amount</td>
                                </tr>
                            </thead>
                            <tbody className="h-32 w-full ">
                                <div className={styles.scrollBer} style={{height: "23vh"}}>
                                <div className="grid grid-flow-row-dense w-full  ">  
                                   {OrderDatas.data.length? OrderDatas.data.map((item, index) =>  
                                        <tr key={index} className=" w-full flex" >
                                            <td className="border-white border text-center w-width5.5%" >
                                                <div className="group w-full h-full flex justify-center items-center">
                                                    
                                                    <div className=" block group-hover:hidden" id="qt"> <span>{item.itemQt}</span></div>
                                                        <div className="hidden group-hover:block text-red ">
                                                            <svg onClick={() => this.increaseQuantity(item.itemUniq, item.subPricingUniq)} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 hover:text-blackRed border border-secondary hover:border-blackRed  rounded-full mb-0.5"fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                                            </svg>
                                                            <svg onClick={() => this.decrementQuantity(item.itemUniq,item.subPricingUniq)} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 hover:text-blackRed border border-secondary hover:border-blackRed rounded-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 12H6" />
                                                            </svg>
                                                        </div>
                                                </div>
                                                </td>
                                            <td className="border-white border text-left xl:w-width65% lg:w-width65%" >
                                            
                                                <h1 className="2xl:text-lg xl:text-base lg:text-tiny md:text-smallFont sm:text-extraSmall2">{item.itemTitle}</h1>
                                                <h1 className=" text-center rounded-full font-normal text-smallFont md:text-extraSmall2 sm:text-extraSmall bg-white w-7/12">Submitted, Sent to kitchend, Order no. 1552</h1>
                                            </td>
                                            <td className=" w-width28% border border-white text-center 2xl:text-lg xl:text-base lg:text-tiny md:text-smallFont sm:text-extraSmall2 flex justify-center items-center">{item.itemPrice}</td>
                                        </tr>
                                    )
                                :
                                    null
                                }
                                </div>
                                </div>

                                
                            </tbody>
                </table>
              
        </div>

                <div className="float-right mr-16">
                    <div className="flex flex-row">
                        <div className="mr-20">Total :</div>
                        <div className="">{OrderDatas.total? OrderDatas.total : "0.00"}</div>
                    </div>
                    <div className="flex flex-row">
                        <div className="mr-16">Vat :</div>
                        <div className="ml-5">{OrderDatas.VAT ? OrderDatas.VAT : "0.00"}</div>
                    </div>
                </div>
    </div>
    )
    }
}
export default observer(Table);