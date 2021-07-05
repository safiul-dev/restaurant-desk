
export default function Table () {
    return(
        <div className="overflow-y-auto h-full">
                <table className="w-full rounded-t-md">
                            <thead className="bg-TheadColor rounded text-white overflow-y-auto h-16 ">
                                <tr className="border-white border">
                                    <td className="border border-white w-width5% text-center">QT</td>
                                    <td className="border border-white w-width65% text-center">Item Name</td>
                                    <td className="border border-white w-width30% text-center">Amount</td>
                                </tr>
                            </thead>
                            <tbody className="">
                                <tr className="border border-white" >
                                    <td className="border border-white text-center">
                                        2
                                        </td>
                                    <td className="border border-white">
                                    
                                    <h1 className="2xl:text-lg xl:text-base lg:text-tiny md:text-smallFont sm:text-extraSmall2">Checken Double Decker Bergur</h1>
                                        <h1 className=" text-center rounded-full font-normal text-smallFont md:text-extraSmall2 sm:text-extraSmall bg-white w-7/12">Submitted, Sent to kitchend, Order no. 1552</h1>
                                    </td>
                                    <td className="border border-white text-center 2xl:text-lg xl:text-base lg:text-tiny md:text-smallFont sm:text-extraSmall2">2000</td>
                                </tr>

                                <tr className="border border-white" >
                                    <td className="border border-white text-center">
                                        2
                                        </td>
                                    <td className="border border-white">
                                    <div>
                                    <div className="2xl:text-lg xl:text-base lg:text-tiny md:text-smallFont sm:text-extraSmall2">Checken Double Decker Bergur</div>
                                        <div className="text-center rounded-full font-normal text-smallFont md:text-extraSmall2 sm:text-extraSmall bg-white w-7/12">submited, send to ckichend, order no. 1552</div>
                                    
                                    </div>
                                        
                                        </td>
                                    <td className="border border-white text-center 2xl:text-lg xl:text-base lg:text-tiny md:text-smallFont sm:text-extraSmall2">2000</td>
                                </tr>

                                                
                                <tr>
                                    <td></td>
                                    <td className="text-right">
                                        <div>
                                        <div>Total:</div>
                                        <div>
                                        Vat:
                                        </div>
                                        </div>
                                        
                                    </td>
                                    <td className="text-center">
                                    <div>
                                        <div>2000.00</div>
                                        <div>
                                        177.00
                                        </div>
                                        </div>
                                        </td>
                                </tr>
                            </tbody>
                </table>
        </div>
        
    )
}