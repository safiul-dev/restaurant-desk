import React from "react";
import { TableDatas } from '../../../../pages/TableCrud/TableData';
import { WaiterDatas } from "../../../../pages/Waiter/WaitersData";
import { CustomerDatas } from '../../../../pages/Customer/CustomerData';
import { OrderDatas } from '../../../../pages/Order/OrdarData';
import SelectOptionSearch from '../../../Comon/SelectOptionSearch';
import { observer } from "mobx-react-lite";



class LeftbarButtons extends React.Component{

    state = {
        currentComponent: null,
        showModal: false,
        table: '',
        waiter: '',
        customer: '',
        ticketNote: '',
        guests: 1,
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
    ]}
    constructor(props){
        super(props);

    }


    

    Modal() {
        if(this.state.showModal === false){
            return null;
        }
        
        return (
            <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="false">
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            

                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                    <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                            {
                               this.currentBodyInModal()
                            }


                        </div>
                    </div>
                    { this.state.currentComponent === 'cancelAll' || this.state.currentComponent === 'print'? null : 
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <button onClick={() => this.saveModal()} type="button" className="w-full inline-flex justify-center rounded-md border border-primary hover:bg-primary hover:text-white shadow-sm px-4 py-2 bg-red-600 text-base font-medium bg-white text-primary hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
                            Save
                        </button>
                        <button onClick={() => this.cancelModal()} type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-primary hover:bg-primary hover:text-white  shadow-sm px-4 py-2 bg-white text-primary text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                            Close
                        </button>
                    </div>
                    }
                    </div>
                </div>
        </div>
        )
    }

    onSelectTable = (uniq: string) => {
        this.setState({ table: uniq })
        
    }

    onSelectCustomer = (uniq: string) => {
        this.setState({ customer: uniq })
    }

    onSelectWater = (uniq: string) => {
       
        this.setState({ Waiter: uniq })
    }

    // current body setting up using currentComponent
    currentBodyInModal() {
        
            if(this.state.currentComponent === 'changeTable') {
                return <SelectOptionSearch data = {TableDatas.data} getUniq = {(uniq) => this.onSelectTable(uniq)}  name="Select Table" />
            }else if (this.state.currentComponent === 'selectWeiter') {
                return <SelectOptionSearch data = {WaiterDatas.data} getUniq = {(uniq) => this.onSelectWater(uniq)}  name="Select Waiter" />
            }else if (this.state.currentComponent === 'selectCustomer') {

                return <SelectOptionSearch data = {CustomerDatas.data} getUniq = {(uniq) => this.onSelectCustomer(uniq)}  name="Select Customer" />

            }else if(this.state.currentComponent === 'ticketNote') {
                return<div className="w-full">
                            <div className="text-center font-bold text-primary text-xl">Write Down Some Note for this Order</div>
                                
                            <textarea name=""  onChange={(e) => this.setState({ ticketNote: e.target.value})} id="" className="w-full h-20 outline-none rounded border border-primary px-2 text-grayNormal" defaultValue={this.state.customer}/>
                        </div> 
            }else if (this.state.currentComponent === 'cancelAll') {
               return <div className="w-full">
                             <div className="text-center font-bold text-primary text-xl mb-4">Cancel The Order</div>
                        <div className="w-full flex justify-evenly">
                           <div onClick={this.clearAllOrderPage} className="text-center flex justify-center items-center font-bold text-white text-xl uppercase bg-red h-12 rounded-md pointer shadow-md hover:bg-tomato cursor-pointer px-3 ">
                               Clear All
                           </div>
                           <div onClick={() => this.cancelModal()} className="text-center flex justify-center items-center font-bold text-white text-xl uppercase bg-primary h-12 rounded-md pointer shadow-md hover:bg-blue cursor-pointer px-3 ">
                               Close
                           </div>
                         
                        </div> 
                      </div>
               
            }else if (this.state.currentComponent === 'numberOfGuest') {
                return   <div className="w-full">
                            <div className="text-center font-bold text-primary text-xl uppercase">how many guest have?</div>
                                
                            <input onChange={(e) => this.setState({ guests: e.target.value})} value={this.state.guests} type="number" min="0" max="100" className="w-full rounded h-10 px-2 text-grayNormal outline-none border border-primary" placeholder="Enter guest..." />
                        </div>
            }else if (this.state.currentComponent === 'print') {
                return  <div className="w-full">
                            <div className="text-center font-bold text-primary text-xl mb-4">Cancel the order</div>
                            <div className="w-full flex justify-evenly">
                                <div onClick={() => this.clearAllOrderPage()} className="text-center flex justify-center items-center font-bold bg-gray hover:bg-grayNormal text-white text-xl uppercase  h-12 rounded-md pointer shadow-md  cursor-pointer px-3 ">
                                    Print
                                </div>
                                <div onClick={() => this.cancelModal()} className="text-center flex justify-center items-center font-bold text-white text-xl uppercase bg-primary h-12 rounded-md pointer shadow-md hover:bg-blue cursor-pointer px-3 ">
                                    Close
                                </div>
                                
                            </div> 
                        </div>
            }
        
    }
    
      clearAllOrderPage () {
        OrderDatas.data.splice(0, OrderDatas.data.length)
        OrderDatas.VAT = "0.00"
        OrderDatas.TotalAmount = "0.00"
        OrderDatas.TotalBill = "0.00"
        OrderDatas.guests = 0
        OrderDatas.tableUniq = "0"
        OrderDatas.customerUniq = "0"
        OrderDatas.waiterUniq = "0"
        
    }

    saveModal() {
        if (this.state.currentComponent === 'changeTable') {

           if (this.state.table != '') OrderDatas.tableUniq = this.state.table
           this.setState({showModal: false})

        }else if (this.state.currentComponent === 'selectWeiter') {
            
            if (this.state.waiter != '') OrderDatas.waiterUniq = this.state.waiter
            this.setState({showModal: false})

        }else if (this.state.currentComponent === 'selectCustomer') {
            
            if (this.state.customer != '') OrderDatas.customerUniq = this.state.customer
            this.setState({showModal: false})
            
        }else if (this.state.currentComponent === 'ticketNote') {

            if (this.state.ticketNote != '') OrderDatas.orderNote = this.state.ticketNote
            this.setState({showModal: false})
            
        }else if (this.state.currentComponent === 'numberOfGuest') {
            
             OrderDatas.guests = this.state.guests
             this.setState({showModal: false})
        }
    }

    cancelModal() {
        this.setState({ 
            showModal: false,
        })
    }


    changeComponent(component) {
        this.setState({
            currentComponent: component,
            showModal:true
        })
        
    }
    
    render(){ return(
        <div className="mx-1 mt-1 overflow-x-auto h-full">

                {
                this.state.data.map((obj, index) =><button key={index} onClick={() => this.changeComponent(obj.component)} className="w-full bg-primary rounded h-height10% flex justify-center items-center mt-1">
                    <h1  className="text-white uppercase not-italic sm:font-light md:font-light lg:font-semibold xl:font-bold tracking-wide font-sans sm:text-smallFont md:text-tiny lg:text-lg xl:text-xl 2xl:text-2xl sm:leading-3 md:leading-4 lg:leading-5 xl:leading-6 text-center">
                        {obj.name}
                    </h1>
                    </button>)
                }

                { this.state.showModal == true ? this.Modal() : null }

        </div>
    
    )}
}

export default LeftbarButtons