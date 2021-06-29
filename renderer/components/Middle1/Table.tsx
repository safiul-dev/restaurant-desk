
export default function Table () {
    return(
        <table className="w-full divide-y divide-white divide-x divide-white ">
            <thead className="bg-TheadColor rounded text-white ">
                <tr>
                    <td className="">QT</td>
                    <td>Item Name</td>
                    <td>Amount</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>2</td>
                    <td>Berger</td>
                    <td>2000</td>
                </tr>
            </tbody>
        </table>
    )
}