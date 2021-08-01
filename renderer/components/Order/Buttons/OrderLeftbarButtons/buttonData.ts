import React from "react";

interface ButtonData { 
    data:[]
}
 class ButtonData extends React.Component{
    state = {
        data : [
            {
                name:'change table',
                component:'changeTable'
            },
            {
                name:'select waiter',
                component:'selectWeiter'
            },
            {
                name:'select customer',
                component:'selectCustomer'
            },
            {
                name:'ticket note',
                component:'ticketNote'
            },
            {
                name:'cancel all',
                component:'cancelAll'
            },
            {
                name:'number of guest',
                component:'numberOfGuest'
            },
            {
                name:'print',
                component:'print'
            },
            {
                name:'split bill',
                component:'splitBill'
            },
            {
                name:'add ticket',
                component:'addTicket'
            },
        ]
    }  
    
   
 }
     


export default ButtonData;


