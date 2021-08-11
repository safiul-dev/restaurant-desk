import { observer } from "mobx-react";
import { Component } from "react";
import { OrderDatas } from '../../../pages/Order/OrdarData';

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
        <div className="h-full">


        <div className=" h-height80% border-b border-white overflow-y-scroll scrollbar-hide">
                <table className="w-full   rounded-t-md">
                            <thead className="bg-TheadColor rounded text-white overflow-y-auto h-16 ">
                                <tr className="border-white border">
                                    <td className="border border-white w-width5% text-center">QT</td>
                                    <td className="border border-white w-width65% text-center">Item Name</td>
                                    <td className="border border-white w-width30% text-center">Amount</td>
                                </tr>
                            </thead>
                            <tbody className="">
                                {OrderDatas.data.length? OrderDatas.data.map((item, index) =>  
                                <tr key={index} className="border border-white" >
                                    <td className="border border-white">
                                        <div className="group w-full h-full flex justify-center items-center">
                                            
                                            <div className=" block group-hover:hidden" style={{}} id="qt">{item.itemQt}</div>
                                            <div className="hidden group-hover:block text-red ">
                                            

                                                <svg onClick={() => this.increaseQuantity(item.itemUniq, item.subPricingUniq)} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 hover:text-blackRed border border-secondary hover:border-blackRed  rounded-full mb-0.5"fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
</svg>
<svg onClick={() => this.decrementQuantity(item.itemUniq,item.subPricingUniq)} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 hover:text-blackRed border border-secondary hover:border-blackRed rounded-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
</svg>
                                            </div>
                                        </div>
                                        </td>
                                    <td className="border border-white">
                                    
                                    <h1 className="2xl:text-lg xl:text-base lg:text-tiny md:text-smallFont sm:text-extraSmall2">{item.itemTitle}</h1>
                                        <h1 className=" text-center rounded-full font-normal text-smallFont md:text-extraSmall2 sm:text-extraSmall bg-white w-7/12">Submitted, Sent to kitchend, Order no. 1552</h1>
                                    </td>
                                    <td className="border border-white text-center 2xl:text-lg xl:text-base lg:text-tiny md:text-smallFont sm:text-extraSmall2">{item.itemPrice}</td>
                                </tr>
                                    )
                                :
                                    null
                                }
                            </tbody>
                </table>
              
        </div>

                <div className="float-right mr-16">
                    <div className="flex flex-row">
                        <div className="mr-20">Total:</div>
                        <div className="">2000.00</div>
                    </div>
                    <div className="flex flex-row">
                        <div className="mr-20">Vat:</div>
                        <div className="ml-5">177.00</div>
                    </div>
                </div>
    </div>
    )
    }
}
export default observer(Table);