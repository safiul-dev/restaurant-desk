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
                                    <td className="border border-white inline-block align-middle relative">
                                        <div className=" absolute" id="qt">{item.itemQt}</div>
                                        <div className="opacity-0 hover:opacity-100 text-red absolute">-</div>
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