import React from "react";
import LeftberButton from "../../Buttons/leftberButton";
export default function LeftbarButtons () {

    const data = [
        {
            name:'change table',
            component:''
        },
        {
            name:'select waiter',
            component:''
        },
        {
            name:'select customer',
            component:''
        },
        {
            name:'ticket note',
            component:''
        },
        {
            name:'canchel all',
            component:''
        },
        {
            name:'number of goust',
            component:''
        },
        {
            name:'print',
            component:''
        },
        {
            name:'split bill',
            component:''
        },
        {
            name:'add ticket',
            component:''
        },
    ]
    
    const buttons = ['change table','select waiter', 'select customer', 'ticket note', 'canchel all', 'number of goust', 'print', 'split bill','add ticket']
    const listOfButton =  data.map((obj, index) =>< LeftberButton  name={obj.name} key={index} /> )
    return(
        <div className="mx-1 mt-1 overflow-x-auto h-full">

                {listOfButton}

        </div>
    
    )
}