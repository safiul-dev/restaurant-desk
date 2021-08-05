
 
const DataNotFound = ({Name, Email, Phone,Address, Status, Action}) => {
    return ( 
        <div className="w-full h-full">
                <table className="bg-secondary w-width99% mx-auto my-1 overflow-y-auto">
                    <thead className="bg-gray text-white uppercase">
                        <tr className="border-white border">
                        <th className="border-white border w-width15% text-center">{Name}</th>
                        <th className="border-white border w-width20% text-center">{Email}</th>
                            <th className="border-white border w-width15% text-center">{Phone}</th>
                            <th className="border-white border w-width30% text-center">{Address}</th>
                            <th className="border-white border w-width10% text-center">{Status}</th>
                            <th className="border-white border w-width10% text-center">{Action}</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                    </table>
                    <div className="flex justify-center items-center">
                     <h1 className="text-center text-secondary font-extrabold text-xl">Data Not Found</h1>
                    </div>
                    
                </div>
     );
}
 
export default DataNotFound;