import LeftberButton from "../Buttons/leftberButton";
import LeftberMainButton from "../Buttons/leftberMainButton";



export default function LeftMain () {
 
    const arrObj = [
        {
        name:"change table",
        showComponent:()=>{}
    },
    {
        name:"select waiter",
        showComponent:()=>{}
    },
    {
        name:"select customer",
        showComponent:()=>{}
    },
    {
        name:"ticket note",
        showComponent:()=>{}
    },
    {
        name:"change table",
        showComponent:()=>{}
    },
    {
        name:"change table",
        showComponent:()=>{}
    },
    {
        name:"change table",
        showComponent:()=>{}
    },
    {
        name:"change table",
        showComponent:()=>{}
    },
    {
        name:"change table",
        showComponent:()=>{}
    },
]
    const buttons = ['change table','select waiter', 'select customer', 'ticket note', 'canchel all', 'number of goust', 'print', 'split bill','add ticket']
    const listOfButton = buttons.map((name) =>< LeftberButton name={name} key={name} /> )
    return(
        <div className="mx-1 mt-1 overflow-x-auto h-full">

                {listOfButton}
            
        </div>
    
    )
}