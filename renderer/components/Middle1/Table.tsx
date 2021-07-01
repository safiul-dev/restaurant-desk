
export default function Table () {
    return(
        <table className=" w-full table-auto">
            <thead className="bg-TheadColor rounded text-white ">
                <tr className="border-white border">
                    <td className="border border-white w-width5% text-center">QT</td>
                    <td className="border border-white w-width75% text-center">Item Name</td>
                    <td className="border border-white w-width20% text-center">Amount</td>
                </tr>
            </thead>
            <tbody className="overflow-y-auto">
                <tr className="border border-white" >
                    <td className="border border-white text-center">
                        2
                        </td>
                    <td className="border border-white">
                       
                       <h1>Checken Double Decker Bergur</h1>
                        <h1 className=" text-center rounded-full font-extralight text-smallFont bg-white w-7/12">Submitted, Sent to kitchend, Order no. 1552</h1>
                       
                        
                        </td>
                    <td className="border border-white text-center">2000</td>
                </tr>

                <tr className="border border-white" >
                    <td className="border border-white text-center">
                        2
                        </td>
                    <td className="border border-white">
                       <div>
                       <div>Checken Double Decker Bergur</div>
                        <div className="text-center rounded-full font-extralight text-smallFont bg-white w-7/12">submited, send to ckichend, order no. 1552</div>
                       
                       </div>
                        
                        </td>
                    <td className="border border-white text-center">2000</td>
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
    )
}