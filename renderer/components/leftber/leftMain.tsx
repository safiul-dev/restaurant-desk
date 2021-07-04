import LeftberButton from "../Buttons/leftberButton";
import LeftberMainButton from "../Buttons/leftberMainButton";



export default function LeftMain () {
 
    const buttons = [
                {
                name:"change table",
                showComponent:()=>true
            },
            {
                name:"select waiter",
                showComponent:()=>true
            },
            {
                name:"select customer",
                showComponent:()=>true
            },
            {
                name:"ticket note",
                showComponent:()=>true
            },
            {
                name:"canchel all",
                showComponent:()=>true
            },
            {
                name:"number of goust",
                showComponent:()=>true
            },
            {
                name:"print",
                showComponent:()=>true
            },
            {
                name:"split bill",
                showComponent:()=>true
            },
            {
                name:"add ticket",
                showComponent:()=>true
            },
        ]

    const listOfButton = buttons.map((items) =>< LeftberButton name={items.name} key={items.name} clicked={items.showComponent} /> )
    return(
        <div className="mx-1 mt-1 overflow-x-auto h-full">

                {listOfButton}
            
        </div>
    
    )
}